import ComplexNavbar from "./components/complexNavbar";
import Card from "./components/card";
import AnnouncementHeader from "./components/announcementHeader";

export default function Home() {
  return (
    <main>
      <ComplexNavbar />
      <div className="flex justify-center">
        <AnnouncementHeader />
      </div>
      <div className="block lg:flex">
        <Card
          title="Paycheck in"
          indicator="10"
          desc="more days"
          routeLink="/payhistory"
        />
        <Card
          title="Off Days"
          indicator="2"
          desc="remaining"
          routeLink="/applyleave"
        />
        <Card
          title="MCs"
          indicator="3"
          desc="remaining"
          routeLink="/applyleave"
        />
      </div>
    </main>
  );
}
