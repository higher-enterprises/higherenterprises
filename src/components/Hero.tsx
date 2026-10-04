"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { companies } from "@/data/companies";

const featured = companies.filter((c) => c.featured && c.hero);

const featuredBackgrounds: Record<string, string> = {
  SCHEDDY: "/assets/home/worlds/scheddy-background.png",
  "BEAUTIFUL REPAIR": "/assets/home/worlds/beautiful-repair-background.png",
  CLEAVE: "/assets/home/worlds/cleave-background.png",
  "DUMP PASS": "/assets/home/worlds/dump-pass-background.png",
  HANDSY: "/assets/home/worlds/handsy-background.png",
  SIPPIN: "/assets/home/worlds/sippin-background.png",
  MENTOR180: "/assets/home/worlds/mentor180-background.png",
  "SIBZ CORPORATION": "/assets/home/worlds/sibz-corporation-background.png",
  "PARTSY, INC.": "/assets/home/worlds/partsy-background.png",
  "TRADE BOWL": "/assets/home/worlds/tradebowl-background.png",
  "WEE WORKER": "/assets/home/worlds/wee-worker-background.png",
};

const ENTER_MS = 5200;
const HOLD_MS = 9000;
const FADE_MS = 1900;
const WANNA_GO_MS = 1150;

type Phase = "preenter" | "entering" | "holding" | "fading" | "gap";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<Phase>("preenter");
  const [paused, setPaused] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);

  const runCycle = useCallback(() => {
    clearTimers();

    // Paint the next venture below the viewport first so it
    // rises naturally from behind the existing cloud horizon.
    setPhase("preenter");

    timers.current.push(
      window.setTimeout(() => setPhase("entering"), 80)
    );

    timers.current.push(
      window.setTimeout(
        () => setPhase("holding"),
        80 + ENTER_MS
      )
    );

    timers.current.push(
      window.setTimeout(
        () => setPhase("fading"),
        80 + ENTER_MS + HOLD_MS
      )
    );

    timers.current.push(
      window.setTimeout(
        () => setPhase("gap"),
        80 + ENTER_MS + HOLD_MS + FADE_MS
      )
    );

    timers.current.push(
      window.setTimeout(() => {
        setActive((v) => (v + 1) % featured.length);
      }, 80 + ENTER_MS + HOLD_MS + FADE_MS + WANNA_GO_MS)
    );
  }, [clearTimers]);

  useEffect(() => {
    if (paused) {
      clearTimers();
      return;
    }

    runCycle();

    return clearTimers;
  }, [active, paused, runCycle, clearTimers]);

  useEffect(() => {
    let resume: number | undefined;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 28) return;

      e.preventDefault();
      clearTimers();
      setPaused(true);
      setPhase("fading");

      window.setTimeout(() => {
        setPhase("gap");

        window.setTimeout(() => {
          setActive(
            (v) =>
              (v + (e.deltaY > 0 ? 1 : -1) + featured.length) %
              featured.length
          );

          setPhase("preenter");
          setPaused(false);
        }, WANNA_GO_MS);
      }, FADE_MS);

      if (resume) {
        window.clearTimeout(resume);
      }
    };

    window.addEventListener("wheel", onWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", onWheel);

      if (resume) {
        window.clearTimeout(resume);
      }
    };
  }, [clearTimers]);

  if (!featured.length) return null;

  const item = featured[active];
  const background = featuredBackgrounds[item.name.toUpperCase()];

  return (
    <section
      className="ventureStage"
      aria-label="Featured ventures"
    >
      <div className="wannaGo" aria-hidden="true">
        wanna go?
      </div>

      <div className="ventureSlides">
        <article
          className={`ventureSlide ${phase}`}
          key={item.name}
        >
          {background ? (
            <div className="ventureBackgroundDropWrap" aria-hidden="true">
              <div className="ventureBackgroundDrop">
                <img
                  className="ventureBackgroundDropImage"
                  src={background}
                  alt=""
                />
              </div>
              <div className="ventureDropCloud ventureDropCloudBack" />
              <div className="ventureDropCloud ventureDropCloudFront" />
            </div>
          ) : null}

          <div className="ventureForeground">
            <div className="ventureSlideCopy ventureCopySlide">
              {item.logo ? (
                <img
                  className="ventureHeroLogo"
                  src={item.logo}
                  alt={`${item.name} logo`}
                />
              ) : (
                <div className="ventureHeroNameMark">
                  {item.name}
                </div>
              )}

              <h1>{item.name}</h1>

              <p>{item.description}</p>

              <button
                type="button"
                className="ventureExplore"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("higher:drawer-open", {
                      detail: {
                        company: item,
                      },
                    })
                  )
                }
              >
                Explore Venture <span>→</span>
              </button>
            </div>

            <div className="ventureVisualWrap ventureOwnerRise">
              <img
                className="ventureHeroVisual"
                src={item.hero}
                alt={item.name}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}