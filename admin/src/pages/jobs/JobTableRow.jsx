import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import axios from "../../utils/axiosInstance"
import DeleteModal from '../../components/DeleteModal';
import { useNavigate } from 'react-router-dom';
import postLogger from '../../utils/postLogger';

const JobTableRow = ({ job, setData, data }) => {
    const { title, company, location, _id } = job;
    const [isModalOpen, setIsModalOpen] = useState();
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        const response = await axios.delete(`/job/${id}`);
        if (response.status === 200) {
            setData(existing => existing.filter(d => d._id !== id));
        }
        postLogger({level:"info", message:response})
    }

    return (
        <>
            {isModalOpen && <DeleteModal handleDelete={() => handleDelete(_id)} open={isModalOpen} setOpen={setIsModalOpen} />}
            <td className="px-6 py-4">
                {title}
            </td>
            <td className="px-6 py-4">
               {company}
            </td>
            <td className="px-6 py-4">
               {location}
            </td>
            <td className="px-6 py-2 ">
                <div className='flex gap-3'>
                    <AiOutlineEdit onClick={() =>{ navigate(`/admin/jobs/add-jobs?id=${_id}`) ; console.log("clicked")}} className='text-violet-500 cursor-pointer' />
                    <RiDeleteBinLine onClick={() => setIsModalOpen(true)} className='text-red-500 cursor-pointer' />
                </div>
            </td>
        </>
    );
};

export default JobTableRow;