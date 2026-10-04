"use client";

import { ReactNode, useEffect, useState } from "react";
import Header from "@/components/Header";
import CloudHorizon from "@/components/CloudHorizon";
import TopDrawer from "@/components/TopDrawer";

type Altitude = "ground" | "ascending" | "orbit";

export default function SiteShell({ children }: { children: ReactNode }) {
  const [altitude, setAltitude] = useState<Altitude>("ground");

  useEffect(() => {
    const start = () => setAltitude("ascending");
    const orbit = () => setAltitude("orbit");
    const end = () => setAltitude("ground");

    window.addEventListener("higher:ascent-start", start);
    window.addEventListener("higher:orbit-enter", orbit);
    window.addEventListener("higher:ascent-end", end);

    return () => {
      window.removeEventListener("higher:ascent-start", start);
      window.removeEventListener("higher:orbit-enter", orbit);
      window.removeEventListener("higher:ascent-end", end);
    };
  }, []);

  return (
    <div className={`siteShell siteAltitude-${altitude}`}>
      <Header />
      <main className="siteViewport">{children}</main>
      <CloudHorizon />
      <TopDrawer />
    </div>
  );
}
