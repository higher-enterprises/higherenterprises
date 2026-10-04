"use client";

import type { CSSProperties } from "react";

export default function PartsyWorld() {
  return (
    <svg
      className="featuredWorldArt"
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
      aria-hidden="true"
    >
      <path className="featuredWorldLine" d="M160 610 Q210 500 360 485 L620 485 Q760 500 825 610" pathLength="1" style={{ "--world-delay": "1700ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M220 610 L760 610" pathLength="1" style={{ "--world-delay": "1815ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M290 485 L350 400 L560 400 L650 485" pathLength="1" style={{ "--world-delay": "1930ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M350 400 L330 330 L590 330 L560 400" pathLength="1" style={{ "--world-delay": "2045ms", "--world-duration": "860ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M360 355 L555 355" pathLength="1" style={{ "--world-delay": "2160ms", "--world-duration": "930ms" } as CSSProperties} />
      <path className="featuredWorldLine faint" d="M260 610 A55 55 0 1 0 370 610" pathLength="1" style={{ "--world-delay": "2275ms", "--world-duration": "1000ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M650 610 A55 55 0 1 0 760 610" pathLength="1" style={{ "--world-delay": "2390ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M410 485 L410 565 L590 565 L590 485" pathLength="1" style={{ "--world-delay": "2505ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M445 520 L555 520" pathLength="1" style={{ "--world-delay": "2620ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M860 650 L860 350 L1390 350 L1390 650" pathLength="1" style={{ "--world-delay": "2735ms", "--world-duration": "860ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M910 400 L1340 400" pathLength="1" style={{ "--world-delay": "2850ms", "--world-duration": "930ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M930 455 L1030 455 L1030 610 L930 610 Z" pathLength="1" style={{ "--world-delay": "2965ms", "--world-duration": "1000ms" } as CSSProperties} />
      <path className="featuredWorldLine faint" d="M1080 455 L1180 455 L1180 610 L1080 610 Z" pathLength="1" style={{ "--world-delay": "3080ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M1230 455 L1340 455 L1340 520 L1230 520 Z" pathLength="1" style={{ "--world-delay": "3195ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M1000 315 L1090 260 L1180 315" pathLength="1" style={{ "--world-delay": "3310ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M120 700 L1470 700" pathLength="1" style={{ "--world-delay": "3425ms", "--world-duration": "860ms" } as CSSProperties} />
    </svg>
  );
}
