
import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import axios from "../../utils/axiosInstance"
import DeleteModal from '../../components/DeleteModal';
import { useNavigate } from 'react-router-dom';

const ResponseTableRow = ({ response, setData, data }) => {
    console.log("ResponseTableRow response: ", response)
    const { name, email, attachment, message, budget, phone, _id } = response;
    const [isModalOpen, setIsModalOpen] = useState();
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        const response = await axios.delete(`/client_response/${id}`);
        if (response.status === 200) {
            setData(existing => existing.filter(d => d._id !== id));
        }
    }

    return (
        <>
            {isModalOpen && <DeleteModal handleDelete={() => handleDelete(_id)} open={isModalOpen} setOpen={setIsModalOpen} />}
            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4 flex gap-2">
                Email: {email}
            </td>
            <td className="px-6 py-4 flex gap-2">
                Budget: ${budget}
            </td>
            <td className="px-6 py-4 flex gap-2">
                Phone: {phone}
            </td>
            <td className="px-6 py-4 flex gap-2">
                Message:    {message}
            </td>
            <td className="px-6 py-4 flex gap-2">
                <a className='text-blue-500' href={`${import.meta.env.REACT_APP_SERVER_PATH}/${attachment}`}>Download Attachment</a>
            </td>
            <td className="px-6 py-2 ">
                <div className='flex gap-3'>
                    {/* <AiOutlineEdit onClick={() => { navigate(`/team/add-team?id=${_id}`); console.log("clicked") }} className='text-violet-500 cursor-pointer' /> */}
                    <RiDeleteBinLine onClick={() => setIsModalOpen(true)} className='text-red-500 cursor-pointer' />
                </div>
            </td>
        </>
    );
};

export default ResponseTableRow;