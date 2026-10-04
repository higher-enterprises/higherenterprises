"use client";

export default function ContactPage() {
  return (
    <main className="comeHigherPage">
      <div className="comeHigherBackdrop" aria-hidden="true">
        <div className="comeHigherPeak peakOne" />
        <div className="comeHigherPeak peakTwo" />
        <div className="comeHigherMist mistOne" />
        <div className="comeHigherMist mistTwo" />
      </div>

      <section className="comeHigherLayout">
        <div className="comeHigherIntro">
          <p className="comeHigherEyebrow">COME HIGHER</p>
          <h1>where do you wanna go to next?</h1>
        </div>

        <form className="comeHigherForm" onSubmit={(e) => e.preventDefault()}>

          <div className="comeHigherGrid">
            <label><span>NAME</span><input name="name" required /></label>
            <label><span>EMAIL</span><input name="email" type="email" required /></label>
            <label className="full"><span>ORGANIZATION</span><input name="organization" /></label>
            <label className="full">
              <span>I&apos;M INTERESTED IN</span>
              <select name="inquiry" defaultValue="venture">
                <option value="venture">Building a Venture</option>
                <option value="studio">Joining a Venture Studio</option>
                <option value="partner">Partnering With Us</option>
                <option value="invest">Investing</option>
                <option value="academy">Learning</option>
                <option value="other">Something Else</option>
              </select>
            </label>
          </div>

          <label className="comeHigherMessage">
            <span>MESSAGE</span>
            <textarea name="message" rows={4} placeholder="" />
          </label>

          <button type="submit">SEND IT HIGHER <b>→</b></button>
        </form>
      </section>

      <style jsx>{`
        .comeHigherPage{position:relative;min-height:100dvh;overflow:hidden;background:radial-gradient(circle at 78% 32%,rgba(23,164,173,.10),transparent 28%),linear-gradient(180deg,#fff 0%,#fbfcfc 58%,#f0f6f6 100%);font-family:"Avenir Next","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
        .comeHigherBackdrop{position:absolute;inset:0;overflow:hidden;pointer-events:none}
        .comeHigherPeak{position:absolute;bottom:-14vh;width:72vw;height:54vh;background:linear-gradient(145deg,rgba(191,209,211,.27),rgba(239,244,244,.08) 52%,rgba(165,190,193,.17));clip-path:polygon(0 100%,25% 57%,38% 69%,57% 22%,72% 62%,82% 49%,100% 100%)}
        .peakOne{left:-14vw}.peakTwo{right:-25vw;bottom:-22vh;opacity:.45;transform:scale(.9)}
        .comeHigherMist{position:absolute;width:75vw;height:22vh;border-radius:50%;background:rgba(255,255,255,.82);filter:blur(45px)}
        .mistOne{left:-20vw;bottom:-7vh}.mistTwo{right:-18vw;bottom:-5vh}
        .comeHigherLayout{position:relative;z-index:2;width:min(1500px,90vw);min-height:100dvh;margin:auto;padding:145px 0 115px;box-sizing:border-box;display:grid;grid-template-columns:minmax(0,1fr) minmax(460px,.78fr);gap:clamp(70px,8vw,150px);align-items:center}
        .comeHigherIntro{max-width:680px;transform:translateY(-12px)}
        .comeHigherEyebrow{margin:0 0 27px;font-size:11px;font-weight:700;line-height:1;letter-spacing:.48em;color:#111}
        .comeHigherIntro h1{margin:0;font-size:clamp(76px,7.2vw,132px);font-weight:500;line-height:.82;letter-spacing:-.065em;color:rgba(24,31,32,.12)}
        .comeHigherLead{max-width:555px;margin:36px 0 0;font-size:15px;line-height:1.75;color:#5d696b}
        .comeHigherPaths{display:flex;flex-wrap:wrap;gap:12px 28px;margin-top:34px;font-size:9px;font-weight:700;letter-spacing:.14em;color:#202728}
        .comeHigherPaths span{white-space:nowrap}
        .comeHigherForm{width:100%;box-sizing:border-box;padding:clamp(34px,3.4vw,56px);border:1px solid rgba(204,215,216,.82);border-radius:24px;background:rgba(255,255,255,.76);box-shadow:0 24px 60px rgba(34,56,59,.08),0 4px 14px rgba(34,56,59,.04);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}
        .comeHigherFormHeader{margin-bottom:32px}.comeHigherFormHeader p{margin:0 0 9px;font-size:11px;font-weight:700;letter-spacing:.25em;color:#171d1e}.comeHigherFormHeader span{font-size:13px;color:#7a8587}
        .comeHigherGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px 18px}.comeHigherGrid .full{grid-column:1/-1}
        .comeHigherForm label{display:flex;flex-direction:column;gap:9px}.comeHigherForm label>span{font-size:8px;font-weight:700;letter-spacing:.18em;color:#606a6c}
        .comeHigherForm input,.comeHigherForm select,.comeHigherForm textarea{width:100%;box-sizing:border-box;border:0;border-bottom:1px solid #cfd8d9;border-radius:0;outline:none;background:transparent;color:#161b1c;font:inherit;transition:border-color .2s ease}
        .comeHigherForm input,.comeHigherForm select{height:42px}.comeHigherForm select{cursor:pointer}.comeHigherForm textarea{min-height:102px;padding:12px 0;resize:vertical}.comeHigherForm textarea::placeholder{color:#a4adae}
        .comeHigherForm input:focus,.comeHigherForm select:focus,.comeHigherForm textarea:focus{border-color:#0fa4ad}.comeHigherMessage{margin-top:24px}
        .comeHigherForm button{min-height:48px;margin-top:30px;padding:0 22px;border:1px solid #111;border-radius:8px;background:#111;color:#fff;font-size:10px;font-weight:700;letter-spacing:.10em;cursor:pointer;transition:.2s ease}.comeHigherForm button b{margin-left:18px}.comeHigherForm button:hover{background:#0fa4ad;border-color:#0fa4ad;transform:translateY(-1px)}
        @media(max-width:1050px){.comeHigherPage{overflow-y:auto}.comeHigherLayout{min-height:0;padding:145px 0 150px;grid-template-columns:1fr;gap:60px}.comeHigherForm{max-width:720px}}
        @media(max-width:620px){.comeHigherLayout{width:88vw;padding-top:125px}.comeHigherIntro h1{font-size:clamp(60px,18vw,86px)}.comeHigherGrid{grid-template-columns:1fr}.comeHigherGrid .full{grid-column:auto}.comeHigherForm{padding:30px 24px;border-radius:19px}.comeHigherPaths{flex-direction:column}}
      `}</style>
    </main>
  );
}
