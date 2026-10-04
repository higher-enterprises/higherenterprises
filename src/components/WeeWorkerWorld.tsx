"use client";

import type { CSSProperties } from "react";

export default function WeeWorkerWorld() {
  return (
    <svg
      className="featuredWorldArt"
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
      aria-hidden="true"
    >
      <path className="featuredWorldLine" d="M150 650 L150 350 L550 350 L550 650" pathLength="1" style={{ "--world-delay": "1700ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M200 400 L500 400" pathLength="1" style={{ "--world-delay": "1815ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M220 460 L320 460 L320 610 L220 610 Z" pathLength="1" style={{ "--world-delay": "1930ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M370 460 L480 460 L480 530 L370 530 Z" pathLength="1" style={{ "--world-delay": "2045ms", "--world-duration": "860ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M650 650 L650 300 L980 300 L980 650" pathLength="1" style={{ "--world-delay": "2160ms", "--world-duration": "930ms" } as CSSProperties} />
      <path className="featuredWorldLine faint" d="M700 355 L930 355" pathLength="1" style={{ "--world-delay": "2275ms", "--world-duration": "1000ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M700 420 L930 420" pathLength="1" style={{ "--world-delay": "2390ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M700 485 L930 485" pathLength="1" style={{ "--world-delay": "2505ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M1080 650 L1080 390 L1410 390 L1410 650" pathLength="1" style={{ "--world-delay": "2620ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M1130 445 L1360 445" pathLength="1" style={{ "--world-delay": "2735ms", "--world-duration": "860ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M1150 505 L1230 505 L1230 610 L1150 610 Z" pathLength="1" style={{ "--world-delay": "2850ms", "--world-duration": "930ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M1270 505 L1360 505 L1360 560 L1270 560 Z" pathLength="1" style={{ "--world-delay": "2965ms", "--world-duration": "1000ms" } as CSSProperties} />
      <path className="featuredWorldLine faint" d="M605 300 L665 240 L725 300" pathLength="1" style={{ "--world-delay": "3080ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M1030 390 L1080 335 L1130 390" pathLength="1" style={{ "--world-delay": "3195ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M120 700 L1470 700" pathLength="1" style={{ "--world-delay": "3310ms", "--world-duration": "790ms" } as CSSProperties} />
    </svg>
  );
}
