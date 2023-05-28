import { HiOutlineBell } from "react-icons/hi";

export default function AnnouncementHeader() {
  return (
    <div className="bg-cyan-50 text-center lg:flex lg:justify-center p-4 lg:w-11/12 text-gray-800 mt-10 mx-auto w-9/12 bg-white border border-gray-200 rounded-xl shadow-md ">
      <HiOutlineBell className="mx-auto text-3xl text-center text-cyan-600 " />
      <h1 className="font-semibold text-xl p-3">Company retreat</h1>
      <p className="px-5">
        Reminder to sign up for XXX company retreat on 22nd May
      </p>
    </div>
  );
}
