import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import axios from "../../utils/axiosInstance"
import DeleteModal from '../../components/DeleteModal';
import { useNavigate } from 'react-router-dom';

const OrdersTableRow = ({ order, setData, data }) => {
    const { client_id, createdAt, _id, total_cost, selected_items, status } = order;
    console.log(selected_items)
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
                {createdAt}
            </td>
            <td className="px-6 py-4">
                {client_id}
            </td>
            <td className="px-6 py-4">
                <div className="">
                    {
                        selected_items?.map((item, index) => (
                            <div className="" key={index}>
                                {item.title}
                                <br />
                                {
                                    item.technologies.length > 0  && (
                                        <>
                                            Technologies:
                                            {
                                                item.technologies?.map((tech,index) => (
                                                    <p className="ml-2" key={index}>{tech.title}</p>
                                                ))
                                            }
                                        </>
                                    )
                                }
                                {
                                    item.addons.length > 0 && (
                                        <>
                                            Addons:
                                            {
                                                item.addons?.map((addons,index) => (
                                                    <p className="ml-2" key={index}>{addons.title}</p>
                                                ))
                                            }
                                        </>
                                    )
                                }
                            </div>
                        ))
                    } 
                </div>
            </td>
            <td className="px-6 py-4">
                {total_cost}
            </td>
            <td className="px-6 py-4">
                {status}
            </td>
            {/* <td className="px-6 py-2 ">
                <div className='flex gap-3'>
                    <AiOutlineEdit onClick={() => { navigate(`/clients-review/add-clients-review?id=${_id}`); console.log("clicked") }} className='text-violet-500 cursor-pointer' />
                    <RiDeleteBinLine onClick={() => setIsModalOpen(true)} className='text-red-500 cursor-pointer' />
                </div>
            </td> */}
        </>
    );
};

export default OrdersTableRow;