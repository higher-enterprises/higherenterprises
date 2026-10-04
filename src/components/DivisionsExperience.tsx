"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../styles/divisions.css";

type Division = {
  number: string;
  name: string;
  eyebrow: string;
  line1: string;
  line2: string;
  description: string;
  services: string[];
  asset: string;
};

const divisions: Division[] = [
  { number:"01", name:"Strategy", eyebrow:"Venture Strategy & Capital", line1:"Ideas", line2:"Into Enterprise", description:"We turn vision into viable enterprises—providing the strategy, insight and capital structure to fuel long-term growth.", services:["Venture Visioning","Growth Roadmapping","Market Intelligence & Validation","Investor Readiness","Fractional CFO & Capital Structuring"], asset:"/assets/divisions/01-strategy.png" },
  { number:"02", name:"Innertainment", eyebrow:"Brand & Experience Design", line1:"Ideas", line2:"In Motion", description:"We create stories, identities and experiences that turn attention into connection—and connection into lasting affinity.", services:["Strategic Storytelling","Creative Media Production","Web Development","Identity & Visual Systems","Product Experience (PX) Design"], asset:"/assets/divisions/02-innertainment.png" },
  { number:"03", name:"Technology", eyebrow:"Product & Engineering", line1:"Ideas", line2:"Into Reality", description:"We develop and apply emerging technologies that power ventures, companies and partners—turning tomorrow's possibilities into real-world solutions.", services:["Venture Engineering","Product Architecture","Technical Infrastructure & Integrations","Service Line Innovation"], asset:"/assets/divisions/03-technology.png" },
  { number:"04", name:"Growth", eyebrow:"Growth & Performance", line1:"Traction", line2:"Into Momentum", description:"We turn vision into momentum with data-informed strategies and creative execution that drive awareness, acquisition and sustainable growth.", services:["Go-To-Market Strategy & Execution","Performance & Growth Marketing","Omnichannel Campaign Management","Data Intelligence & Insights"], asset:"/assets/divisions/04-growth.png" },
  { number:"05", name:"People", eyebrow:"Leadership & Culture", line1:"Character", line2:"Into Culture", description:"We help build the leaders, cultures and organizations that bring out the best in people—and the fullest potential in the enterprise.", services:["Conscious Leadership Architecture","Cultural DNA Synthesis (Corporate Soul)"], asset:"/assets/divisions/05-people.png" },
  { number:"06", name:"Operations", eyebrow:"Talent & Corporate Ops", line1:"People", line2:"Into Enterprise", description:"We provide the talent, systems and governance that keep ventures strong, agile and built for the long term.", services:["Venture Recruiting & Core Team Placement","Venture Governance & Board Advisory","M&A and Exit Strategy"], asset:"/assets/divisions/06-operations.png" },
  { number:"07", name:"Enterprise", eyebrow:"Enterprise & Co-Creation", line1:"Ideas", line2:"Built Together", description:"We co-create with corporations, institutions and visionary partners to launch new ventures, spin out innovation and build what's next—together.", services:["Corporate Innovation Strategy","Enterprise Spin-Out Architecture","Joint Venture (JV) Incubation"], asset:"/assets/divisions/07-enterprise.png" },
];

export default function DivisionsExperience(){
  const [active,setActive]=useState(0);
  const lock=useRef(false);
  const touchX=useRef<number|null>(null);
  const go=useCallback((n:number)=>setActive(Math.max(0,Math.min(divisions.length-1,n))),[]);

  useEffect(()=>{
    const key=(e:KeyboardEvent)=>{
      if(["ArrowRight","ArrowDown","PageDown"].includes(e.key)){e.preventDefault();go(active+1)}
      if(["ArrowLeft","ArrowUp","PageUp"].includes(e.key)){e.preventDefault();go(active-1)}
      if(e.key==="Home")go(0); if(e.key==="End")go(divisions.length-1);
    };
    const wheel=(e:WheelEvent)=>{
      if(Math.abs(e.deltaY)<18 && Math.abs(e.deltaX)<18 || lock.current) return;
      lock.current=true;
      go(active + ((e.deltaY||e.deltaX)>0?1:-1));
      window.setTimeout(()=>lock.current=false,650);
    };
    window.addEventListener("keydown",key); window.addEventListener("wheel",wheel,{passive:true});
    return()=>{window.removeEventListener("keydown",key);window.removeEventListener("wheel",wheel)};
  },[active,go]);

  return <main className="divisionsExperience" onTouchStart={e=>touchX.current=e.touches[0].clientX} onTouchEnd={e=>{if(touchX.current===null)return;const dx=e.changedTouches[0].clientX-touchX.current;if(Math.abs(dx)>50)go(active+(dx<0?1:-1));touchX.current=null}}>
    <aside className="divisionRail" aria-label="Divisions">
      <div className="divisionRailTitle">DIVISIONS</div>
      <div className="divisionRailRule" />
      {divisions.map((d,i)=><button key={d.number} className={`divisionRailItem ${i===active?"isActive":""}`} onClick={()=>go(i)} aria-current={i===active?"page":undefined}><span>{d.number}</span><strong>{d.name}</strong></button>)}
    </aside>

    <div className="divisionViewport">
      <div className="divisionTrack" style={{transform:`translate3d(-${active*100}vw,0,0)`}}>
        {divisions.map((d,i)=><section className="divisionSlide" key={d.number} aria-hidden={i!==active}>
          <div className="divisionCopy">
            <div className="divisionEyebrow"><span>{d.number}</span><i>/</i>{d.eyebrow}</div>
            <h1><span>{d.line1}</span><em>{d.line2}<b>.</b></em></h1>
            <p>{d.description}</p>
            <div className="divisionServices">{d.services.map(s=><span key={s}>{s}</span>)}</div>
            <button className="divisionExplore"><i>→</i><span>EXPLORE</span></button>
          </div>
          <div className="divisionArt"><Image src={d.asset} alt="" fill priority={i<2} sizes="60vw" /></div>
        </section>)}
      </div>
    </div>
    <div className="divisionCounter">{divisions[active].number} <span>/</span> 07</div>
  </main>
}
