"use client";

import { useState } from "react";
import Image from "next/image";
import StudioModal from "@/components/StudioModal";
import { studios } from "@/data/studios";

type Studio = (typeof studios)[number];

export default function Studios({ embedded = false }: { embedded?: boolean }) {
  const [selectedStudio, setSelectedStudio] = useState<Studio | null>(null);

  const openStudio = (studio: Studio) => setSelectedStudio(studio);
  const closeStudio = () => setSelectedStudio(null);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    studio: Studio
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openStudio(studio);
    }
  };

  return (
    <>
      <section
        id="studios"
        className={embedded ? "studios studiosEmbedded" : "studios section"}
      >
        <div className="studioGrid studioRevealGrid">
          {studios.map((studio) => (
            <article
              className="studio studioReveal studioLaunchCard"
              key={studio.slug}
              role="button"
              tabIndex={0}
              aria-label={`Open ${studio.name} studio`}
              onClick={() => openStudio(studio)}
              onKeyDown={(event) => handleKeyDown(event, studio)}
            >
              <Image
                className="studioPhoto"
                src={studio.image}
                alt=""
                fill
                sizes="(max-width: 720px) 50vw, (max-width: 1100px) 33vw, 20vw"
              />
            </article>
          ))}
        </div>
      </section>

      <StudioModal studio={selectedStudio} onClose={closeStudio} />
    </>
  );
}
