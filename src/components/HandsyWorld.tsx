"use client";

import type { CSSProperties } from "react";

export default function HandsyWorld() {
  return (
    <svg
      className="featuredWorldArt"
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
      aria-hidden="true"
    >
      <path className="featuredWorldLine" d="M150 650 L150 360 L520 360 L520 650" pathLength="1" style={{ "--world-delay": "1700ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M195 405 L475 405" pathLength="1" style={{ "--world-delay": "1815ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M210 455 L300 455 L300 610 L210 610 Z" pathLength="1" style={{ "--world-delay": "1930ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M335 455 L455 455 L455 520 L335 520 Z" pathLength="1" style={{ "--world-delay": "2045ms", "--world-duration": "860ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M350 545 L440 545 L440 610 L350 610 Z" pathLength="1" style={{ "--world-delay": "2160ms", "--world-duration": "930ms" } as CSSProperties} />
      <path className="featuredWorldLine faint" d="M590 650 L590 500 L990 500 L990 650" pathLength="1" style={{ "--world-delay": "2275ms", "--world-duration": "1000ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M630 500 L630 455 L950 455 L950 500" pathLength="1" style={{ "--world-delay": "2390ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M680 455 L680 395 L900 395 L900 455" pathLength="1" style={{ "--world-delay": "2505ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M720 395 L720 330 L860 330 L860 395" pathLength="1" style={{ "--world-delay": "2620ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M1080 650 L1080 360 L1410 360 L1410 650" pathLength="1" style={{ "--world-delay": "2735ms", "--world-duration": "860ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M1120 410 L1370 410" pathLength="1" style={{ "--world-delay": "2850ms", "--world-duration": "930ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M1160 455 L1210 455 L1210 590 L1160 590 Z" pathLength="1" style={{ "--world-delay": "2965ms", "--world-duration": "1000ms" } as CSSProperties} />
      <path className="featuredWorldLine faint" d="M1250 455 L1360 455 L1360 520 L1250 520 Z" pathLength="1" style={{ "--world-delay": "3080ms", "--world-duration": "650ms" } as CSSProperties} />
      <path className="featuredWorldLine detail" d="M655 590 L735 540 L815 590 L895 535 L955 580" pathLength="1" style={{ "--world-delay": "3195ms", "--world-duration": "720ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M180 320 L230 320 M255 320 L305 320 M330 320 L380 320 M405 320 L455 320" pathLength="1" style={{ "--world-delay": "3310ms", "--world-duration": "790ms" } as CSSProperties} />
      <path className="featuredWorldLine" d="M120 700 L1470 700" pathLength="1" style={{ "--world-delay": "3425ms", "--world-duration": "860ms" } as CSSProperties} />
    </svg>
  );
}
