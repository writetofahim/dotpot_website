import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import CommonSnackbar from "../../components/CommonSnackbar";
import DeleteModal from "../../components/DeleteModal";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const TableRow = ({ blog, setData, data }) => {
  const { title, image, isPublished, tags, _id } = blog;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [iSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const openSnackbar = (msg) => {
    console.log("Called");
    setMessage(msg);
    setIsSnackbarOpen(true);
  };

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const response = await axios.delete(`/blog/${id}`);
    openSnackbar("Delete Success");
    postLogger({ level: "info", message: response });
    if (response.status === 200) {
      setData((existing) => existing.filter((d) => d._id !== id));
    }
  };

  return (
    <>
      {iSnackbarOpen && (
        <CommonSnackbar
          message={message}
          open={iSnackbarOpen}
          setOpen={setIsSnackbarOpen}
        />
      )}
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
          src={`${import.meta.env.REACT_APP_SERVER_PATH}/${image}`}
          alt=""
          className="w-1/5"
        />
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index}>{tag}. </span>
        ))}
      </td>
      {/* <td className="px-6 py-4">
                {isPublished ? <span className='rounded-full px-2 py-1 bg-green-500 text-xs text-white block w-full text-center'>Published</span> : <span className='rounded-full px-2 py-1 bg-yellow-500 text-xs text-white block w-full text-center'>Draff</span>}
            </td> */}
      <td className="px-6 py-2 ">
        <div className="flex gap-3">
          <AiOutlineEdit
            onClick={() => navigate(`/admin/blogs/add-blogs?id=${_id}`)}
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

export default TableRow;
