import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const WhoWeWorksWithTableRow = ({ partner, setData, data }) => {
  const { title, icon, link, _id } = partner;
  const [isModalOpen, setIsModalOpen] = useState();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    setIsModalOpen(true);
    const response = await axios.delete(`/who_we_work_with/${id}`);
    if (response.status === 200) {
      setData((existing) => existing.filter((d) => d._id !== id));
    }
    postLogger({ level: "info", message: response });
  };

  return (
    <>
      {isModalOpen && (
        <DeleteModal
          handleDelete={() => handleDelete(_id)}
          open={isModalOpen}
          setOpen={setIsModalOpen}
        />
      )}
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img src={icon} alt={title} className="w-16" />
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{link}</td>
      <td className="px-6 py-2 ">
        <div className="flex gap-3">
          <AiOutlineEdit
            onClick={() =>
              navigate(`/who-we-works-with/add-who-we-works-with?id=${_id}`)
            }
            className="text-violet-500 cursor-pointer"
          />
          <RiDeleteBinLine
            onClick={() => handleDelete(_id)}
            className="text-red-500 cursor-pointer"
          />
        </div>
      </td>
    </>
  );
};

export default WhoWeWorksWithTableRow;
