import Card from './components/card';
import AnnouncementHeader from './components/announcementHeader';
import FortuneCookie from './components/fortunecookie';
import CompanyCalendar from './components/companyCalendar';

const events = [
  {
    date: new Date(),
    title: "Andy's Birthday",
    description: 'Surprise Andy with us!',
    startTime: '11:00',
    endTime: '13:00',
    location: 'Office',
  },
  {
    date: new Date(),
    title: 'Volunteer work at SpecialHearts',
    description: 'Join us for a half-day of volunteering!',
    startTime: '11:00',
    endTime: '13:00',
    location: '7 Sembawang Walk',
  },
  {
    date: new Date(),
    title: 'Company Sports Day',
    description: 'Join us for a day of company events!',
    startTime: '09:00',
    endTime: '13:00',
    location: 'ActiveSG Bishan',
  },
  {
    date: new Date(),
    title: 'Outdoor Retreat',
    description: 'Join us for a day of picnic!',
    startTime: '09:00',
    endTime: '13:00',
    location: 'Marina Barrage',
  },
];

export default function Home() {
  return (
    <main>
      {/* <div className='cursor-pointer' onClick={test}>Click me</div> */}
      <CompanyCalendar events={events} />
      <AnnouncementHeader
        title="Company retreat at Yishun SAFRA"
        desc="Our annual company outing will take place on Saturday. Remember to RSVP!"
      />
      <div className="text-center font-semibold text-cyan-800">Benefits</div>
      <div className="mb-10 block lg:flex">
        <Card title="Paycheck in" indicator="10" desc="more days" routeLink="/payhistory" btnText="View history" />
        <Card title="Off Days" indicator="2" desc="remaining" routeLink="/applyleave" btnText="Apply now" />
        <Card title="MCs" indicator="3" desc="remaining" routeLink="/applyleave" btnText="Apply now" />
      </div>
      <FortuneCookie />
    </main>
  );
}
