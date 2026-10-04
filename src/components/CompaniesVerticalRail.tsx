"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { enterprises } from "@/data/enterprises";

const ENTER_MS = 1250;
const SHUTTLE_RISE_MS = 1800;
const HOLD_MS = 10000;
const EXIT_MS = 1450;
const ASCEND_MS = 2800;
const IGNITION_MS = 1600;
const COUNTDOWN_TICK_MS = 100;

type Phase = "entering" | "raising" | "holding" | "transitioning";
type World = "companies" | "ascending" | "orbit";


export default function CompaniesVerticalRail() {
  const [active, setActive] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>("entering");
  const [paused, setPaused] = useState(false);
  const [world, setWorld] = useState<World>("companies");
  const [orbitActive, setOrbitActive] = useState(0);
  const [remainingMs, setRemainingMs] = useState(HOLD_MS);
  const [launching, setLaunching] = useState(false);
  const timerRef = useRef<number | null>(null);
  const countdownRef = useRef<number | null>(null);
  const holdStartedRef = useRef<number>(0);
  const wheelLock = useRef(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const clearCountdown = useCallback(() => {
    if (countdownRef.current !== null) {
      window.clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
  }, []);

  const indexFrom = useCallback(
    (from: number, direction: number) =>
      (from + direction + enterprises.length) % enterprises.length,
    []
  );

  const beginTransition = useCallback(
    (direction = 1) => {
      if (world !== "companies" || phase === "transitioning" || !enterprises.length) return;
      clearTimer();
      clearCountdown();
      setNext(indexFrom(active, direction));
      setPhase("transitioning");
    },
    [active, phase, world, clearTimer, clearCountdown, indexFrom]
  );

  const enterOrbit = useCallback((index: number) => {
    clearTimer();
    clearCountdown();
    setPaused(true);
    setOrbitActive(index);

    // Tell the global SiteShell to move the REAL persistent cloud horizon
    // down and out of view while this page rises into the stratosphere.
    window.dispatchEvent(new CustomEvent("higher:ascent-start"));
    setWorld("ascending");

    window.setTimeout(() => {
      setWorld("orbit");
      window.dispatchEvent(new CustomEvent("higher:orbit-enter"));
    }, ASCEND_MS);
  }, [clearTimer, clearCountdown]);

  const leaveOrbit = useCallback(() => {
    // Reverse the global shell/cloud transition at the same time that the
    // Companies scene returns.
    window.dispatchEvent(new CustomEvent("higher:ascent-end"));
    setActive(orbitActive);
    setNext(null);
    setPhase("holding");
    setRemainingMs(HOLD_MS);
    setWorld("companies");
    setPaused(false);
  }, [orbitActive]);

  useEffect(() => {
    clearTimer();
    clearCountdown();
    if (paused || world !== "companies") return;

    if (phase === "entering") {
      setRemainingMs(HOLD_MS);
      timerRef.current = window.setTimeout(() => setPhase("raising"), ENTER_MS);
    } else if (phase === "raising") {
      setRemainingMs(HOLD_MS);
      timerRef.current = window.setTimeout(() => setPhase("holding"), SHUTTLE_RISE_MS);
    } else if (phase === "holding") {
      holdStartedRef.current = performance.now();
      setRemainingMs(HOLD_MS);

      countdownRef.current = window.setInterval(() => {
        const elapsed = performance.now() - holdStartedRef.current;
        setRemainingMs(Math.max(0, HOLD_MS - elapsed));
      }, COUNTDOWN_TICK_MS);

      timerRef.current = window.setTimeout(() => {
        clearCountdown();

        // The launch happens automatically on schedule and remains independent
        // from the Explore Company action.
        setRemainingMs(0);
        setLaunching(true);

        // Keep the pad and page stationary while only the shuttle rig lifts off.
        window.setTimeout(() => {
          setLaunching(false);

          setNext(indexFrom(active, 1));
          setPhase("transitioning");
        }, 1450);
      }, HOLD_MS);
    } else if (phase === "transitioning" && next !== null) {
      timerRef.current = window.setTimeout(() => {
        setActive(next);
        setNext(null);
        setRemainingMs(HOLD_MS);
        setPhase("entering");
      }, EXIT_MS);
    }

    return () => {
      clearTimer();
      clearCountdown();
    };
  }, [active, next, phase, paused, world, clearTimer, clearCountdown, enterOrbit, indexFrom]);
  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (world !== "companies" || Math.abs(event.deltaY) < 30 || wheelLock.current) return;
      event.preventDefault();
      wheelLock.current = true;
      beginTransition(event.deltaY > 0 ? 1 : -1);
      window.setTimeout(() => {
        wheelLock.current = false;
      }, EXIT_MS + 180);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [beginTransition, world]);

  useEffect(() => () => {
    clearTimer();
    clearCountdown();
  }, [clearTimer, clearCountdown]);

  useEffect(() => {
    return () => {
      window.dispatchEvent(new CustomEvent("higher:ascent-end"));
    };
  }, []);

  if (!enterprises.length) return null;

  const renderSlide = (
    index: number,
    state: "entering" | "holding" | "exiting",
    role: "active" | "incoming"
  ) => {
    const item = enterprises[index];

    return (
      <article key={`${role}-${index}`} className={`enterpriseSlide ${state} ${role}`}>
        <div className="enterpriseCopy">
          <div className="enterpriseEyebrow">{item.eyebrow}</div>
          {item.logo && (
            <img className="enterpriseLogo" src={item.logo} alt={`${item.name} logo`} />
          )}
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <div className={`enterpriseLaunchClock ${phase === "holding" ? "isVisible" : ""}`} aria-live={role === "active" ? "polite" : "off"}>
            <span>NEXT LAUNCH</span>
            <strong>
              T−{String(Math.max(0, Math.ceil(remainingMs / 1000))).padStart(2, "0")}
            </strong>
          </div>
        </div>

        <div className="enterpriseVisualWrap">
          <div className="enterpriseLaunchBay">
            <img
              className="enterpriseLaunchPad"
              src="/assets/enterprises/launch/backgrounds/launch_station.png"
              alt=""
            />


            <div className={`enterpriseLaunchSmoke ${remainingMs <= IGNITION_MS ? "isIgniting" : ""}`} aria-hidden="true">
              <img src="/assets/enterprises/launch/smoke/smoke_ground_1.png" alt="" />
              <img src="/assets/enterprises/launch/smoke/smoke_ground_2.png" alt="" />
              <img src="/assets/enterprises/launch/smoke/smoke_ground_3.png" alt="" />
            </div>
          </div>

          <div className="enterpriseFlightLayer" aria-hidden="true">
            <div className={`enterpriseShuttleRig ${phase === "raising" ? "isRaising" : ""} ${phase === "holding" ? "isParked" : ""} ${remainingMs <= IGNITION_MS && phase === "holding" ? "isIgniting" : ""} ${launching ? "isLaunching" : ""}`}>
              <div className="enterpriseEngineGlow" />
              <img
                className="enterpriseExhaust enterpriseExhaustGlow"
                src="/assets/enterprises/launch/exhaust/exhaust_glow.png"
                alt=""
              />
              <img
                className="enterpriseExhaust enterpriseExhaustMain"
                src="/assets/enterprises/launch/exhaust/exhaust_main.png"
                alt=""
              />
              <img
                className="enterpriseShuttle"
                src={`/assets/enterprises/launch/shuttles/shuttle-${String((index % 12) + 1).padStart(2, "0")}.png`}
                alt=""
              />
              {item.logo && (
                <img className="enterpriseShuttleBrand" src={item.logo} alt="" />
              )}
            </div>
          </div>
        </div>
      </article>
    );
  };

  const activeState =
    phase === "entering" ? "entering" :
    phase === "transitioning" ? "exiting" :
    "holding";

  const selected = enterprises[orbitActive];

  return (
    <section
      className={`enterpriseStage enterpriseWorld-${world}`}
      aria-label="HIGHER companies"
      onMouseEnter={() => world === "companies" && setPaused(true)}
      onMouseLeave={() => world === "companies" && setPaused(false)}
    >
      <div className="enterpriseAscentTrack">
        <div className="enterpriseAtmosphere">
          <div className="enterpriseBackdrop" aria-hidden="true"></div>
  
          <div className="enterpriseSlides">
            {renderSlide(active, activeState, "active")}
            {phase === "transitioning" && next !== null
              ? renderSlide(next, "entering", "incoming")
              : null}
          </div>
  
          <div className="enterprisePosition" aria-hidden="true">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <i />
            <span>{String(enterprises.length).padStart(2, "0")}</span>
          </div>
  
          <div className="enterpriseLiftClouds" aria-hidden="true" />
        </div>
  
        <div className="enterpriseTransition" aria-hidden="true">
          <div className="enterpriseTransitionHaze" />
        </div>
  
        <div className="enterpriseOrbit" aria-hidden={world === "companies"}>
          <div className="orbitStars" aria-hidden="true" />
          <div className="orbitGlow" aria-hidden="true" />
  
          <button type="button" className="orbitReturn" onClick={leaveOrbit}>
            ↓ Return to Companies
          </button>
  
          <div className="orbitFocus">
            <div className="orbitFocusEyebrow">
              {String(orbitActive + 1).padStart(2, "0")} / {String(enterprises.length).padStart(2, "0")}
            </div>
  
            <div className="orbitFocusObject" aria-hidden="true">
              <span />
            </div>
  
            <div className="orbitFocusCopy">
              <div>{selected.eyebrow}</div>
              {selected.logo && (
                <img src={selected.logo} alt={`${selected.name} logo`} />
              )}
              <h1>{selected.name}</h1>
              <p>{selected.description}</p>
              {selected.href && (
                <a href={selected.href}>
                  Visit Company <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </div>
  

        </div>
      </div>
    </section>
  );
}
