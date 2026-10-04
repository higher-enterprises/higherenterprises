"use client";

import Image from "next/image";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  Building2,
  ChevronDown,
  Search,
  SlidersHorizontal,
  Target,
  Sparkles,
  Tags,
} from "lucide-react";
import {
  companies,
  industries,
  stages,
  studioOptions,
  impacts,
  tagOptions,
  type Company,
} from "@/data/companies";
import StudioLogo from "@/components/StudioLogo";

const stageColor = Object.fromEntries(stages.map((s) => [s.name, s.color]));

const studioShort = (studio: string) =>
  studio
    .replace(/\.VENTURES$/i, "")
    .replace(/ VENTURES$/i, "")
    .replace(/^HIGHER\s+/i, "");

type MenuName =
  | "venture"
  | "studio"
  | "stage"
  | "industry"
  | "impact"
  | "tag"
  | null;

function Menu({
  open,
  children,
  className = "",
}: {
  open: boolean;
  children: ReactNode;
  className?: string;
}) {
  return open ? <div className={`filterMenu ${className}`}>{children}</div> : null;
}

function CheckRow({
  checked,
  label,
  onChange,
  swatch,
  mark,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
  swatch?: string;
  mark?: string;
}) {
  return (
    <label className="checkRow">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {mark && <span className="studioMiniLogo">{mark}</span>}
      {swatch && <i className="stageSwatch" style={{ background: swatch }} />}
      <span>{label}</span>
    </label>
  );
}

function CompanyCard({
  item,
  duplicate = false,
}: {
  item: Company;
  duplicate?: boolean;
}) {
  const open = () =>
    window.dispatchEvent(
      new CustomEvent("higher:drawer-open", {
        detail: {
          title: item.name,
          company: item,
        },
      })
    );

  return (
    <button
      className="companyCard"
      onClick={open}
      tabIndex={duplicate ? -1 : 0}
      aria-hidden={duplicate || undefined}
      style={{ "--stage": stageColor[item.stage] } as CSSProperties}
    >
      <div className="companyImage">
        <Image src={item.image} alt="" fill sizes="310px" />

        {item.logo ? (
          <span className="companyCardLogo">
            <Image
              src={item.logo}
              alt={`${item.name} logo`}
              fill
              sizes="120px"
            />
          </span>
        ) : (
          <span className="companyCardNameOverlay">{item.name}</span>
        )}
      </div>

      <div className="companyBody">
        <small>{studioShort(item.studio)}</small>

        <div className="companyNameRow">
          <h3>{item.name}</h3>
          <span className="companyStageTag">{item.stage}</span>
        </div>

        <p>{item.description}</p>

        <div className="companyTags">
          {item.tags.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="companyReveal">
        <span>View Company</span>
        <b>→</b>
      </div>
    </button>
  );
}

const toggleValue = (arr: string[], v: string) =>
  arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];

const summary = (arr: string[], fallback: string) =>
  arr.length === 0
    ? fallback
    : arr.length === 1
      ? arr[0]
      : `${arr.length} selected`;

