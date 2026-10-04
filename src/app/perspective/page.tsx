import Perspectives from "@/components/Perspectives";

export default function PerspectivesPage() {
  return (
    <section className="screenPage perspectivePage">
      <div className="venturesHero perspectiveHero">
        <div className="venturesTitle" aria-hidden="true">
          perspective
        </div>
        <div className="venturesSubtitle">
          A HIGHER VIEW
        </div>
      </div>

      <div className="perspectiveContent">
        <Perspectives embedded />
      </div>
    </section>
  );
}
