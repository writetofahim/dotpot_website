import * as React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const AllContactCenterService = () => {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState();
  const [selectedId, setSelectedId] = React.useState();

  const fetchData = async () => {
    try {
      // const response = await axios.get(`/client_review?page=${page}`);
      const response = await axios.get("/contact_center_service");
      setData(response.data);
      console.log(response.data);
      postLogger({level:"info", message:response})
    } catch (error) {
      console.error(error);
      postLogger({level:"error", message:error})
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    const response = await axios.delete(`/contact_center_service/${id}`);
    if (response.status === 200) {
      setData((existing) => existing.filter((d) => d._id !== id));
      postLogger({level:"info", message:response})
    }
  };
  const deleteService = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };
  return (
    <div className="relative overflow-x-auto p-5">
      {isModalOpen && (
        <DeleteModal
          handleDelete={() => handleDelete(selectedId)}
          open={isModalOpen}
          setOpen={setIsModalOpen}
        />
      )}
      <Link to="/admin/contact-center-service/add-contact-center-service">
        <button className="m-5 px-3 py-2 bg-green-400 text-white font-bold cursor-pointer rounded-lg hover:scale-105 hover:shadow-xl transition-all">
          Add New
        </button>
      </Link>
      <table className="mb-14 w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Icon
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Link
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((service) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={service._id}
            >
              <td className="px-6 py-4">
                <img className="w-24" src={service.icon} alt="" />
              </td>
              <td className="px-6 py-4">{service.title}</td>
              <td className="px-6 py-4">{service.link}</td>
              <td className="px-6 py-2 ">
                <div className="flex gap-3">
                  <AiOutlineEdit
                    onClick={() => {
                      navigate(
                        `/admin/contact-center-service/add-contact-center-service?id=${service._id}`
                      );
                      console.log("clicked");
                    }}
                    className="text-violet-500 cursor-pointer"
                  />
                  <RiDeleteBinLine
                    onClick={() => deleteService(service._id)}
                    className="text-red-500 cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllContactCenterService;
