"use client";

import { useMemo } from "react";
import { ventureWorlds } from "@/data/ventureWorlds";

type DrawPath = {
  d: string;
  originalIndex: number;
  complexity: number;
  tier: "major" | "secondary" | "detail";
};

function pathComplexity(d: string) {
  /*
   * Existing generated paths consist primarily of M/L commands.
   * Coordinate pairs give us a useful proxy for contour size/complexity
   * without introducing an SVG geometry parser.
   */
  const numbers = d.match(/-?\d*\.?\d+/g);
  return numbers ? numbers.length : 0;
}

export default function VentureDrawnWorld({
  name,
}: {
  name: string;
}) {
  const world = ventureWorlds[name];

  const drawPaths = useMemo<DrawPath[]>(() => {
    if (!world) return [];

    const measured = world.paths
      .map((d, originalIndex) => ({
        d,
        originalIndex,
        complexity: pathComplexity(d),
      }))
      /*
       * Remove tiny edge-detection fragments.
       *
       * This is intentionally conservative. We retain enough geometry
       * to describe the scene while removing the little squiggles that
       * currently make foliage/highlights look like visual noise.
       */
      .filter((path) => path.complexity >= 28);

    if (!measured.length) return [];

    /*
     * Rank by contour complexity.
     * Large structural contours become the primary drawing.
     */
    const ranked = [...measured].sort(
      (a, b) => b.complexity - a.complexity
    );

    const majorCut =
      ranked[Math.max(0, Math.floor(ranked.length * 0.18) - 1)]
        ?.complexity ?? 0;

    const secondaryCut =
      ranked[Math.max(0, Math.floor(ranked.length * 0.55) - 1)]
        ?.complexity ?? 0;

    return measured
      .map((path): DrawPath => {
        let tier: DrawPath["tier"] = "detail";

        if (path.complexity >= majorCut) {
          tier = "major";
        } else if (path.complexity >= secondaryCut) {
          tier = "secondary";
        }

        return {
          ...path,
          tier,
        };
      })
      /*
       * Draw the larger structural information first.
       * Original index is retained as the tie-breaker so the source's
       * existing top-to-bottom ordering still influences the reveal.
       */
      .sort((a, b) => {
        const tierOrder = {
          major: 0,
          secondary: 1,
          detail: 2,
        };

        const tierDifference =
          tierOrder[a.tier] - tierOrder[b.tier];

        if (tierDifference !== 0) return tierDifference;

        return a.originalIndex - b.originalIndex;
      });
  }, [world]);

  if (!world) return null;

  const total = Math.max(1, drawPaths.length - 1);

  return (
    <div className="ventureWorldComposite">
      {/* Finished venture environment */}
      <img
        className="ventureWorldBackground"
        src={world.background}
        alt=""
        aria-hidden="true"
      />

      {/* Construction / architectural drawing */}
      <svg
        className="ventureDrawnWorld"
        viewBox={`0 0 ${world.width} ${world.height}`}
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
        aria-hidden="true"
      >
        {drawPaths.map((path, i) => {
          const progress = i / total;

          /*
           * Begin after founder entrance.
           *
           * Major structure appears first.
           * Secondary geometry follows.
           * Remaining useful detail finishes the sketch.
           */
          const delay =
            path.tier === "major"
              ? 1650 + progress * 1300
              : path.tier === "secondary"
                ? 2350 + progress * 1500
                : 3150 + progress * 1300;

          const duration =
            path.tier === "major"
              ? 850
              : path.tier === "secondary"
                ? 650
                : 500;

          return (
            <path
              key={`${name}-${path.originalIndex}`}
              className={`ventureMappedStroke ventureMappedStroke--${path.tier}`}
              d={path.d}
              pathLength="1"
              style={{
                ["--trace-delay" as string]: `${Math.round(delay)}ms`,
                ["--trace-duration" as string]: `${duration}ms`,
              }}
            />
          );
        })}
      </svg>

      {/* Keeps copy/founder area from becoming visually busy */}
      <div
        className="ventureWorldReadability"
        aria-hidden="true"
      />
    </div>
  );
}