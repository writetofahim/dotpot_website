import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const OurPartnersTableRow = ({ partner, setData, data }) => {
  const { logo, companyName, websiteUrl, _id } = partner;
  const [isModalOpen, setIsModalOpen] = useState();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const response = await axios.delete(`/our_partner/${id}`);
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
        <img
          src={
            logo.includes("https://")
              ? logo
              : `${import.meta.env.REACT_APP_SERVER_PATH}/${logo}`
          }
          alt={companyName}
          className="w-16"
        />
      </th>
      <td className="px-6 py-4">{companyName}</td>
      <td className="px-6 py-4">{websiteUrl}</td>
      <td className="px-6 py-2 ">
        <div className="flex gap-3">
          <AiOutlineEdit
            onClick={() =>
              navigate(`/admin/our-partners/add-our-partners?id=${_id}`)
            }
            className="text-violet-500 cursor-pointer"
          />
          <RiDeleteBinLine
            onClick={() => setIsModalOpen(true)}
            className="text-red-500 cursor-pointer"
          />
        </div>
      </td>
    </>
  );
};

export default OurPartnersTableRow;
