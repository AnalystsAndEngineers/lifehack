import ComplexNavbar from "./components/navbar";
import Card from "./components/card";

export default function Home() {
  return (
    <main>
      <ComplexNavbar />
      <div className="block lg:flex">
        <Card title="Paycheck in" indicator="10" desc="more days" />
        <Card title="Off Days" indicator="2" desc="remaining" />
        <Card title="MCs" indicator="3" desc="remaining" />
      </div>
    </main>
  );
}
