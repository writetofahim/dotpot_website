import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const Options = ({ item }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={item.icon} alt={item.title} className="w-5 h-5" />
      <h1 className="">{item.title}</h1>
      <h2 className="text-gray-300 font-bold">{item.cost}</h2>
    </div>
  );
};

const ServiceTableRow = ({ service, setData, data }) => {
  console.log(service);
  const { title, icon, technologies, _id, addons } = service;
  const [isModalOpen, setIsModalOpen] = useState();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const response = await axios.delete(`/service/${id}`);
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
      <td className="px-6 py-4">
        <img
          className="w-14"
          src={
            icon.includes("https://")
              ? icon
              : `${import.meta.env.REACT_APP_SERVER_PATH}/${icon}`
          }
          alt={title}
        />
      </td>
      <td className="py-4 text-xl font-bold">{title}</td>
      <td className="px-6 py-4">
        {technologies?.map((item, index) => (
          <Options item={item} key={index} />
        ))}
      </td>
      <td className="px-6 py-4">
        {addons?.map((item, index) => (
          <Options item={item} key={index} />
        ))}
      </td>
      <td className="px-6 py-2 ">
        <div className="flex gap-3">
          <AiOutlineEdit
            onClick={() => {
              navigate(`/admin/services/add-services?id=${_id}`);
              console.log("clicked");
            }}
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

export default ServiceTableRow;
