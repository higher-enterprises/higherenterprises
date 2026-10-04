"use client";

import Image from "next/image";

const logoMap: Record<string, string> = {
  "SIBZ": "/assets/studios/sibz.png",
  "BLUE EAGLE": "/assets/studios/blue-eagle.png",
  "CLEAVE": "/assets/studios/realsite.png",
  "BELOVED": "/assets/studios/beloved.png",
  "D2X": "/assets/studios/d2x.png",
  "TENTMAKER": "/assets/studios/tentmaker.png",
  "ACTS": "/assets/studios/acts.png",
  "THANKWORTHY": "/assets/studios/thankworthy.png",
  "RAZED": "/assets/studios/razed.png",
  "FLYY": "/assets/studios/flyy.png",
  "BLACK EAGLE": "/assets/studios/black-eagle.png",
  "ALPHA7": "/assets/studios/alpha7.png",
};

export default function StudioLogo({
  studio,
  tiny = false,
}: {
  studio: string;
  tiny?: boolean;
}) {
  const key = studio.replace(/\.VENTURES$/i, "").trim().toUpperCase();
  const src = logoMap[key];

  if (!src) return null;

  return (
    <Image
      className={tiny ? "officialStudioLogo tiny" : "officialStudioLogo"}
      src={src}
      alt={key}
      width={tiny ? 28 : 320}
      height={tiny ? 28 : 190}
    />
  );
}
