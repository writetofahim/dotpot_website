import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import axios from "../../utils/axiosInstance"
import DeleteModal from '../../components/DeleteModal';
import { useNavigate } from 'react-router-dom';

const TeamTableRow = ({ teamMember, setData, data }) => {
    console.log(teamMember)
    const { name, title, image, email, _id } = teamMember;
    const [isModalOpen, setIsModalOpen] = useState();
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        const response = await axios.delete(`/team_member/${id}`);
        if (response.status === 200) {
            setData(existing => existing.filter(d => d._id !== id));
        }
    }

    return (
        <>
            {isModalOpen && <DeleteModal handleDelete={() => handleDelete(_id)} open={isModalOpen} setOpen={setIsModalOpen} />}
            <td className="px-6 py-4">
                <img className='w-24 rounded-full' src={image.includes("https://") ? image : `${import.meta.env.REACT_APP_SERVER_PATH}/${image}`} alt="" />
            </td>
            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4 flex gap-2">
                {title}
            </td>
            <td className="px-6 py-4 flex gap-2">
                {email}
            </td>
            <td className="px-6 py-2 ">
                <div className='flex gap-3'>
                    <AiOutlineEdit onClick={() => { navigate(`/admin/team/add-team?id=${_id}`); console.log("clicked") }} className='text-violet-500 cursor-pointer' />
                    <RiDeleteBinLine onClick={() => setIsModalOpen(true)} className='text-red-500 cursor-pointer' />
                </div>
            </td>
        </>
    );
};

export default TeamTableRow;