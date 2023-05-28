"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function PayHistory() {
  const router = useRouter();
  function handleClick() {
    router.push("/");
  }
  return (
    <div>
      <div className="text-4xl font-semibold mx-10 my-8 text-gray-800">
        <button
          className="hover:text-gray-400"
          type="button"
          onClick={handleClick}
        >
          {" "}
          <IoIosArrowBack />
        </button>
      </div>

      <div className="text-center font-semibold text-gray-900 text-3xl mb-10">
        <h1> Payment History</h1>
      </div>
      <div>
        <table class="w-4/12 mx-auto rounded-xl text-md text-center text-gray-800">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3 border-b">
                Date
              </th>
              <th scope="col" class="px-6 py-3 border-b">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                June 2023
              </th>
              <td class="px-6 py-4">$4800</td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                May 2023
              </th>
              <td class="px-6 py-4">$4800</td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                April 2023
              </th>
              <td class="px-6 py-4">$4800</td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                March 2023
              </th>
              <td class="px-6 py-4">$4700</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
