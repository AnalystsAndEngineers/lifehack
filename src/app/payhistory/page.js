'use client';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export default function PayHistory() {
  const data = [
    { date: 'May 2023', amount: '4800' },
    { date: 'April 2023', amount: '4800' },
    { date: 'March 2023', amount: '4800' },
    { date: 'Febuary 2023', amount: '4700' },
    { date: 'January 2023', amount: '4700' },
    { date: 'December 2022', amount: '4700' },
    { date: 'November 2022', amount: '4700' },
    { date: 'October 2022', amount: '4700' },
    { date: 'September 2022', amount: '4600' },
    { date: 'August 2022', amount: '4600' },
    { date: 'July 2022', amount: '4600' },
    { date: 'June 2022', amount: '4600' },
    { date: 'May 2022', amount: '4500' },
    { date: 'April 2022', amount: '4500' },
    { date: 'March 2022', amount: '4500' },
  ];

  const router = useRouter();
  function handleClick() {
    router.push('/');
  }
  return (
    <div>
      <div className="mx-10 my-8 text-4xl font-semibold text-gray-800">
        <button className="hover:text-gray-400" type="button" onClick={handleClick}>
          {' '}
          <IoIosArrowBack />
        </button>
      </div>

      <div className="mb-10 text-center text-3xl font-semibold text-gray-900">
        <h1> Payment History</h1>
      </div>
      <div className="max-h-[60vh] overflow-auto">
        <table className="text-md mx-auto w-4/12 rounded-xl text-center text-gray-800">
          <thead className="bg-gray-50 text-sm uppercase text-gray-700 ">
            <tr>
              <th scope="col" className="border-b px-6 py-3">
                Date
              </th>
              <th scope="col" className="border-b px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, index) => (
              <tr key={index} className="border-b bg-white ">
                <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                  {item.date}
                </th>
                <td className="px-6 py-4">${item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
