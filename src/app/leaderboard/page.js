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
      <div className="flex justify-center mt-20 text-2xl font-semibold text-gray-800">
        <h1 className="mr-3">Top 15 Rankings </h1> <GrTrophy className="mt-1" />
      </div>
      <div className="mt-10 relative sm:rounded-lg overflow-auto max-h-[70vh]">
        <table className="w-8/12 mx-auto text-sm text-left text-gray-500">
          <thead className="text-base  text-gray-700 uppercase bg-gray-50 ">
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
              <tr key={index} className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.dept}</td>
                <td className="px-6 py-4">{item.tasks} tasks</td>
                <td className="px-6 py-4">{item.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
