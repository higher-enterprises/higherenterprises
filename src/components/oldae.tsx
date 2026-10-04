"use client";

import { useState, type ComponentType } from "react";
import {
  BookOpen,
  BriefcaseBusiness,
  Church,
  Coins,
  Cpu,
  HeartPulse,
  Home,
  Landmark,
  Palette,
  Radio,
  Sprout,
  Users,
} from "lucide-react";

type Legion = {
  key: string;
  roman: string;
  title: string;
  land: string;
  copy: string;
  image: string;
  expandedImage: string;
  emblem: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
};

const legions: Legion[] = [
  { key:"faith", roman:"I", title:"Faith", land:"The Land of Faith & Worldview", copy:"Form conviction, meaning, worship, and a life ordered toward what is true.", image:"/assets/academy/legions/01-faith.jpg", expandedImage:"/assets/academy/legions/01-faith-expanded.jpg", emblem:"/assets/academy/legions/01-faith.png", Icon:Church },
  { key:"family", roman:"II", title:"Family", land:"The Land of Family & Relationships", copy:"Strengthen households, relationships, generations, and the bonds that form human life.", image:"/assets/academy/legions/02-family.jpg", expandedImage:"/assets/academy/legions/02-family-expanded.jpg", emblem:"/assets/academy/legions/02-family.png", Icon:Home },
  { key:"education", roman:"III", title:"Education", land:"The Land of Education & Knowledge", copy:"Teach, discover, preserve, and transmit knowledge from one generation to the next.", image:"/assets/academy/legions/03-education.jpg", expandedImage:"/assets/academy/legions/03-education-expanded.jpg", emblem:"/assets/academy/legions/03-education.png", Icon:BookOpen },
  { key:"government", roman:"IV", title:"Government", land:"The Land of Government & Civic Life", copy:"Serve the public through justice, law, civic institutions, policy, and responsible governance.", image:"/assets/academy/legions/04-government.jpg", expandedImage:"/assets/academy/legions/04-government-expanded.jpg", emblem:"/assets/academy/legions/04-government.png", Icon:Landmark },
  { key:"business", roman:"V", title:"Business", land:"The Land of Business & Enterprise", copy:"Build enterprises that create useful things, meaningful work, and enduring value.", image:"/assets/academy/legions/05-business.jpg", expandedImage:"/assets/academy/legions/05-business-expanded.jpg", emblem:"/assets/academy/legions/05-business.png", Icon:BriefcaseBusiness },
  { key:"finance", roman:"VI", title:"Finance", land:"The Land of Finance & Capital", copy:"Steward capital, ownership, credit, investment, and the resources that make building possible.", image:"/assets/academy/legions/06-finance.jpg", expandedImage:"/assets/academy/legions/06-finance-expanded.jpg", emblem:"/assets/academy/legions/06-finance.png", Icon:Coins },
  { key:"media", roman:"VII", title:"Media", land:"The Land of Media & Information", copy:"Carry information, illuminate reality, and shape how people understand the world around them.", image:"/assets/academy/legions/07-media.jpg", expandedImage:"/assets/academy/legions/07-media-expanded.jpg", emblem:"/assets/academy/legions/07-media.png", Icon:Radio },
  { key:"arts", roman:"VIII", title:"Arts", land:"The Land of Arts, Entertainment & Sport", copy:"Create stories, experiences, beauty, competition, and culture that move the human imagination.", image:"/assets/academy/legions/08-arts.jpg", expandedImage:"/assets/academy/legions/08-arts-expanded.jpg", emblem:"/assets/academy/legions/08-arts.png", Icon:Palette },
  { key:"technology", roman:"IX", title:"Technology", land:"The Land of Technology & Digital Infrastructure", copy:"Build, steward, and apply technology for human flourishing, truth, and opportunity.", image:"/assets/academy/legions/09-technology.jpg", expandedImage:"/assets/academy/legions/09-technology-expanded.jpg", emblem:"/assets/academy/legions/09-technology.png", Icon:Cpu },
  { key:"health", roman:"X", title:"Health", land:"The Land of Science, Health & Human Life", copy:"Study life, heal bodies and minds, and advance responsible science and human flourishing.", image:"/assets/academy/legions/10-health.jpg", expandedImage:"/assets/academy/legions/10-health-expanded.jpg", emblem:"/assets/academy/legions/10-health.png", Icon:HeartPulse },
  { key:"community", roman:"XI", title:"Community", land:"The Land of Community & Civil Society", copy:"Gather people, strengthen neighborhoods, and build institutions of service, belonging, and care.", image:"/assets/academy/legions/11-community.jpg", expandedImage:"/assets/academy/legions/11-community-expanded.jpg", emblem:"/assets/academy/legions/11-community.png", Icon:Users },
  { key:"creation", roman:"XII", title:"Creation", land:"The Land of Creation & the Built Environment", copy:"Cultivate land, food, energy, housing, infrastructure, and the physical world entrusted to us.", image:"/assets/academy/legions/12-creation.jpg", expandedImage:"/assets/academy/legions/12-creation-expanded.jpg", emblem:"/assets/academy/legions/12-creation.png", Icon:Sprout },
];

function LegionEmblem({ legion, expanded = false }: { legion: Legion; expanded?: boolean }) {
  return (
    <div className={`legionEmblem ${expanded ? "isExpanded" : ""}`} aria-hidden="true">
      <img src={legion.emblem} alt="" className="legionEmblemGraphic" />
    </div>
  );
}

export default function AcademyExperience() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="academyExperience legionExperience">
      <aside className="academyAnchor">
        <div className="academyStudioIntro">
          <div className="academyEyebrow">OUR ACADEMY</div>
          <h1>academy</h1>
          <p>
            See it from above. Discover overlooked people, broken systems, and emerging possibilities
            across twelve lands of life. Find what is missing, then descend from observation into action.
          </p>
          <a
            className="academyMainButton"
            href="https://www.higher.academy"
            target="_blank"
            rel="noreferrer"
          >
            Explore Higher Academy
          </a>
        </div>
      </aside>

      <div className="legionAccordion" onMouseLeave={() => setActive(null)}>
        {legions.map((legion, index) => {
          const expanded = active === index;
          return (
            <article
              key={legion.key}
              className={`legionPanel ${expanded ? "isActive" : ""}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              tabIndex={0}
              onBlur={() => setActive(null)}
            >
              <div
                className="legionArtwork"
                style={{ backgroundImage: `url("${legion.image}")` }}
                aria-hidden="true"
              />
              <div
                className="legionArtworkExpanded"
                style={{ backgroundImage: `url("${legion.expandedImage}")` }}
                aria-hidden="true"
              />
              <div className="legionImageVeil" />
              <div className="legionEdge" />

              <div className="legionIdentity">
                <span className="legionRoman">{legion.roman}</span>
                <LegionEmblem legion={legion} expanded={expanded} />
                <strong className="legionSpineTitle">{legion.title}</strong>
              </div>

              <div className="legionPressMark" aria-hidden="true">
                <span>HIGHER</span>
                <span>PRESS</span>
              </div>

              <div className="legionOpen">
                <div className="legionOpenCopy">
                  <div className="legionOpenTitle">{legion.title}</div>
                  <i />
                  <h3>{legion.land}</h3>
                  <p>{legion.copy}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
