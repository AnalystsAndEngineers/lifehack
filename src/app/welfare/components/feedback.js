'use client';

import { useCallback, useEffect, useState } from 'react';
import { BsEnvelopePaperHeart } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';

export default function Feedback() {
  const [message, setMessage] = useState('');
  const [anonymity, setAnonymity] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [message, anonymity, validateForm]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAnonymityChange = (event) => {
    setAnonymity(event.target.value);
  };

  const validateForm = useCallback(() => {
    const isValid = message.trim() !== '' && anonymity !== '';
    setIsFormValid(isValid);
  }, [message, anonymity]);

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
        className="text-md mb-2 mt-10 flex justify-center px-7 text-center font-medium text-gray-900 dark:text-white"
      >
        We value your input! Share your thoughts with us.{' '}
        <BsEnvelopePaperHeart className="ml-1 mt-[2px] lg:ml-2 lg:mt-[1px] " />
      </label>
      <textarea
        id="message"
        rows="4"
        className="mx-auto block w-10/12 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:w-8/12"
        placeholder="How are you feeling today?"
        value={message}
        onChange={handleMessageChange}
      ></textarea>

      <fieldset className="mt-3 flex justify-center">
        <div className="mr-2 flex items-center">
          <input
            id="country-option-1"
            type="radio"
            name="anonymity"
            value="anonymous"
            className="h-4 w-4 border-gray-300"
            checked={anonymity === 'anonymous'}
            onChange={handleAnonymityChange}
          />
          <label htmlFor="country-option-1" className="ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
            Anonymous
          </label>
        </div>

        <div className="ml-2 flex items-center">
          <input
            id="country-option-2"
            type="radio"
            name="anonymity"
            value="publicView"
            className="h-4 w-4 border-gray-300"
            checked={anonymity === 'publicView'}
            onChange={handleAnonymityChange}
          />
          <label htmlFor="country-option-2" className="ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
            Public
          </label>
        </div>
      </fieldset>

      <div className="mt-2 text-center lg:w-10/12 lg:text-right">
        <button className="animate-bounce text-xl hover:text-gray-500" type="submit">
          <AiOutlineSend />
        </button>
      </div>
    </form>
  );
}
