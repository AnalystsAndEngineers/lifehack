'use client';
import React, { useState, useEffect } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiOutlineLoading } from 'react-icons/ai';

export default function SmartHelp() {
  const [fields, setFields] = useState([{ value: '' }]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Generate schedule');
  const [data, setData] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const rateLimitDuration = 5000; // Set the rate limit duration in milliseconds
  let timerId = null;

  const handleChange = (index, event) => {
    const values = [...fields];
    values[index].value = event.target.value;
    setFields(values);
  };

  const handleAddField = () => {
    const values = [...fields];
    values.push({ value: '' });
    setFields(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      setIsButtonDisabled(true);
      setButtonText('Generating schedule...');
      const timetable = await fetch('/api/openAI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      });
      const data = await timetable.json();
      setData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      setButtonText('Generate schedule');
      timerId = setTimeout(() => {
        setIsButtonDisabled(false);
      }, rateLimitDuration);
    }
  };

  return (
    <div className="mx-auto mt-20">
      <div className="my-5 text-center font-semibold">Day Planner</div>
      <div className='text-center my-5 text-xs'>Enter your tasks in order of priority</div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
        {fields.map((field, index) => (
          <div className="mb-4" key={index}>
            <input
              type="text"
              className="w-full rounded border border-gray-300 px-4 py-2"
              placeholder="Enter a task"
              value={field.value}
              onChange={(event) => handleChange(index, event)}
              required
            />
          </div>
        ))}
        <div className="flex justify-end">
          <IoIosAddCircleOutline className="text-md cursor-pointer hover:text-cyan-600" onClick={handleAddField} />
        </div>
        <div className="mt-4 flex justify-center">
          <button type="submit" className="rounded bg-cyan-700 px-4 py-2 text-white hover:bg-cyan-900">
            {buttonText}
          </button>
        </div>
      </form>
      <div className="mt-10">
        {isLoading ? (
          <AiOutlineLoading className="mx-auto animate-spin text-xl" />
        ) : (
          <table className="mx-auto w-3/4 lg:w-1/2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((task, index) => (
                <tr key={index} className="border-b-2 text-center">
                  <td className="p-2">{task.name}</td>
                  <td>{task.start_time}</td>
                  <td>{task.end_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
