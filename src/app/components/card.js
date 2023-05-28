"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Card({ title, indicator, desc, routeLink }) {
  const router = useRouter();
  function handleClick() {
    router.push(routeLink);
  }
  return ( 
    <div className=" lg:py-7 lg:w-1/5 text-gray-800 mt-10 mx-auto w-6/12 p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
      <div className="flex justify-end text-right text-2xl lg:text-3xl font-bolder">
        <button
          className="hover:text-gray-400"
          type="button"
          onClick={handleClick}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <div className="text-center">
        <h1 className="font-semibold lg:text-3xl text-xl">{title}</h1>
        <div className="text-center justify-center block">
          <h1 className="lg:text-7xl pt-5 text-4xl font-semibold lg:font-bold text-cyan-600 ">
            {indicator}
          </h1>
          <h1 className=" pt-5 font-semibold lg:block text-lg lg:text-2xl">
            {desc}
          </h1>
        </div>
      </div>
    </div>
  );
}
