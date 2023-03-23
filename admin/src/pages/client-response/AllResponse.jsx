import axios from '../../utils/axiosInstance';
import * as React from 'react';
import ResponseTableRow from './ResponseTableRow';

export default function AllResponse() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`/client_response?page=${page}`);
      console.log("response.data", response.data);
      setData(response.data.c_clientResponse);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className='lg:p-5 p-3'>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Information
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((response) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={response._id}>
                <ResponseTableRow response={response} setData={setData} data={data} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-center mt-5'>
        <nav aria-label="Page navigation example ">
          <ul className="inline-flex -space-x-px">
            <li>
              <button
                onClick={handlePrevPage}
                disabled={page === 1}
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => setPage(index + 1)}
                  className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${index + 1 === page ? 'text-blue-600 border-blue-600 bg-blue-50' : ''
                    }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={handleNextPage}
                disabled={page === totalPages}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

// import * as React from "react";
// import TableRow from "./TableRow";

// export default function AllResponse() {
//   const users = [
//     {
//       _id: 1,
//       username: "john_doe",
//       email: "john_doe@example.com",
//       photo: "https://picsum.photos/200",
//       dateOfBirth: "1990-01-01",
//       role: "USER",
//       fullName: "John Doe",
//       phoneNumber: "+1 (555) 123-4567",
//       address: "123 Main St",
//     },
//     {
//       _id: 2,
//       username: "jane_smith",
//       email: "jane_smith@example.com",
//       photo: "https://picsum.photos/200",
//       dateOfBirth: "1995-02-14",
//       role: "USER",
//       fullName: "Jane Smith",
//       phoneNumber: "+1 (555) 234-5678",
//       address: "456 2nd St",
//     },
//     {
//       _id: 3,
//       username: "bob_johnson",
//       email: "bob_johnson@example.com",
//       photo: "https://picsum.photos/200",
//       dateOfBirth: "1988-05-23",
//       role: "USER",
//       fullName: "Bob Johnson",
//       phoneNumber: "+1 (555) 345-6789",
//       address: "789 3rd Ave",
//     },
//     {
//       _id: 4,
//       username: "lisa_wong",
//       email: "lisa_wong@example.com",
//       photo: "https://picsum.photos/200",
//       dateOfBirth: "1993-11-12",
//       role: "USER",
//       fullName: "Lisa Wong",
//       phoneNumber: "+1 (555) 456-7890",
//       address: "987 Elm St",
//     },
//     {
//       _id: 5,
//       username: "david_nguyen",
//       email: "david_nguyen@example.com",
//       photo: "https://picsum.photos/200",
//       dateOfBirth: "1991-09-05",
//       role: "USER",
//       fullName: "David Nguyen",
//       phoneNumber: "+1 (555) 567-8901",
//       address: "654 Pine St",
//     },
//     {
//       _id: 6,
//       username: "sarah_jackson",
//       email: "sarah_jackson@example.com",
//       photo: "https://picsum.photos/200",
//       dateOfBirth: "1989-12-24",
//       role: "USER",
//       fullName: "Sarah Jackson",
//       phoneNumber: "+1 (555) 678-9012",
//       address: "321 Oak St",
//     },
//     {
//       _id: 7,
//       username: "mike_taylor",
//       email: "mike_taylor@example.com",
//       photo: "https://picsum.photos/200",
//       dateOfBirth: "1992-06-10",
//       role: "USER",
//       fullName: "Mike Taylor",
//       phoneNumber: "+1 (555) 789-0123",
//       address: "111 Broadway",
//     },
//     {
//       _id: 8,
//       username: "emily_lee",
//       email: "emily_lee@example.com",
//       photo: "https://picsum.photos/200",
//       dateOfBirth: "1994-03-17",
//       role: "USER",
//       fullName: "Emily Lee",
//       phoneNumber: "+1 (555) 890-1234",
//       address: "222 Market St",
//     },
//     {
//       _id: 9,
//       username: "sara",
//       email: "sara@example.com",
//       photo: "https://via.placeholder.com/150",
//       dateOfBirth: "1989-12-31",
//       role: "USER",
//       fullName: "Sara Williams",
//       phoneNumber: "+1 555-555-5555",
//       address: "40 Maple Ave, Anytown USA",
//     },
//     {
//       _id: 10,
//       username: "max",
//       email: "max@example.com",
//       photo: "https://via.placeholder.com/150",
//       dateOfBirth: "1994-03-20",
//       role: "USER",
//       fullName: "Max Johnson",
//       phoneNumber: "+1 555-555-5555",
//       address: "50 Main St, Anytown USA",
//     },
//     {
//       _id: 11,
//       username: "olivia",
//       email: "olivia@example.com",
//       photo: "https://via.placeholder.com/150",
//       dateOfBirth: "1991-06-15",
//       role: "USER",
//       fullName: "Olivia Davis",
//       phoneNumber: "+1 555-555-5555",
//       address: "60 Oak St, Anytown USA",
//     },
//   ];

//   return (
//     <div className="lg:p-5 p-3">
//       <div className="relative overflow-x-auto">
//         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 User name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Email
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Role
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Phone
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                 <TableRow key={user._id} user={user} />
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-center mt-5">
//         <nav aria-label="Page navigation example ">
//           <ul className="inline-flex -space-x-px">
//             <li>
//               <a
//                 href="#"
//                 className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 Previous
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 1
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 2
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 aria-current="page"
//                 className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
//               >
//                 3
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 4
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 5
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 Next
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }

