'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

export default function Card({ title, indicator, desc, routeLink, btnText }) {
  const router = useRouter();
  function handleClick() {
    router.push(routeLink);
  }
  return (
    <div className="mx-auto mt-10 w-6/12 rounded-xl border border-gray-200 bg-white p-6 text-gray-800 shadow-lg lg:w-1/5 lg:py-7">
      <div className="text-center">
        <h1 className="text-xl font-semibold lg:text-3xl">{title}</h1>
        <div className="justify-center text-center">
          <h1 className="pt-5 text-4xl font-semibold text-cyan-600 lg:text-7xl lg:font-bold ">{indicator}</h1>
          <h1 className="pt-5 text-lg font-semibold lg:text-2xl">{desc}</h1>
        </div>
        <div onClick={handleClick} className="mt-4 text-sm cursor-pointer text-gray-500 hover:text-black">{btnText}</div>
      </div>
    </div>
  );
}
