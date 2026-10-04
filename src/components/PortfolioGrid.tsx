"use client";

import { useMemo, useState } from "react";
import { portfolio, studios } from "@/data/portfolio";
import { SlidersHorizontal, X } from "lucide-react";

export default function PortfolioGrid() {
  const [studio, setStudio] = useState("ALL");
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => portfolio.filter((item) => {
    const studioMatch = studio === "ALL" || item.studio === studio;
    const q = query.trim().toLowerCase();
    const queryMatch = !q || `${item.name} ${item.studio} ${item.category} ${item.stage} ${item.description}`.toLowerCase().includes(q);
    return studioMatch && queryMatch;
  }), [studio, query]);

  // Keep enough cards in each half of the marquee for a seamless loop,
  // even when a studio filter returns only one or two ventures.
  const loopSet = useMemo(() => {
    if (!results.length) return [];
    const repeats = Math.max(1, Math.ceil(6 / results.length));
    return Array.from({ length: repeats }, () => results).flat();
  }, [results]);

  const openItem = (item: typeof portfolio[number]) => {
    window.dispatchEvent(new CustomEvent("higher:drawer-open", { detail: {
      title: item.name,
      html: `<p class="kicker">${item.studio}</p><p>${item.description}</p><div class="drawerMeta"><span>${item.category}</span><span>${item.stage}</span></div>`
    }}));
  };

  return (
    <div className="portfolioExperience">
      <div className="portfolioToolbar">
        <button className="filterTrigger" onClick={() => setFiltersOpen((v) => !v)}>
          {filtersOpen ? <X size={17} /> : <SlidersHorizontal size={17} />} Filter by studio
        </button>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search portfolio" aria-label="Search portfolio" />
        <span className="resultCount">{results.length} {results.length === 1 ? "venture" : "ventures"}</span>
      </div>

      <div className={`studioFilters ${filtersOpen ? "open" : ""}`}>
        {studios.map((s) => (
          <button key={s} className={studio === s ? "active" : ""} onClick={() => setStudio(s)}>{s}</button>
        ))}
      </div>

      <div className="portfolioMarqueeStage">
        {results.length ? (
          <div className="portfolioMarquee" key={`${studio}-${query}`}>
            {[0, 1].map((group) => (
              <div className="portfolioMarqueeGroup" key={group} aria-hidden={group === 1}>
                {loopSet.map((item, i) => (
                  <button
                    className="portfolioTab"
                    key={`${group}-${item.name}-${i}`}
                    onClick={() => openItem(item)}
                  >
                    <div className="portfolioTabTop">
                      <span>{item.studio}</span>
                      <b>{item.stage}</b>
                    </div>
                    <div className="portfolioTabCore">
                      <span className="portfolioTabCategory">{item.category}</span>
                      <h3>{item.name}</h3>
                    </div>
                    <div className="portfolioTabReveal">
                      <p>{item.description}</p>
                      <span>View venture <b>→</b></span>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="portfolioEmpty">No ventures match this filter.</div>
        )}
      </div>
    </div>
  );
}
