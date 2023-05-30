'use client';
import React, { useCallback, useState } from 'react';

import SearchBar from './components/searchbar';

import { BiSearchAlt2 } from 'react-icons/bi';

export default function EmployeeSearch() {
  const data = [
    { name: 'John Doe', department: 'HR', email: 'john@gmail.com' },
    { name: 'Jane Tan', department: 'IT', email: 'jane@gmail.com' },
    { name: 'Michael Johnson', department: 'Marketing', email: 'michael@gmail.com' },
    { name: 'Emily Davis', department: 'Finance', email: 'emily@gmail.com' },
    { name: 'David Williams', department: 'HR', email: 'david@gmail.com' },
    { name: 'John Doe', department: 'HR', email: 'john@gmail.com' },
    { name: 'Jane Tan', department: 'IT', email: 'jane@gmail.com' },
    { name: 'Michael Johnson', department: 'Marketing', email: 'michael@gmail.com' },
    { name: 'Emily Davis', department: 'Finance', email: 'emily@gmail.com' },
    { name: 'David Williams', department: 'HR', email: 'david@gmail.com' },
    { name: 'John Doe', department: 'HR', email: 'john@gmail.com' },
    { name: 'Jane Tan', department: 'IT', email: 'jane@gmail.com' },
    { name: 'Michael Johnson', department: 'Marketing', email: 'michael@gmail.com' },
    { name: 'Emily Davis', department: 'Finance', email: 'emily@gmail.com' },
    { name: 'David Williams', department: 'HR', email: 'david@gmail.com' },
    { name: 'John Doe', department: 'HR', email: 'john@gmail.com' },
    { name: 'Jane Tan', department: 'IT', email: 'jane@gmail.com' },
    { name: 'Michael Johnson', department: 'Marketing', email: 'michael@gmail.com' },
    { name: 'Emily Davis', department: 'Finance', email: 'emily@gmail.com' },
    { name: 'David Williams', department: 'HR', email: 'david@gmail.com' },
  ];
  const [filteredData, setFilteredData] = useState(data);

  const handleFilteredData = useCallback(
    (filteredData) => {
      setFilteredData(filteredData);
    },
    [setFilteredData]
  );

  return (
    <div className="max-h-screen text-sm">
      <div className="flex justify-center">
        <h1 className="mt-10 text-center text-xl font-semibold lg:text-2xl">Employee Directory</h1>
        <BiSearchAlt2 className="ml-2 mt-11 text-xl lg:text-2xl" />
      </div>

      <SearchBar data={data} onFilteredData={handleFilteredData} />
      <div className="mx-auto mt-6 max-h-[70vh] max-w-screen-xl overflow-auto px-5">
        <ul className="mt-7">
          {filteredData.length === 0 ? (
            <p className="mt-2 text-center text-gray-500">No employees found</p>
          ) : (
            <ul className="m-auto p-3">
              {filteredData.map((item, index) => (
                <li key={index} className="border-b-2 p-2 lg:flex lg:justify-center lg:py-5 lg:text-base">
                  <p className="w-80">
                    <span className="font-medium">Name:</span> {item.name}
                  </p>
                  <p className="w-80">
                    <span className="font-medium">Department:</span> {item.department}
                  </p>
                  <p className="w-80">
                    <span className="font-medium">Email:</span> {item.email}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
