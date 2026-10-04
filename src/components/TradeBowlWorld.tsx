"use client";

import type { CSSProperties } from "react";

export default function TradeBowlWorld() {
  return (
    <svg
      className="featuredWorldArt"
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
      aria-hidden="true"
    >
      <path className="featuredWorldLine" d="M150 650 L150 300 L600 300 L600 650" pathLength="1" style={{ "--world-delay": "1700ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M200 350 L550 350" pathLength="1" style={{ "--world-delay": "1815ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M200 410 L550 410" pathLength="1" style={{ "--world-delay": "1930ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M200 470 L550 470" pathLength="1" style={{ "--world-delay": "2045ms", "--world-duration": "860ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M200 530 L550 530" pathLength="1" style={{ "--world-delay": "2160ms", "--world-duration": "930ms" } as CSSProperties} />
      <path className="featuredWorldLine faint" d="M200 590 L550 590" pathLength="1" style={{ "--world-delay": "2275ms", "--world-duration": "1000ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M700 650 L700 420 L920 420 L920 650" pathLength="1" style={{ "--world-delay": "2390ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M750 470 L870 470" pathLength="1" style={{ "--world-delay": "2505ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M750 525 L870 525" pathLength="1" style={{ "--world-delay": "2620ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M750 580 L870 580" pathLength="1" style={{ "--world-delay": "2735ms", "--world-duration": "860ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M1020 650 L1020 350 L1410 350 L1410 650" pathLength="1" style={{ "--world-delay": "2850ms", "--world-duration": "930ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M1070 405 L1360 405" pathLength="1" style={{ "--world-delay": "2965ms", "--world-duration": "1000ms" } as CSSProperties} />
      <path className="featuredWorldLine faint" d="M1090 470 Q1150 410 1210 470 Q1270 410 1330 470" pathLength="1" style={{ "--world-delay": "3080ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M1090 540 Q1150 600 1210 540 Q1270 600 1330 540" pathLength="1" style={{ "--world-delay": "3195ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M650 345 Q760 220 870 345" pathLength="1" style={{ "--world-delay": "3310ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M120 700 L1470 700" pathLength="1" style={{ "--world-delay": "3425ms", "--world-duration": "860ms" } as CSSProperties} />
    </svg>
  );
}
