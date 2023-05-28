"use client";

import { HiOutlineBell } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function AnnouncementHeader({ title, desc }) {
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
      // Force re-render so the button is rendered
      // the second time but not the first
      setHydrated(true);
    }, []);
    if (!hydrated) {
      return null;
    }
    return (
        <div className="bg-cyan-50 text-center p-4 text-gray-800 my-10 mx-auto w-9/12 border border-gray-200 rounded-xl shadow-md">
            <HiOutlineBell className="mx-auto text-3xl text-center text-cyan-700 " />
            <h1 className="font-semibold text-xl p-3">{title}</h1>
            <p className="px-5">{desc}</p>
        </div>
    );
}
