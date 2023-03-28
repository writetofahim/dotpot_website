import axios from '../../utils/axiosInstance';
import * as React from 'react';
import { Link } from 'react-router-dom';
import OurPartnersTableRow from './OurPartnersTableRow';

export default function AllOurPartners() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`/our_partner?page=${page}`);
      setData(response.data.ourPartners);
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
    <div className='lg:p-5 p-3'>
      <div className="relative overflow-x-auto">
        <Link to="/our-partners/add-our-partners">
          <button className="m-2 px-3 py-2 bg-green-400 text-white font-bold cursor-pointer rounded-lg hover:scale-105 hover:shadow-xl transition-all">Add New Partner</button>
        </Link>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              Logo
              </th>
              <th scope="col" className="px-6 py-3">
              Company Name
              </th>
              <th scope="col" className="px-6 py-3">
              Website Url
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((partner) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={partner._id}>
                <OurPartnersTableRow partner={partner} setData={setData} data={data} />
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