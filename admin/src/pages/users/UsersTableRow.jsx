import React, { useState } from "react";
import DeleteModal from "../../components/DeleteModal";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const UsersTableRow = ({ user, setData, data }) => {
  const { username, email, role, phoneNumber, photo, _id } = user;
  const [isModalOpen, setIsModalOpen] = useState();

  const handleDelete = async (id) => {
    const token = JSON.parse(localStorage.getItem("accessToken"));
    const response = await axios.delete(`/user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
          src={` ${
            photo.includes("https://")
              ? photo
              : import.meta.env.REACT_APP_SERVER_PATH
          }/${photo}`}
          alt={username}
          className="w-1/5"
        />
      </th>
      <td className="px-6 py-4">{username}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{phoneNumber}</td>
      <td className="px-6 py-4">{role}</td>
      {/* <td className="px-6 py-2 ">
                <div className='flex gap-3'>
                    <AiOutlineEdit className='text-violet-500 cursor-pointer' />
                    <RiDeleteBinLine onClick={() => setIsModalOpen(true)} className='text-red-500 cursor-pointer' />
                </div>
            </td> */}
    </>
  );
};

export default UsersTableRow;
