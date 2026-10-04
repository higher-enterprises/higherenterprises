"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    id: "innertainment",
    nav: "Innertainment",
    eyebrow: "01 / INNERTAINMENT",
    title: <>Ideas<br /><span>In Motion.</span></>,
    copy: "Video. Podcasts. Games. Films. Series. Documentaries. Multimedia. Stories that lift people higher.",
    image: "/assets/innertainment/01-innertainment.png",
    alt: "Innertainment visual world of screens, games and audio",
  },
  {
    id: "video",
    nav: "Video",
    eyebrow: "02 / VIDEO",
    title: <>Stories<br /><span>That Move.</span></>,
    copy: "Shorts, series, films, and documentaries — moving-image stories made to reach people and stay with them.",
    image: "/assets/innertainment/02-video.png",
    alt: "Cinema camera and production equipment",
    bullets: ["Shorts", "Series", "Films", "Documentaries"],
  },
  {
    id: "podcasts",
    nav: "Podcasts",
    eyebrow: "03 / PODCASTS",
    title: <>Conversations<br /><span>That Lift.</span></>,
    copy: "Original shows, interviews, narrative audio and conversations built around real people and ideas worth hearing.",
    image: "/assets/innertainment/03-podcasts.png",
    alt: "Studio microphone and audio production equipment",
    bullets: ["Original Shows", "Interviews", "Storytelling", "Real People. Real Purpose."],
  },
  {
    id: "games",
    nav: "Games",
    eyebrow: "04 / GAMES",
    title: <>Play<br /><span>With Purpose.</span></>,
    copy: "Interactive worlds where the audience becomes part of the story.",
    image: "/assets/innertainment/04-games.png",
    alt: "Game controller and imagined interactive world",
    bullets: ["Original IP", "Immersive Worlds", "Meaningful Gameplay", "Entertainment That Builds"],
  },
  {
    id: "multimedia",
    nav: "Multimedia",
    eyebrow: "05 / MULTIMEDIA",
    title: <>Experiences<br /><span>Without Limits.</span></>,
    copy: "Stories that move naturally between screens, spaces, formats and audiences.",
    image: "/assets/innertainment/05-multimedia.png",
    alt: "Layered multimedia screens",
    bullets: ["Interactive Content", "Live Experiences", "Branded Media", "Cross-Platform Storytelling"],
  },
  {
    id: "studios",
    nav: "Studios",
    eyebrow: "06 / STUDIOS",
    title: <>From Concept<br /><span>To Screen.</span></>,
    copy: "The production infrastructure that turns an idea into something people can see, hear and experience.",
    image: "/assets/innertainment/06-studios.png",
    alt: "Director chair, lights and studio production equipment",
    bullets: ["Development", "Production", "Post-Production", "Distribution"],
  },
];

export default function InnertainmentExperience() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const wheelLocked = useRef(false);
  const touchStart = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    activeRef.current = next;
    setActive(next);
  }, []);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        goTo(activeRef.current + 1);
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goTo(activeRef.current - 1);
      } else if (event.key === "Home") {
        goTo(0);
      } else if (event.key === "End") {
        goTo(slides.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  const onWheel = (event: React.WheelEvent) => {
    const delta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

    if (Math.abs(delta) < 20 || wheelLocked.current) return;

    wheelLocked.current = true;
    goTo(activeRef.current + (delta > 0 ? 1 : -1));
    window.setTimeout(() => {
      wheelLocked.current = false;
    }, 800);
  };

  return (
    <section
      className="innertainment"
      aria-label="Higher Innertainment"
      onWheel={onWheel}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const end = event.changedTouches[0]?.clientX ?? touchStart.current;
        const distance = touchStart.current - end;
        if (Math.abs(distance) > 55) {
          goTo(activeRef.current + (distance > 0 ? 1 : -1));
        }
        touchStart.current = null;
      }}
    >
      <div
        className="innertainmentTrack"
        style={{ transform: `translate3d(-${active * 100}vw,0,0)` }}
      >
        {slides.map((slide, index) => (
          <article
            className={`innertainmentSlide ${index === active ? "isActive" : ""}`}
            key={slide.id}
            aria-hidden={index !== active}
          >
            <div className="innertainmentCopy">
              <div className="innertainmentEyebrow">{slide.eyebrow}</div>
              <h1>{slide.title}</h1>
              <p>{slide.copy}</p>

              {slide.bullets ? (
                <ul>
                  {slide.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}

              <button
                className="innertainmentExplore"
                type="button"
                onClick={() => goTo(index === slides.length - 1 ? 0 : index + 1)}
              >
                <b aria-hidden="true">→</b>
                <span>Explore</span>
              </button>
            </div>

            <div className="innertainmentVisual" aria-hidden="true">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index < 2}
                sizes="(max-width: 900px) 100vw, 62vw"
              />
            </div>
          </article>
        ))}
      </div>

      <nav className="innertainmentNav" aria-label="Innertainment media">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            className={index === active ? "active" : ""}
            onClick={() => goTo(index)}
            aria-current={index === active ? "page" : undefined}
          >
            <small>0{index + 1}</small>
            <strong>{slide.nav}</strong>
            <span>
              {index === 0 && "Ideas In Motion"}
              {index === 1 && "Shorts. Series. Films."}
              {index === 2 && "Conversations That Lift"}
              {index === 3 && "Play With Purpose"}
              {index === 4 && "Interactive Experiences"}
              {index === 5 && "From Concept To Screen"}
            </span>
          </button>
        ))}
      </nav>

      <div className="innertainmentCounter" aria-hidden="true">
        0{active + 1} <i /> 06
      </div>
    </section>
  );
}
