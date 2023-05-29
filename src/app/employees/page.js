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
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const handleFilteredData = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <div>
      <SearchBar data={data} onFilteredData={handleFilteredData} />
      <div className="flex justify-center">
        <ul className=" mt-7 ">
          {filteredData.length === 0 ? (
            <p className="text-gray-500 mt-2">No employees found</p>
          ) : (
            <ul className="p-3">
              {filteredData.map((item, index) => (
                <li key={index} className="py-2 lg:py-5 lg:text-lg">
                  <p>
                    <span className="font-medium mr-16">Name:</span> {item.name}
                  </p>
                  <span className="font-medium mr-3">Department:</span> {item.department}
                  <p>
                    {' '}
                    <span className="font-medium mr-16">Email:</span> {item.email}
                  </p>
                  <hr />
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
