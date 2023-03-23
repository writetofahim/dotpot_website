import axios from "../utils/axiosInstance";
import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const TableRow = ({data,setData}) => {
  const handelDelete = async (id) => {
    const response = await axios.delete(`/job_application/${id}`);
    if (response.status === 200) {
        setData(existing => existing.filter(d => d._id !== id));
    }
}
  return(
    <>
      <td className="px-6 py-4">
          {data.jobTitle}
      </td>
      <td className="px-6 py-4">
          {data.name}
      </td>
      <td className="px-6 max-w-2/5">
          {data.coverLetter}
      </td>
      <td className="px-6 max-w-2/5">
      <a href={data.resume} download>Download Resume</a>
      </td>
      <td className="px-6 max-w-2/5">
          {
              <div className="">
                {data.socialMediaUrls.linkedin && (<><Link to={data.socialMediaUrls.linkedin}>LinkedInt</Link><br /></>)}
                {data.socialMediaUrls.twitter && (<><Link to={data.socialMediaUrls.twitter}>Twitter</Link><br /></>)}
              </div>
          }
      </td>
      <td className="px-6 max-w-2/5">
          {data.email}
      </td>
      <td className="px-6 max-w-2/5">
          {data.phone}
      </td>
      <td className="px-6 py-2 ">
          <div className='flex gap-3'>
              <RiDeleteBinLine onClick={()=>handelDelete(data._id)} className='text-red-500 cursor-pointer' />
          </div>
      </td>
    </>
  )
}

const AllJobApplications = (props) => {
  const data = props.data;
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`/job_application?page=${page}`);
      setData(response.data.JobApplications);
      setTotalPages(response.data.totalPages);
      console.log(data);
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
    <>
      <div className='lg:p-5 p-3'>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Job Name
              </th>
              <th scope="col" className="px-6 py-3">
                Applicant Name
              </th>
              <th scope="col" className="px-6 py-3">
                Cover Latter
              </th>
              <th scope="col" className="px-6 py-3">
                CV
              </th>
              <th scope="col" className="px-6 py-3">
                Social Links
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <TableRow key={index} data={data} setData={props.setData} />
            </tr>)}
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
    </>
  )
}

const JobApplications = () => {
  const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/job_application')
            .then(response => setData(response.data.JobApplications))
            .catch(error => console.error(error));
    }, []);

    console.log(data)

  return (
    <div className="w-full min-h-full">
      <h1 className="text-center text-4xl text-primary-500 font-bold my-5">Job Applications</h1>
      <hr />
      {
        data && <AllJobApplications data={data} setData={setData} />
      }
    </div>
  );
};

export default JobApplications;
