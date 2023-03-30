import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import axios from "../../utils/axiosInstance"
import DeleteModal from '../../components/DeleteModal';
import { useNavigate } from 'react-router-dom';

const TableRow = ({ blog, setData, data }) => {
    const { title, image, isPublished, tags, _id } = blog;
    const [isModalOpen, setIsModalOpen] = useState()
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        const response = await axios.delete(`/blog/${id}`);
        if (response.status === 200) {
            setData(existing => existing.filter(d => d._id !== id));
        }
    }

    return (
        <>
            {isModalOpen && <DeleteModal handleDelete={() => handleDelete(_id)} open={isModalOpen} setOpen={setIsModalOpen} />}
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={`${import.meta.env.REACT_APP_SERVER_PATH}/${image}`} alt="" className='w-1/5' />
            </th>
            <td className="px-6 py-4">
                {title}
            </td>
            <td className="px-6 py-4">
                {
                    tags.map((tag, index) => (
                        <span key={index}>{tag}. </span>
                    ))
                }
            </td>
            {/* <td className="px-6 py-4">
                {isPublished ? <span className='rounded-full px-2 py-1 bg-green-500 text-xs text-white block w-full text-center'>Published</span> : <span className='rounded-full px-2 py-1 bg-yellow-500 text-xs text-white block w-full text-center'>Draff</span>}
            </td> */}
            <td className="px-6 py-2 ">
                <div className='flex gap-3'>
                    <AiOutlineEdit onClick={() => navigate(`/admin/blogs/add-blogs?id=${_id}`)} className='text-violet-500 cursor-pointer' />
                    <RiDeleteBinLine onClick={() => setIsModalOpen(true)} className='text-red-500 cursor-pointer' />
                </div>
            </td>
        </>
    );
};

export default TableRow;