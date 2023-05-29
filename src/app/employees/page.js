'use client';
import React, { useState } from 'react';

import SearchBar from './components/searchbar';

export default function EmployeeSearch() {
  const [data, setData] = useState([
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
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const handleFilteredData = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <div className='text-sm max-h-screen'>
      <SearchBar data={data} onFilteredData={handleFilteredData} />
      <div className="max-w-screen-xl mt-6 mx-auto px-5 overflow-auto max-h-[70vh]">
        <ul className="mt-7">
          {filteredData.length === 0 ? (
            <p className="mt-2 text-gray-500 text-center">No employees found</p>
          ) : (
            <ul className="m-auto p-3">
              {filteredData.map((item, index) => (
                <li key={index} className="border-b-2 p-2 lg:flex lg:py-5 lg:text-base lg:justify-center">
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
