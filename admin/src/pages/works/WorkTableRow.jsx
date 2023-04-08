import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import axios from "../../utils/axiosInstance"
import DeleteModal from '../../components/DeleteModal';
import { useNavigate } from 'react-router-dom';
import postLogger from '../../utils/postLogger';

const WorkTableRow = ({ work, setData, data }) => {
    console.log(work)
    const { title, image, technologies, _id } = work;
    const [isModalOpen, setIsModalOpen] = useState();
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        const response = await axios.delete(`/work/${id}`);
        if (response.status === 200) {
            setData(existing => existing.filter(d => d._id !== id));
        }
        postLogger({level:"info", message:response})
    }

    return (
        <>
            {isModalOpen && <DeleteModal handleDelete={() => handleDelete(_id)} open={isModalOpen} setOpen={setIsModalOpen} />}
            <td className="px-6 py-4">
                <img className='w-24' src={image.includes("https://") ? image : `${import.meta.env.REACT_APP_SERVER_PATH}/${image}`} alt="" />
            </td>
            <td className="px-6 py-4">
                {title}
            </td>
            <td className="px-6 py-4 flex gap-2">
                {technologies.map((technology, index) => <span key={index} className="inline-block border rounded-full px-1">{technology}</span>)}
            </td>
            <td className="px-6 py-2 ">
                <div className='flex gap-3'>
                    <AiOutlineEdit onClick={() => { navigate(`/admin/works/add-works?id=${_id}`); console.log("clicked") }} className='text-violet-500 cursor-pointer' />
                    <RiDeleteBinLine onClick={() => setIsModalOpen(true)} className='text-red-500 cursor-pointer' />
                </div>
            </td>
        </>
    );
};

export default WorkTableRow;