"use client";
import Screen from "@/components/Screen";

const items = [
  ["BUILD WITH FOUNDERS","We work alongside founders to turn conviction into durable companies."],
  ["STACK THE ODDS","Shared infrastructure, pattern recognition and focused execution improve the conditions for success."],
  ["FOCUS ON WHAT MATTERS","Purpose and performance belong in the same operating system."]
];

export default function ImpactPage() {
  const open = (title:string, copy:string) =>
    window.dispatchEvent(new CustomEvent("higher:drawer-open",{detail:{title,html:`<p>${copy}</p>`}}));
  return (
    <Screen eyebrow="PURPOSE + PERFORMANCE" title="Impact" intro="We build companies intended to matter in the market and beyond it.">
      <div className="screenCardGrid">
        {items.map(([title,copy],i)=>(
          <button className="screenCard" key={title} onClick={()=>open(title,copy)}>
            <span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Explore →</b>
          </button>
        ))}
      </div>
    </Screen>
  );
}