export default function CompaniesRail() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const group = firstGroupRef.current;

    if (!marquee || !group) return;

    const sync = () =>
      marquee.style.setProperty(
        "--loop-width",
        `${group.getBoundingClientRect().width}px`
      );

    sync();

    const ro = new ResizeObserver(sync);
    ro.observe(group);
    window.addEventListener("resize", sync);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  const [selectedVentures, setSelectedVentures] = useState<string[]>([]);
  const [studios, setStudios] = useState<string[]>([]);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedImpacts, setSelectedImpacts] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [menu, setMenu] = useState<MenuName>(null);

  useEffect(() => {
    if (!menu) return;

    const close = (event: MouseEvent | TouchEvent) => {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        setMenu(null);
      }
    };

    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close, { passive: true });

    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
    };
  }, [menu]);

  const ventureOptions = useMemo(
    () => [...companies].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  const results = useMemo(
    () =>
      companies.filter((c) => {
        const q = query.trim().toLowerCase();

        return (
          (!selectedVentures.length || selectedVentures.includes(c.name)) &&
          (!studios.length || studios.includes(c.studio)) &&
          (!selectedStages.length || selectedStages.includes(c.stage)) &&
          (!selectedIndustries.length ||
            selectedIndustries.includes(c.industry)) &&
          (!selectedImpacts.length ||
            selectedImpacts.some((i) => c.impacts.includes(i as never))) &&
          (!selectedTags.length ||
            selectedTags.some((t) => c.tags.includes(t))) &&
          (!q ||
            `${c.name} ${c.studio} ${c.industry} ${c.stage} ${c.impacts.join(
              " "
            )} ${c.tags.join(" ")}`
              .toLowerCase()
              .includes(q))
        );
      }),
    [
      selectedVentures,
      studios,
      selectedStages,
      selectedIndustries,
      selectedImpacts,
      selectedTags,
      query,
    ]
  );

  const loop = results;
  const toggle = (x: MenuName) => setMenu((v) => (v === x ? null : x));

  return (
    <div className="companiesExperience">
      <div className="companiesFilters" ref={filtersRef}>
        <div className="filterDropdown">
          <button
            className="selectControl"
            onClick={() => toggle("venture")}
          >
            <SlidersHorizontal size={16} />
            <span>{summary(selectedVentures, "All Ventures")}</span>
            <ChevronDown size={14} />
          </button>

          <Menu open={menu === "venture"} className="ventureMenu">
            <div className="menuTop">
              <button onClick={() => setSelectedVentures([])}>Clear</button>
            </div>

            {ventureOptions.map((venture) => (
              <CheckRow
                key={venture.name}
                checked={selectedVentures.includes(venture.name)}
                label={venture.name}
                onChange={() =>
                  setSelectedVentures(
                    toggleValue(selectedVentures, venture.name)
                  )
                }
              />
            ))}
          </Menu>
        </div>

        <div className="filterDropdown">
          <button
            className="selectControl"
            onClick={() => toggle("studio")}
          >
            <SlidersHorizontal size={16} />
            <span>{summary(studios, "All Studios")}</span>
            <ChevronDown size={14} />
          </button>

          <Menu open={menu === "studio"} className="studioMenu">
            <div className="menuTop">
              <button onClick={() => setStudios([])}>Clear</button>
            </div>

            {studioOptions.map((s) => (
              <label className="checkRow" key={s.name}>
                <input
                  type="checkbox"
                  checked={studios.includes(s.name)}
                  onChange={() =>
                    setStudios(toggleValue(studios, s.name))
                  }
                />
                <span className="studioFilterLabel">
                  <StudioLogo studio={s.name} tiny />
                  <span>{s.name}</span>
                </span>
              </label>
            ))}
          </Menu>
        </div>

        <div className="filterDropdown">
          <button
            className="selectControl"
            onClick={() => toggle("stage")}
          >
            <Target size={16} />
            <span>{summary(selectedStages, "All Stages")}</span>
            <ChevronDown size={14} />
          </button>

          <Menu open={menu === "stage"}>
            <div className="menuTop">
              <button onClick={() => setSelectedStages([])}>Clear</button>
            </div>

            {stages.map((s) => (
              <CheckRow
                key={s.name}
                checked={selectedStages.includes(s.name)}
                label={s.name}
                swatch={s.color}
                onChange={() =>
                  setSelectedStages(
                    toggleValue(selectedStages, s.name)
                  )
                }
              />
            ))}
          </Menu>
        </div>

        <div className="filterDropdown">
          <button
            className="selectControl"
            onClick={() => toggle("industry")}
          >
            <Building2 size={16} />
            <span>{summary(selectedIndustries, "All Industries")}</span>
            <ChevronDown size={14} />
          </button>

          <Menu open={menu === "industry"}>
            <div className="menuTop">
              <button onClick={() => setSelectedIndustries([])}>Clear</button>
            </div>

            {industries
              .filter((i) => i !== "ALL")
              .map((i) => (
                <CheckRow
                  key={i}
                  checked={selectedIndustries.includes(i)}
                  label={i}
                  onChange={() =>
                    setSelectedIndustries(
                      toggleValue(selectedIndustries, i)
                    )
                  }
                />
              ))}
          </Menu>
        </div>

        <div className="filterDropdown">
          <button
            className="selectControl"
            onClick={() => toggle("impact")}
          >
            <Sparkles size={16} />
            <span>{summary(selectedImpacts, "Impact")}</span>
            <ChevronDown size={14} />
          </button>

          <Menu open={menu === "impact"} className="impactMenu">
            <div className="menuTop">
              <button onClick={() => setSelectedImpacts([])}>Clear</button>
            </div>

            {impacts.map((i) => (
              <CheckRow
                key={i}
                checked={selectedImpacts.includes(i)}
                label={i}
                onChange={() =>
                  setSelectedImpacts(
                    toggleValue(selectedImpacts, i)
                  )
                }
              />
            ))}
          </Menu>
        </div>

        <div className="filterDropdown">
          <button
            className="selectControl"
            onClick={() => toggle("tag")}
          >
            <Tags size={16} />
            <span>{summary(selectedTags, "Classifications")}</span>
            <ChevronDown size={14} />
          </button>

          <Menu open={menu === "tag"} className="impactMenu">
            <div className="menuTop">
              <button onClick={() => setSelectedTags([])}>Clear</button>
            </div>

            {tagOptions.map((t) => (
              <CheckRow
                key={t}
                checked={selectedTags.includes(t)}
                label={t}
                onChange={() =>
                  setSelectedTags(toggleValue(selectedTags, t))
                }
              />
            ))}
          </Menu>
        </div>

        <label className="companySearch">
          <Search size={17} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search companies"
          />
        </label>
      </div>

      <div className="companiesRailStage">
        {results.length ? (
          <div
            ref={marqueeRef}
            className="companiesRail"
            key={`${selectedVentures}-${studios}-${selectedStages}-${selectedIndustries}-${selectedImpacts}-${selectedTags}-${query}`}
          >
            <div
              ref={firstGroupRef}
              className="companiesRailGroup"
            >
              {loop.map((item, i) => (
                <CompanyCard
                  item={item}
                  key={`primary-${item.name}-${i}`}
                />
              ))}
            </div>

            <div
              className="companiesRailGroup"
              aria-hidden="true"
            >
              {loop.map((item, i) => (
                <CompanyCard
                  item={item}
                  duplicate
                  key={`duplicate-${item.name}-${i}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="portfolioEmpty">
            No companies match these filters.
          </div>
        )}
      </div>
    </div>
  );
}
