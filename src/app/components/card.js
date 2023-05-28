export default function Card({ title, indicator, desc }) {
  return (
    <div className="mx-auto mt-10 w-6/12 rounded-xl border border-gray-200 bg-white p-6 text-gray-800 shadow-lg lg:flex lg:w-1/5 lg:justify-center lg:py-16">
      <div className="text-center">
        <h1 className="text-xl font-semibold lg:text-3xl">{title}</h1>
        <div className="block justify-center text-center">
          <h1 className="pt-5 text-4xl font-semibold text-cyan-600 lg:text-7xl lg:font-bold ">{indicator}</h1>
          <h1 className=" pt-5 text-lg font-semibold lg:block lg:text-2xl">{desc}</h1>
        </div>
      </div>
    </div>
  );
}
