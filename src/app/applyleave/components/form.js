/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon } from '@heroicons/react/24/solid';

export default function Form() {
  const handleClick = () => {
    alert('Succesfully Applied for Leave');
  };

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <form>
      <div className="px-14 py-1 lg:px-48">
        <div className="">
          <div className="">
            <div className=" border-gray-900/10 pb-12">
              <h2 className=" text-xl font-semibold leading-7 text-gray-900 lg:text-2xl">Apply Leave</h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="countries" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Select type of leave
              </label>
              <select
                defaultValue={'DEFAULT'}
                id="leaves"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option valur="DEFAULT">Please Select</option>
                <option value="MC">Medical Certificate</option>
                <option value="Leave"> Leave </option>
              </select>
            </div>

            <div className="col-span-full mt-10">
              <label htmlFor="MC-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Medical Certificate
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload Medical Certificate</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="button"
          className="text-md font-semibold leading-6 text-gray-900 hover:text-gray-400"
          onClick={refreshPage}
        >
          <u>Cancel</u>
        </button>
        <button
          type="submit"
          onClick={handleClick}
          className="text-md rounded-md px-3 py-2 font-semibold text-blue-900 hover:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <u>Submit</u>
        </button>
      </div>
    </form>
  );
}
