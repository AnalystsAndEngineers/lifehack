import { HiOutlineBell } from 'react-icons/hi';

export default function AnnouncementHeader() {
  return (
    <div className="mx-auto mt-10 w-9/12 rounded-xl border border-gray-200 bg-cyan-50 p-4 text-center text-gray-800 shadow-md">
      <HiOutlineBell className="mx-auto text-center text-3xl text-cyan-700 " />
      <h1 className="p-3 text-xl font-semibold">Company retreat</h1>
      <p className="px-5">
        Reminder to sign up for XXX company retreat on 22nd May
      </p>
    </div>
  );
}
