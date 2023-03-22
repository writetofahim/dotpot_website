import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import axios from "../../utils/axiosInstance"
import DeleteModal from '../../components/DeleteModal';
import { useNavigate } from 'react-router-dom';

const ClientsReviewTableRow = ({ clientsReview, setData, data }) => {
    console.log(clientsReview)
    const { company_name, client_image, client_name, _id,position,review_text } = clientsReview;
    const [isModalOpen, setIsModalOpen] = useState();
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        const response = await axios.delete(`/client_review/${id}`);
        if (response.status === 200) {
            setData(existing => existing.filter(d => d._id !== id));
        }
    }

    return (
        <>
            {isModalOpen && <DeleteModal handleDelete={() => handleDelete(_id)} open={isModalOpen} setOpen={setIsModalOpen} />}
            <td className="px-6 py-4">
                <img className='w-24' src={client_image.includes("https://") ? client_image : `${import.meta.env.REACT_APP_SERVER_PATH}/${client_image}`} alt="" />
            </td>
            <td className="px-6 py-4">
                {client_name}
            </td>
            <td className="px-6 py-4">
                {company_name}
            </td>
            <td className="px-6 py-4">
                {position}
            </td>
            <td className="px-6 py-4">
                {review_text}
            </td>
            <td className="px-6 py-2 ">
                <div className='flex gap-3'>
                    <AiOutlineEdit onClick={() => { navigate(`/clients-review/add-clients-review?id=${_id}`); console.log("clicked") }} className='text-violet-500 cursor-pointer' />
                    <RiDeleteBinLine onClick={() => setIsModalOpen(true)} className='text-red-500 cursor-pointer' />
                </div>
            </td>
        </>
    );
};

export default ClientsReviewTableRow;