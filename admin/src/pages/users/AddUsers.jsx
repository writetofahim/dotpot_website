import { useState } from "react";

function AddUsers() {
  // const [file, setFile] = useState(null);
  // function handleChangeFile(event) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     const preview = document.getElementById("preview");
  //     const image = new Image();
  //     image.src = reader.result;
  //     preview.innerHTML = "";
  //     preview.appendChild(image);
  //   };
  //   setFile(file);
  // }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, pic: file });
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const preview = document.getElementById("preview");
      const image = new Image();
      image.src = reader.result;
      preview.innerHTML = "";
      preview.appendChild(image);
    };
  };

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    dob: "",
    rule: "",
    pic: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit the form data to the server
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" ">
      <div className="flex justify-between w-1/2 mx-auto my-5">
        <div className="">
          <h2 className="text-center text-xl font-semibold">Add User Form</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 ">
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-bold mb-2"
              >
                Address
              </label>
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-gray-700 font-bold mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="rule"
                className="block text-gray-700 font-bold mb-2"
              >
                Rule
              </label>
              <select
                name="rule"
                id="rule"
                value={formData.rule}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select rule</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            {/* <div className="mb-4">
              <label
                htmlFor="pic"
                className="block text-gray-700 font-bold mb-2"
              >
                Profile Picture
              </label>
              <input
                type="file"
                name="pic"
                id="pic"
                accept="image/*"
                onChange={handleChangeFile}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div> */}
            <div className="mb-4">
              <label
                htmlFor="pic"
                className="block text-gray-700 font-bold mb-2"
              >
                Profile Picture
              </label>
              <input
                type="file"
                name="pic"
                id="pic"
                accept="image/*"
                onChange={handleImageChange}
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
        <div className="w-40 h-40 bg-gray-300 rounded-md mt-5 flex items-center justify-center">
          <div className="" id="preview"></div>
        </div>
      </div>
    </div>
  );
}

export default AddUsers;
