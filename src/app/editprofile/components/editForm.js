export default function editForm() {
  function refreshPage() {
    window.location.reload(false);
  }

  function handleClick() {
    alert('Profile Updated');
  }
  return (
    <form>
      <div className="px-14 py-1 lg:py-20 lg:px-48">
        <div className=" border-gray-900/10 pb-12">
          <h2 className="mt-20 lg:mt-5 text-center text-xl lg:text-xl font-medium leading-7 text-gray-800">
            Personal Details
          </h2>

          <div className="block mt-10 w-8/12 mx-auto">
            <div className="sm:col-span-3 py-5">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 py-5">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Department
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="department"
                  id="department"
                  autoComplete="department"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 py-5">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email-address"
                  id="email"
                  autoComplete="@gmail.com"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-100 sm:text-sm sm:leading-6"
                />
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
          className="rounded-md px-3 py-2 text-md font-semibold text-blue-900 hover:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <u>Save</u>
        </button>
      </div>
    </form>
  );
}
