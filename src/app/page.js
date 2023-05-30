import Card from './components/card';
import AnnouncementHeader from './components/announcementHeader';
import FortuneCookie from './components/fortunecookie';
import CompanyCalendar from './components/companyCalendar';

import { BiHistory } from 'react-icons/bi';

import firebaseApp from './firebase';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc, updateDoc, getDoc, collection, addDoc, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp)

let events = []
const getEvents = async () =>  {
  let eventsDocs = await getDocs(collection(db, "events"))
  eventsDocs.forEach((doc) => {
    console.log(doc.id, ": ", doc.data())
    let start = new Date(doc.data().start_datetime.seconds * 1000)
    let end = new Date(doc.data().end_datetime.seconds * 1000)
    events.push({
      date: start,
      title: doc.data().title,
      description: doc.data().description,
      startTime: String(start.getHours()) + ":" + String("0" + start.getMinutes()).slice(-2),
      endTime: String(end.getHours()) + ":" + String("0" + end.getMinutes()).slice(-2),
      location: doc.data().location,
    })
  })
}
getEvents();

let announcementTitle = "";
let announcementDescr = "";
const getAnn = async () =>  {
  let annDocs = await getDocs(collection(db, "announcements"))
  let latest = new Date(0).getMilliseconds()
  annDocs.forEach((doc) => {
    console.log(doc.id, ": ", doc.data())
    console.log(doc.data().creation_datetime.seconds)
    console.log(doc.data().creation_datetime.seconds > latest)
    if (doc.data().creation_datetime.seconds > latest) {
      announcementTitle = doc.data().title
      announcementDescr = doc.data().description
      latest = doc.data().creation_datetime.seconds;
    }
  })
}
getAnn();

import MoodPopup from './components/moodPopup';
import { store } from '@/lib/store';

export default function Home() {
  const userMood = store.get('userMood');
  console.log(store.get('userMood'));
  return (
    <main>
      {!userMood && <MoodPopup />}
      <CompanyCalendar events={events} />
      <AnnouncementHeader
        title={announcementTitle}
        desc={announcementDescr}
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
