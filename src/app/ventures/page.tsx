import CompaniesRail from "@/components/CompaniesRail";

export default function CompaniesPage() {
  return (
    <section className="screenPage companiesPage">
      <div className="venturesHero">
        <div className="venturesTitle" aria-hidden="true">
          see what we're building
        </div>
        <div className="venturesSubtitle">
          VENTURES
        </div>
      </div>

      <div className="companiesContent">
        <CompaniesRail />
      </div>
    </section>
  );
}