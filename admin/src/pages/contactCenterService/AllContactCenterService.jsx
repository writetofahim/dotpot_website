import React from "react";
import { Link } from "react-router-dom";

const AllContactCenterService = () => {
  return (
    <div className="relative overflow-x-auto">
      <Link to="/clients-review/add-clients-review">
        <button className="m-2 px-3 py-2 bg-green-400 text-white font-bold cursor-pointer rounded-lg hover:scale-105 hover:shadow-xl transition-all">
          Add New
        </button>
      </Link>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Company Name
            </th>
            <th scope="col" className="px-6 py-3">
              Position
            </th>
            <th scope="col" className="px-6 py-3">
              Review
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {/* <tbody>
            {data?.map((clientsReview) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={clientsReview._id}>
                <ClientsReviewTableRow clientsReview={clientsReview} setData={setData} data={data} />
              </tr>
            ))}
          </tbody> */}
      </table>
    </div>
  );
};

export default AllContactCenterService;
