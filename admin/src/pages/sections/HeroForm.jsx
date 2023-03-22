import React from "react";

const HeroForm = (props) => {
  console.log(props);
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit the form data to the server
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            // value={formData.fullName}
            // onChange={handleChange}

            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={() => setFormData({})}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroForm;
