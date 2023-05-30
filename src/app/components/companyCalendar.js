'use client';

import { useState } from 'react';

export default function CompanyCalendar({ events }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openPopup = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="my-5 text-center font-semibold text-cyan-800">Upcoming Events</div>
      <div className="mx-auto my-5 grid max-h-24 w-9/12 grid-cols-1 overflow-hidden rounded-xl border-2 hover:overflow-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex cursor-pointer bg-gray-100 p-4 hover:bg-gray-300"
            onClick={() => openPopup(event)}
          >
            <div className="mx-3 flex flex-col p-1 text-center text-xs">
              <span className="">{event.date.getDate()}</span>
              <span className="">{event.date.toLocaleString('default', { month: 'long' })}</span>
              <span>{event.date.getFullYear()}</span>
            </div>
            <div className="overflow-hidden whitespace-nowrap p-1">
              <h3 className="overflow-hidden text-ellipsis text-lg font-bold">{event.title}</h3>
              <p className="overflow-hidden text-ellipsis text-sm text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}

        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="max-w-screen-2xl rounded bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">{selectedEvent.title}</h3>
              <p className="mb-2 text-gray-600">
                <span className="font-bold">Date: </span>
                {selectedEvent.date.toLocaleString(undefined, options)}
              </p>
              <p className="mb-2 text-gray-600">
                <span className="font-bold">Description: </span>
                {selectedEvent.description}
              </p>
              <p className="mb-2 text-gray-600">
                <span className="font-bold">Start Time: </span>
                {selectedEvent.startTime}
              </p>
              <p className="mb-2 text-gray-600">
                <span className="font-bold">End Time: </span>
                {selectedEvent.endTime}
              </p>
              <p className="mb-4 text-gray-600">
                <span className="font-bold">Location: </span>
                {selectedEvent.location}
              </p>
              <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
