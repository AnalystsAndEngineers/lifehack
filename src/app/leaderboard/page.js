import { GrTrophy } from 'react-icons/gr';

export default function LeaderBoard() {
  const data = [
    { name: 'John Doe', dept: 'HR', tasks: '8', rank: '1' },
    { name: 'Jane Tan', dept: 'IT', tasks: '7', rank: '2' },
    { name: 'Michael Johnson', dept: 'Marketing', tasks: '6', rank: '3' },
    { name: 'Emily Davis', dept: 'Finance', tasks: '4', rank: '4' },
    { name: 'David Williams', dept: 'HR', tasks: '2', rank: '5' },
  ];

  return (
    <div>
      <div className="flex justify-center mt-20 text-2xl font-semibold text-gray-800">
        <h1 className="mr-3">Rankings </h1> <GrTrophy className="mt-1" />
      </div>

      <div class="mt-10 relative overflow-x-auto sm:rounded-lg">
        <table class="w-8/12 mx-auto text-sm text-left text-gray-500">
          <thead class="text-base  text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Department
              </th>
              <th scope="col" class="px-6 py-3">
                Score
              </th>
              <th scope="col" class="px-6 py-3">
                Rank
              </th>
            </tr>
          </thead>
          <tbody className="text-base">
            {data.map((item, index) => (
              <tr key={index} class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.name}
                </th>
                <td class="px-6 py-4">{item.dept}</td>
                <td class="px-6 py-4">{item.tasks} tasks</td>
                <td class="px-6 py-4">{item.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
