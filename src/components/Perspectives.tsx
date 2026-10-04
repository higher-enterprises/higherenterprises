"use client";
import { perspectives } from "@/data/studios";
import { Columns3,Boxes,FilePenLine,Dumbbell,Users,ShieldCheck,Unlock } from "lucide-react";
const icons=[Columns3,Boxes,FilePenLine,Dumbbell,Users,ShieldCheck,Unlock];

export default function Perspectives({embedded=false}:{embedded?:boolean}) {
  return (
    <section className={embedded?"perspectives perspectivesEmbedded":"perspectives section"}>
      <div className="perspectiveFoundation">
      <div className="perspectiveAllGrid">
        {perspectives.map(([title,copy],i)=>{
          const Icon=icons[i];
          return <article className="perspectiveAllCard" key={title}>
            <div className="cardNo">{String(i+1).padStart(2,"0")}</div>
            <Icon size={38} strokeWidth={1.45}/>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        })}
      </div>
      <div className="perspectiveBaseLine" aria-hidden="true"/>
      </div>
    </section>
  );
}
