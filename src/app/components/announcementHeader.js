'use client';

import { HiOutlineBell } from 'react-icons/hi';

export default function AnnouncementHeader({ title, desc }) {
  return (
    <div className="my-10">
      <div className="text-center font-semibold text-cyan-800">Announcement of the day</div>
      <div className="mx-auto my-5 flex max-h-72 w-9/12 flex-col rounded-xl border border-gray-200 bg-cyan-50 p-4 text-center text-gray-800 shadow-md">
        <HiOutlineBell className="mx-auto text-center text-3xl text-cyan-700 " />
        <h1 className="text-l my-2 font-semibold">{title}</h1>
        <p className="max-h-32 overflow-hidden overflow-ellipsis px-5 text-sm hover:overflow-auto">{desc}</p>
      </div>
    </div>
  );
}
