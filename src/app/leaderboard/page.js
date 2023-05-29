import { GrTrophy } from 'react-icons/gr';

export default function LeaderBoard() {
  const data = [
    { name: 'John Doe', dept: 'HR', tasks: '18', rank: '1' },
    { name: 'Jane Tan', dept: 'IT', tasks: '17', rank: '2' },
    { name: 'Michael Johnson', dept: 'Marketing', tasks: '16', rank: '3' },
    { name: 'Emily Davis', dept: 'Finance', tasks: '14', rank: '4' },
    { name: 'David Williams', dept: 'HR', tasks: '12', rank: '5' },
    { name: 'Mayer Lee', dept: 'HR', tasks: '11', rank: '6' },
    { name: 'Yasmine Tan', dept: 'IT', tasks: '10', rank: '7' },
    { name: 'Greg Goh', dept: 'Marketing', tasks: '9', rank: '8' },
    { name: 'Maybel Yen', dept: 'Finance', tasks: '8', rank: '9' },
    { name: 'Henry Thomas', dept: 'HR', tasks: '7', rank: '10' },
    { name: 'Lee Yang', dept: 'HR', tasks: '6', rank: '11' },
    { name: 'Roy Foo', dept: 'IT', tasks: '5', rank: '12' },
    { name: 'Joy Prisca', dept: 'Marketing', tasks: '4', rank: '13' },
    { name: 'Dave Phua', dept: 'Finance', tasks: '3', rank: '14' },
    { name: 'Terry Hong', dept: 'HR', tasks: '2', rank: '15' },
  ];

  return (
    <div>
      <div className="mt-10 flex justify-center">
        <div class="w-8/12 rounded-lg border border-gray-200 bg-white p-6 text-center shadow dark:border-gray-700 dark:bg-gray-800">
          <svg
            class="mx-auto mb-2 h-10 w-10 text-cyan-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
              clip-rule="evenodd"
            ></path>
            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
          </svg>

          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Prize of the Month</h5>
          <p>$10 FoodPanda Voucher up for grabs!</p>
        </div>
      </div>

      <div className="mt-14 flex justify-center text-2xl font-semibold text-gray-800">
        <h1 className="mr-3">Top 15 Rankings </h1> <GrTrophy className="mt-1" />
      </div>
      <div className="relative mb-5 mt-10 max-h-[60vh] overflow-auto sm:rounded-lg">
        <table className="mx-auto w-8/12 text-left text-sm text-gray-500">
          <thead className="bg-gray-50  text-base uppercase text-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Score
              </th>
              <th scope="col" className="px-6 py-3">
                Rank
              </th>
            </tr>
          </thead>
          <tbody className="text-base">
            {data.map((item, index) => (
              <tr key={index} className="border-b bg-white ">
                <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.dept}</td>
                <td className="px-6 py-4">{item.tasks} points</td>
                <td className="px-6 py-4">{item.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
