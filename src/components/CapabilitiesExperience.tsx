"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { short:"Capabilities", eyebrow:"00 / CAPABILITIES", title:"Build Higher.", sub:"Strategy. Creativity. Technology. People. Systems. Capital. Scale.", copy:"A consulting partner for what’s next.", image:"/assets/capabilities/00-capabilities.png" },
  { short:"Strategy", eyebrow:"01 / VENTURE STRATEGY & CAPITAL", title:"From Vision To Venture.", sub:"Foundations & Funding", copy:"Venture Visioning • Growth Roadmapping • Market Intelligence & Validation • Investor Readiness • Fractional CFO & Capital Structuring", image:"/assets/capabilities/01-strategy.png" },
  { short:"Brand", eyebrow:"02 / BRAND & EXPERIENCE DESIGN", title:"Make It Mean Something.", sub:"Identity & Narrative Assets", copy:"Strategic Storytelling • Creative Media Production (Video/Audio) • Web Development • Identity & Visual Systems • Product Experience (PX) Design", image:"/assets/capabilities/02-brand.png" },
  { short:"Product", eyebrow:"03 / PRODUCT & ENGINEERING", title:"Build What’s Next.", sub:"Digital Build & New Offerings", copy:"Venture Engineering • Product Architecture • Technical Infrastructure & Integrations • Service Line Innovation", image:"/assets/capabilities/03-product.png" },
  { short:"Growth", eyebrow:"04 / GROWTH & PERFORMANCE", title:"Turn Traction Into Momentum.", sub:"Traction & Customer Acquisition", copy:"Go-To-Market (GTM) Strategy & Execution • Performance & Growth Marketing • Omnichannel Campaign Management • Data Intelligence & Insights", image:"/assets/capabilities/04-growth.png" },
  { short:"Leadership", eyebrow:"05 / LEADERSHIP & CULTURE", title:"Build From Within.", sub:"Human Character & Soul", copy:"Conscious Leadership Architecture • Cultural DNA Synthesis (Corporate Soul)", image:"/assets/capabilities/05-leadership.png" },
  { short:"Operations", eyebrow:"06 / TALENT & CORPORATE OPS", title:"Put The Right People Around It.", sub:"Human Capital & Governance", copy:"Venture Recruiting & Core Team Placement • Venture Governance & Board Advisory • M&A and Exit Strategy", image:"/assets/capabilities/06-operations.png" },
  { short:"Enterprise", eyebrow:"07 / ENTERPRISE & CO-CREATION", title:"Build It Together.", sub:"Corporate Innovation", copy:"Corporate Innovation Strategy • Enterprise Spin-Out Architecture • Joint Venture (JV) Incubation", image:"/assets/capabilities/07-enterprise.png" },
];

export default function CapabilitiesExperience(){
  const [active,setActive]=useState(0);
  const activeRef=useRef(0);
  const locked=useRef(false);
  const touch=useRef<number|null>(null);

  const goTo=useCallback((n:number)=>{
    const next=Math.max(0,Math.min(slides.length-1,n));
    activeRef.current=next;
    setActive(next);
  },[]);

  useEffect(()=>{activeRef.current=active},[active]);

  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==="ArrowRight"||e.key==="PageDown"){e.preventDefault();goTo(activeRef.current+1)}
      if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();goTo(activeRef.current-1)}
      if(e.key==="Home")goTo(0);
      if(e.key==="End")goTo(slides.length-1);
    };
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[goTo]);

  const wheel=(e:React.WheelEvent)=>{
    const d=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;
    if(Math.abs(d)<22||locked.current)return;
    locked.current=true;
    goTo(activeRef.current+(d>0?1:-1));
    window.setTimeout(()=>locked.current=false,760);
  };

  return <section className="capabilitiesExperience" onWheel={wheel}>
    <div className="capabilitiesTrack" style={{transform:`translate3d(-${active*100}vw,0,0)`}}>
      {slides.map((s,i)=><article className={`capabilitiesSlide ${i===active?"isActive":""}`} key={s.short}
        onTouchStart={e=>touch.current=e.touches[0]?.clientX??null}
        onTouchEnd={e=>{
          if(touch.current===null)return;
          const dx=touch.current-(e.changedTouches[0]?.clientX??touch.current);
          if(Math.abs(dx)>55)goTo(activeRef.current+(dx>0?1:-1));
          touch.current=null;
        }}>
        <div className="capabilitiesCopy">
          <div className="capabilitiesEyebrow">{s.eyebrow}</div>
          <h1>{s.title}</h1>
          <h2>{s.sub}</h2>
          <p>{s.copy}</p>
          {i===0&&<button className="capabilitiesExplore" onClick={()=>goTo(1)} type="button"><b>→</b><span>Explore our capabilities</span></button>}
        </div>
        <div className="capabilitiesArtwork">
          <Image src={s.image} alt="" fill priority={i<2} sizes="52vw" />
        </div>
      </article>)}
    </div>

    <div className="capabilitiesNav">
      <button className="capabilitiesArrow" disabled={active===0} onClick={()=>goTo(active-1)} aria-label="Previous">←</button>
      <nav className="capabilitiesRail" aria-label="Capabilities">
        {slides.map((s,i)=><button key={s.short} className={i===active?"active":""} onClick={()=>goTo(i)}>
          <small>{String(i).padStart(2,"0")}</small><strong>{s.short}</strong>
        </button>)}
      </nav>
      <button className="capabilitiesArrow" disabled={active===slides.length-1} onClick={()=>goTo(active+1)} aria-label="Next">→</button>
    </div>
  </section>
}
