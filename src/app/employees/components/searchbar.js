'use client';

import React, { useCallback, useEffect, useState } from 'react';

export default function SearchBar({ data, onFilteredData }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback(() => {
    const filteredData = data.filter((item) =>
      Object.values(item).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    onFilteredData(filteredData);
  }, [data, searchQuery, onFilteredData]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-28">
          {/* <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg> */}
        </div>
        <input
          type="search"
          id="default-search"
          className="mx-auto mt-10 block w-8/12 rounded-lg border border-gray-300 bg-gray-100 p-4 pl-6 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search Employees"
          required
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
