// import { useState } from "react";

// function handleChange(event) {
//   const file = event.target.files[0];
//   const reader = new FileReader();

//   reader.onload = function (e) {
//     const imageContainer = document.getElementById("image-container");
//     const image = new Image();
//     image.src = e.target.result;
//     image.alt = file.name;
//     imageContainer.innerHTML = ""; // Clear any previous image
//     imageContainer.appendChild(image);
//   };

//   reader.readAsDataURL(file);
//   console.log("hel");
// }

// function AddResponse() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     address: "",
//     email: "",
//     phone: "",
//     dob: "",
//     roll: "",
//     pic: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Submit the form data to the server
//     console.log(formData);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="flex w-4/6 mx-auto my-5">
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
//         <div className="mb-4">
//           <label
//             htmlFor="fullName"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="fullName"
//             id="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="Enter full name"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="address"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Address
//           </label>
//           <textarea
//             name="address"
//             id="address"
//             value={formData.address}
//             onChange={handleChange}
//             placeholder="Enter address"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
//             Phone
//           </label>
//           <input
//             type="text"
//             name="phone"
//             id="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter phone"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
//             Date of Birth
//           </label>
//           <input
//             type="date"
//             name="dob"
//             id="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="roll" className="block text-gray-700 font-bold mb-2">
//             Roll
//           </label>
//           <select
//             name="roll"
//             id="roll"
//             value={formData.roll}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           >
//             <option value="">Select roll</option>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="pic" className="block text-gray-700 font-bold mb-2">
//             Profile Picture
//           </label>
//           <input
//             type="file"
//             name="pic"
//             id="pic"
//             accept="image/*"
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//           <button
//             type="reset"
//             onClick={() => setFormData({})}
//             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Reset
//           </button>
//         </div>
//       </form>
//       <div
//         className="w-52 h-52 bg-black rounded-md mt-5"
//         id="image-container"
//       ></div>
//     </div>
//   );
// }

// export default AddResponse;
import React from "react";

const AddResponse = () => {
  return (
    <div>
      <h1>hello from add responses</h1>
    </div>
  );
};

export default AddResponse;
