'use client';

import { useEffect, useState } from 'react';
import { BsEnvelopePaperHeart } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';

export default function Feedback() {
  const [message, setMessage] = useState('');
  const [anonymity, setAnonymity] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [message, anonymity]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAnonymityChange = (event) => {
    setAnonymity(event.target.value);
  };

  const validateForm = () => {
    const isValid = message.trim() !== '' && anonymity !== '';
    setIsFormValid(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      alert('Thank you for sharing!');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="message"
        className="px-7 flex justify-center mt-10 text-center mb-2 text-md font-medium text-gray-900 dark:text-white"
      >
        We value your input! Share your thoughts with us.{' '}
        <BsEnvelopePaperHeart className="ml-1 mt-[2px] lg:mt-[1px] lg:ml-2 " />
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-10/12 lg:w-8/12 mx-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="How are you feeling today?"
        value={message}
        onChange={handleMessageChange}
      ></textarea>

      <fieldset className="flex justify-center mt-3">
        <div className="flex items-center mr-2">
          <input
            id="country-option-1"
            type="radio"
            name="anonymity"
            value="anonymous"
            className="w-4 h-4 border-gray-300"
            checked={anonymity === 'anonymous'}
            onChange={handleAnonymityChange}
          />
          <label htmlFor="country-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Anonymous
          </label>
        </div>

        <div className="flex items-center ml-2">
          <input
            id="country-option-2"
            type="radio"
            name="anonymity"
            value="publicView"
            className="w-4 h-4 border-gray-300"
            checked={anonymity === 'publicView'}
            onChange={handleAnonymityChange}
          />
          <label htmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Public
          </label>
        </div>
      </fieldset>

      <div className="mt-2 text-center lg:w-10/12 lg:text-right">
        <button className="hover:text-gray-500 text-xl animate-bounce" type="submit">
          <AiOutlineSend />
        </button>
      </div>
    </form>
  );
}
