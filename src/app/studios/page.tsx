import Screen from "@/components/Screen";
import Studios from "@/components/Studios";

export default function StudiosPage() {
  return (
    <Screen
      className="studiosPage"
      eyebrow="STUDIOS"
      title={"fly with us"}
      intro={
        <p>
          We build with and alongside founders from first idea to lasting enterprise.
          Explore our venture studios, each designed around a distinct community,
          industry, or opportunity.
        </p>
      }
    >
      <Studios embedded />
    </Screen>
  );
}
