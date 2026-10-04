import type React from "react";
import { ReactNode } from "react";

export default function Screen({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`screenPage ${className}`.trim()}>
      <header className="screenHeading">
        {eyebrow ? <div className="kicker">{eyebrow}</div> : null}
        <h1>{title}</h1>
        {intro ? <div className="screenIntroContent">{intro}</div> : null}
      </header>

      <div className="screenContent">{children}</div>
    </section>
  );
}
