"use client";

import { HiOutlineBell } from "react-icons/hi";

export default function AnnouncementHeader({ title, desc }) {
    return (
        <div className="bg-cyan-50 text-center p-4 text-gray-800 my-10 mx-auto w-9/12 border border-gray-200 rounded-xl shadow-md flex flex-col max-h-72">
            <HiOutlineBell className="mx-auto text-3xl text-center text-cyan-700 " />
            <h1 className="font-semibold text-l my-2">{title}</h1>
            <p className="text-sm px-5 max-h-32 overflow-hidden overflow-ellipsis hover:overflow-auto">{desc}</p>
        </div>
    );
}
