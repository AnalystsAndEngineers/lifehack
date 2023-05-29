'use client';
import { useState } from 'react';

function MoodPopup({ chosenMood, setChosenMood }) {
  const moodOptions = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😔', label: 'Sad' },
    { emoji: '😭', label: 'Crying' },
    { emoji: '🤬', label: 'Furious' },
    { emoji: '🤒', label: 'Sick' },
    { emoji: '😃', label: 'Excited' },
    { emoji: '😍', label: 'In Love' },
    { emoji: '😫', label: 'Tired' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😒', label: 'Annoyed' },
    { emoji: '😴', label: 'Sleepy' },
    { emoji: '😟', label: 'Worried' },
  ];

  const [moodDescription, setMoodDescription] = useState(null);
  const handleMoodSelection = (mood) => {
    setMoodDescription(mood);
  };

  const submitMoodSelection = () => {
    setChosenMood(moodDescription.emoji);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="max-w-xs rounded-lg bg-white p-8 shadow-lg lg:max-w-screen-xl">
        <h2 className="mb-4 text-2xl font-bold">How are you feeling today?</h2>
        <div className="grid grid-cols-4 gap-4">
          {moodOptions.map((mood) => (
            <button key={mood.label} className="text-4xl" onClick={() => handleMoodSelection(mood)}>
              {mood.emoji}
            </button>
          ))}
        </div>
        {moodDescription && <div className="mt-5 text-center"> {moodDescription.label}</div>}
        <button
          onClick={submitMoodSelection}
          className="mx-auto mt-6 flex rounded-full bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default MoodPopup;
