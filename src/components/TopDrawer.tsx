"use client";

import Image from "next/image";
import {
  X, ExternalLink, MapPin, CalendarDays, Activity, Building2, Target,
  Handshake, Factory, Tags, Maximize2, ChevronLeft, ChevronRight,
  FileDown
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Company } from "@/data/companies";
import type { Studio } from "@/data/studios";
import StudioLogo from "@/components/StudioLogo";

type DrawerCompany = Company & {
  url?: string;
  location?: string;
  founded?: string;
  partners?: string[];
  seeking?: string[];
  stageColor?: string;
  impact?: string;
  gallery?: {
    src: string;
    alt?: string;
  }[];
};

const studioShort=(studio:string)=>studio.replace(/\.VENTURES$/i,"").replace(/ VENTURES$/i,"").replace(/^HIGHER\s+/i,"");

export default function TopDrawer() {
  const [company,setCompany]=useState<DrawerCompany|null>(null);
  const [open,setOpen]=useState(false);
  const [investOpen,setInvestOpen]=useState(false);
  const [article,setArticle]=useState<any>(null);
  const [studio,setStudio]=useState<Studio|null>(null);
  const [galleryIndex,setGalleryIndex]=useState(0);
  const [lightboxOpen,setLightboxOpen]=useState(false);

  useEffect(()=>{
    const onOpen=(event:Event)=>{
      const detail=(event as CustomEvent).detail||{};
      setGalleryIndex(0); setLightboxOpen(false); setInvestOpen(false);
      if(detail.type==="article" && detail.article){ setArticle(detail.article); setCompany(null); setStudio(null); setOpen(true); return; }
      if(detail.type==="studio" && detail.studio){ setArticle(null); setCompany(null); setStudio(detail.studio); setOpen(true); return; }
      if(detail.company){ setArticle(null); setStudio(null); setCompany(detail.company); setOpen(true); return; }
      setCompany({
        name:detail.title||"Details", studio:"HIGHER.VENTURES", industry:"", stage:"Ideation",
        impacts:[], description:detail.html?.replace(/<[^>]+>/g," ")||"", image:"/assets/companies/examples/alpha7.jpg", tags:[]
      } as DrawerCompany);
      setOpen(true);
    };
    const onClose=()=>{setOpen(false);setLightboxOpen(false)};
    window.addEventListener("higher:drawer-open",onOpen);
    window.addEventListener("higher:drawer-close",onClose);
    return()=>{window.removeEventListener("higher:drawer-open",onOpen);window.removeEventListener("higher:drawer-close",onClose)};
  },[]);

  const close=()=>{
    setInvestOpen(false); setLightboxOpen(false);
    window.dispatchEvent(new Event("higher:drawer-close"));
  };

  const gallery=useMemo(()=>{
    if(!company) return [];
    const supplied=company.gallery?.filter((g)=>g?.src) || [];
    if(supplied.length) return supplied;
    return [{src:company.image,alt:company.name}];
  },[company]);

  const currentImage=gallery[galleryIndex] || gallery[0];
  const moveGallery=(delta:number)=>setGalleryIndex((i)=>(i+delta+gallery.length)%gallery.length);

  useEffect(()=>{
    if(!lightboxOpen) return;
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==="Escape") setLightboxOpen(false);
      if(e.key==="ArrowLeft" && gallery.length>1) moveGallery(-1);
      if(e.key==="ArrowRight" && gallery.length>1) moveGallery(1);
    };
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[lightboxOpen,gallery.length]);

  if(studio) return <aside id="top-drawer" className="topDrawer studioJoinDrawer" data-open={open?"true":"false"}><div className="studioJoinInner"><button className="drawerClose" aria-label="Close studio details" onClick={close}><X size={22}/></button><div className="studioJoinBrand"><StudioLogo studio={studio.name}/></div><h2>{studio.name}</h2><p className="studioJoinFocus">{studio.focus}</p><p className="studioJoinDetail">{studio.detail}</p><div className="studioJoinRule"/><h3>Request to Join the Incubator</h3><p className="studioJoinIntro">Tell us about you, what you are building, and why this studio is the right environment for the venture.</p><form className="studioJoinForm" onSubmit={(e)=>e.preventDefault()}><div className="studioJoinFields"><label>Name<input name="name" required/></label><label>Email<input name="email" type="email" required/></label><label>Organization / Venture<input name="venture"/></label><label>Role<select name="role" defaultValue="founder"><option value="founder">Founder</option><option value="cofounder">Co-Founder</option><option value="builder">Builder</option><option value="other">Other</option></select></label></div><label>What are you building?<textarea name="message" rows={3}/></label><button type="submit">Request to Join <span>→</span></button></form></div></aside>;
  if(article) return <aside id="top-drawer" className="topDrawer articleDrawer" data-open={open?"true":"false"}><div className="articleDrawerInner"><button className="drawerClose" aria-label="Close article" onClick={close}><X size={22}/></button><p className="kicker">{article.type} · {article.studio}</p><h2>{article.title}</h2><p className="articleDate">{article.date}</p><div className="articleBody"><p>{article.copy}</p><p>This article space is reserved exclusively for the story, its media, supporting details and related editorial content. Venture or company profile information is intentionally kept out of the article drawer.</p></div></div></aside>;
  if(!company) return <aside id="top-drawer" className="topDrawer" data-open="false"/>;

  return (
    <>
      <aside id="top-drawer" className="topDrawer companyProfileDrawer" data-open={open?"true":"false"} aria-live="polite">
        <div className="companyDrawerInner">
          <button className="drawerClose" aria-label="Close details" onClick={close}><X size={22}/></button>

          <div className="companyDrawerBackdrop" aria-hidden="true">
            <Image src={currentImage?.src || company.image} alt="" fill sizes="100vw"/>
          </div>

          <div className="companyProfileGrid">
            <section className="companyProfileMain">
              <div className="companyGallery">
                <div className="companyDrawerPhoto">
                  <Image src={currentImage?.src || company.image} alt={currentImage?.alt || company.name} fill sizes="32vw"/>
                  <button className="companyGalleryExpand" type="button" aria-label="Enlarge image" onClick={()=>setLightboxOpen(true)}><Maximize2 size={18}/></button>
                </div>
                {gallery.length>1 && <div className="companyGalleryThumbs" aria-label={`${company.name} gallery`}>
                  {gallery.map((image,index)=><button key={`${image.src}-${index}`} type="button" className={index===galleryIndex?"isActive":""} aria-label={`View image ${index+1}`} onClick={()=>setGalleryIndex(index)}><Image src={image.src} alt="" fill sizes="72px"/></button>)}
                </div>}
              </div>
            </section>

            <section className="companyProfileCenter">
              <div className="companyDrawerIdentity">
                {company.logo ? <div className="companyDrawerLogo"><Image src={company.logo} alt={`${company.name} logo`} fill sizes="220px"/></div> : <h2>{company.name}</h2>}
                {company.logo && <h2>{company.name}</h2>}
                <div className="companyProfileDescription">
                  <p>{company.description}</p>
                  <p>We are developing this venture around a focused market need, a clear customer experience, and a model designed to grow into a durable operating company.</p>
                </div>
                <div className="companyProfileActions"><button className="investWithCompany" onClick={()=>setInvestOpen(true)}>Investor Inquiry <span>→</span></button></div>
              </div>
            </section>

            <aside className="companyProfileRight">
              <div className="companyAlignedDetails"><div className="companyFactGrid">
                <div className="companyFact"><ExternalLink/><span>URL</span><b>{company.url || "—"}</b></div>
                <div className="companyFact"><MapPin/><span>Location</span><b>{company.location || "—"}</b></div>
                <div className="companyFact"><CalendarDays/><span>Founded</span><b>{company.founded || "—"}</b></div>
                <div className="companyFact"><Building2/><span>Venture Studio</span><b>{studioShort(company.studio)}</b></div>
                <div className="companyFact"><Activity/><span>Stage</span><b className="factStage" style={{background:company.stageColor}}>{company.stage}</b></div>
                <div className="companyFact"><Factory/><span>Industry</span><b>{company.industry}</b></div>
                <div className="companyFact"><Target/><span>Impact Areas</span><b>{company.impact || company.impacts?.join(", ") || "—"}</b></div>
                <div className="companyFact"><Handshake/><span>Partners</span><b>{company.partners?.join(", ") || "—"}</b></div>
                <div className="companyFact companyFactClassifications"><Tags/><span>Classifications</span><div className="classificationFactValues">{(company.tags || []).map((tag:string)=><b key={tag}>{tag}</b>)}</div></div>
                {company.ventureBrief && <a className="companyFact companyVentureBrief" href={company.ventureBrief.href} target="_blank" rel="noreferrer"><FileDown/><span>{company.ventureBrief.label || "Venture Brief"}</span><b>Download PDF</b></a>}
              </div></div>
              <section className="companyNews companyDrawerStatus"><h3>NEWS</h3><p>No news at the moment.</p></section>
              <section className="companyJobs companyDrawerStatus"><h3>JOBS</h3><p>No open positions posted.</p></section>
            </aside>
          </div>

          <div className={`investmentContactDrawer ${investOpen ? "isOpen" : ""}`} aria-hidden={!investOpen}>
            <button className="investmentContactClose" aria-label="Close investment form" onClick={()=>setInvestOpen(false)}><X size={20}/></button>
            <p className="kicker">INVESTOR INQUIRY</p><h3>{company.name}</h3><p className="investmentContactIntro">Tell us about your interest in this company.</p>
            <form className="investmentContactForm" onSubmit={(e)=>e.preventDefault()}><label>Name<input name="name" type="text" required /></label><label>Email<input name="email" type="email" required /></label><label>Phone Number<input name="phone" type="tel" required /></label><label>Organization<input name="organization" type="text" /></label><label>Investment Range<select name="range" defaultValue=""><option value="" disabled>Select a range</option><option>$10K–$25K</option><option>$25K–$50K</option><option>$50K–$100K</option><option>$100K–$250K</option><option>$250K+</option></select></label><label>Message<textarea name="message" rows={3} placeholder={`I'm interested in learning more about ${company.name}...`} /></label><button type="submit">Send Investment Inquiry <span>→</span></button></form>
          </div>
        </div>
      </aside>

      {lightboxOpen && currentImage && <div className="ventureLightbox" role="dialog" aria-modal="true" aria-label={`${company.name} image gallery`} onClick={()=>setLightboxOpen(false)}>
        <button className="ventureLightboxClose" type="button" aria-label="Close enlarged image" onClick={()=>setLightboxOpen(false)}><X size={25}/></button>
        {gallery.length>1 && <button className="ventureLightboxArrow ventureLightboxPrev" type="button" aria-label="Previous image" onClick={(e)=>{e.stopPropagation();moveGallery(-1)}}><ChevronLeft size={30}/></button>}
        <div className="ventureLightboxImage" onClick={(e)=>e.stopPropagation()}><Image src={currentImage.src} alt={currentImage.alt || company.name} fill sizes="92vw" priority/></div>
        {gallery.length>1 && <button className="ventureLightboxArrow ventureLightboxNext" type="button" aria-label="Next image" onClick={(e)=>{e.stopPropagation();moveGallery(1)}}><ChevronRight size={30}/></button>}
        {gallery.length>1 && <div className="ventureLightboxThumbs" onClick={(e)=>e.stopPropagation()}>{gallery.map((image,index)=><button key={`${image.src}-lightbox-${index}`} type="button" className={index===galleryIndex?"isActive":""} onClick={()=>setGalleryIndex(index)} aria-label={`View image ${index+1}`}><Image src={image.src} alt="" fill sizes="76px"/></button>)}</div>}
      </div>}
    </>
  );
}
