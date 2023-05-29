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
      <div className="text-4xl font-semibold mx-10 my-8 text-gray-800">
        <button className="hover:text-gray-400" type="button" onClick={handleClick}>
          {' '}
          <IoIosArrowBack />
        </button>
      </div>

      <div className="text-center font-semibold text-gray-900 text-3xl mb-10">
        <h1> Payment History</h1>
      </div>
      <div className="overflow-auto max-h-[60vh]">
        <table class="w-4/12 mx-auto rounded-xl text-md text-center text-gray-800">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3 border-b">
                Date
              </th>
              <th scope="col" class="px-6 py-3 border-b">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, index) => (
              <tr key={index} class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.date}
                </th>
                <td class="px-6 py-4">${item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
