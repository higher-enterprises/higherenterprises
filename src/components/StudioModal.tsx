"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { studios } from "@/data/studios";

type Studio = (typeof studios)[number];

export default function StudioModal({
  studio,
  onClose,
}: {
  studio: Studio | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!studio) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [studio, onClose]);

  if (!studio) return null;

  return (
    <div
      className="studioModalLayer"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="studioModalCard"
        role="dialog"
        aria-modal="true"
        aria-labelledby="studio-modal-title"
      >
        <button
          className="studioModalClose"
          type="button"
          aria-label="Close studio details"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <div className="studioModalBrand">
          <Image
            className="officialStudioLogo"
            src={studio.image}
            alt={`${studio.name} logo`}
            width={320}
            height={190}
          />
        </div>

        <p className="studioModalKicker">VENTURE STUDIO</p>

        <h2 id="studio-modal-title">{studio.name}</h2>

        <p className="studioModalFocus">{studio.focus}</p>

        <p className="studioModalDetail">{studio.detail}</p>

        <div className="studioModalRule" />

        <div className="studioModalFooter">
          <div className="studioModalFooterCopy">
            <span>INCUBATOR</span>
            <strong>Build with this studio.</strong>
          </div>

          <button
            className="studioModalExplore"
            type="button"
            onClick={() => {
              /*
               * Reserved for the future dedicated studio page/action.
               * Keeping this local means TopDrawer remains completely untouched.
               */
            }}
          >
            EXPLORE THE STUDIO <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
