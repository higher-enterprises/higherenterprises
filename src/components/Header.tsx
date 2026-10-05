"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="header">
        <div className="headerBrandGroup">
          <button
            type="button"
            className={`mobileMenuButton${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link className="brand brandLogo" href="/" aria-label="Higher Enterprises">
            <Image
              src="/assets/higher-enterprises-logo.png"
              alt="Higher Enterprises"
              width={430}
              height={218}
              priority
            />
          </Link>
        </div>

        <nav aria-label="Primary navigation">
          <Link href="/">Rising</Link>
          <Link href="/ventures">Ventures</Link>
          <Link href="/studios">Studios</Link>
          <Link href="/perspective">Perspective</Link>
        </nav>

        <div className="headerActions">
          <Link className="headerCta" href="/contact">
            Take Me Higher<span aria-hidden="true"></span>
          </Link>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`mobileNavOverlay${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobileNavLinks" aria-label="Mobile navigation">
          <Link href="/" onClick={() => setMenuOpen(false)}>Rising</Link>
          <Link href="/ventures" onClick={() => setMenuOpen(false)}>Ventures</Link>
          <Link href="/studios" onClick={() => setMenuOpen(false)}>Studios</Link>
          <Link href="/perspective" onClick={() => setMenuOpen(false)}>Perspective</Link>
        </nav>
      </div>
    </>
  );
}
