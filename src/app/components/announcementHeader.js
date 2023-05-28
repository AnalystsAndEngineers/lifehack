"use client";

import { HiOutlineBell } from "react-icons/hi";

export default function AnnouncementHeader({ title, desc }) {
    return (
        <div className="bg-cyan-50 text-center p-4 text-gray-800 my-10 mx-auto w-9/12 border border-gray-200 rounded-xl shadow-md">
            <HiOutlineBell className="mx-auto text-3xl text-center text-cyan-700 " />
            <h1 className="font-semibold text-xl p-3">{title}</h1>
            <p className="px-5">{desc}</p>
        </div>
    );
}
