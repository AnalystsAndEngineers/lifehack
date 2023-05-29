import { BsEnvelopePaperHeart } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';

export default function Welfare() {
  return (
    <div>
      <label
        for="message"
        className="px-7 flex justify-center mt-10 text-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        We value your input! Share your thoughts with us.{' '}
        <BsEnvelopePaperHeart className="ml-1 mt-[2px] lg:mt-[1px] lg:ml-2 " />
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-10/12 lg:w-8/12 mx-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="How are you feeling today?"
      ></textarea>

      <fieldset className="flex justify-center mt-3">
        <div className="flex items-center mr-2">
          <input
            id="country-option-1"
            type="radio"
            name="anonymity"
            value="anonymous"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            checked
          />
          <label for="country-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Anonymous
          </label>
        </div>

        <div className="flex items-center ml-2">
          <input
            id="country-option-2"
            type="radio"
            name="anonymity"
            value="public"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Public
          </label>
        </div>
      </fieldset>

      <div className="mt-2 text-center lg:w-10/12 lg:text-right ">
        <button className="hover:text-gray-500 text-xl animate-bounce ">
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
}
