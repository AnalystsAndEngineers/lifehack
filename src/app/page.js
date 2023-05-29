import ComplexNavbar from './components/complexNavbar';
import Card from './components/card';
import AnnouncementHeader from './components/announcementHeader';
import FortuneCookie from './components/fortunecookie';
import CompanyCalendar from './components/companyCalendar';
import { BiHistory } from 'react-icons/bi';

export default function Home() {
  return (
    <main>
      <CompanyCalendar />
      <AnnouncementHeader
        title="Company retreat at Yishun SAFRA"
        desc="Our annual company outing will take place on Saturday. Don't forget to RSVP!"
      />
      <div className="block lg:flex">
        <Card title="Paycheck in" indicator="10" desc="more days" routeLink="/payhistory" btnText="View history" />
        <Card title="Off Days" indicator="2" desc="remaining" routeLink="/applyleave" btnText="Apply" />
        <Card title="MCs" indicator="3" desc="remaining" routeLink="/applyleave" btnText="Apply" />
      </div>
      <FortuneCookie />
    </main>
  );
}
