export default function Card({ title, indicator, desc }) {
  return (
    <div className="lg:flex lg:justify-center lg:py-16 lg:w-1/5 text-gray-800 mt-10 mx-auto w-6/12 p-6 bg-white border border-gray-200 rounded-xl shadow-lg ">
      <div className="text-center">
        <h1 className="font-normal lg:font-medium lg:text-3xl text-xl">
          {title}
        </h1>
        <div className="text-center justify-center block">
          <h1 className="lg:text-7xl pt-5 text-4xl font-semibold lg:font-bold text-cyan-400 ">
            {indicator}
          </h1>
          <h1 className=" pt-5 lg:font-medium font-normal lg:block text-lg lg:text-2xl">
            {desc}
          </h1>
        </div>
      </div>
    </div>
  );
}
