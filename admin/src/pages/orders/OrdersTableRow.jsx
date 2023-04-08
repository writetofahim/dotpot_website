import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import axios from "../../utils/axiosInstance"
import DeleteModal from '../../components/DeleteModal';
import { useNavigate } from 'react-router-dom';
import moment from 'moment'
import postLogger from '../../utils/postLogger';

const OrdersTableRow = ({ order, setData, data , refetch}) => {
    const { client_id, createdAt, _id, total_cost, selected_items, status } = order;
    console.log(selected_items)
    const [isModalOpen, setIsModalOpen] = useState();
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        const response = await axios.delete(`/client_review/${id}`);
        if (response.status === 200) {
            setData(existing => existing.filter(d => d._id !== id));
        }
        postLogger({level:"info", message:response})
    }

    const handleStatusChange =async (e) => {
        if(!e.target.value) return
        const response = await axios.put(`/order/${_id}`, {status:e.target.value})
        if (response.status === 200) {
            refetch();
            }
        postLogger({level:"info", message:response})
    }
    

    return (
        <>
            {isModalOpen && <DeleteModal handleDelete={() => handleDelete(_id)} open={isModalOpen} setOpen={setIsModalOpen} />}
            <td className="px-6 py-4">
                {moment(createdAt).format('LL')}
            </td>
            <td className="px-6 py-4 ">
              <div>
                Username: <span className="font-bold"> {client_id?.username}</span> 
              </div>
              <div>
                Email: <span className="font-bold"> {client_id?.email}</span>
              </div>
              <div>
               Phone: <span className="font-bold">{client_id?.phone}</span>
             </div>
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
                <span className={`px-2 py-1 ${status==="Pending" && "bg-yellow-200"} ${status==="Active" ? "bg-blue-200" : "bg-gray-300"} ${status==="Cancelled" ? "bg-red-200" : "bg-gray-300"}  ${status==="Delivered" && "bg-green-200"} rounded-full w-24 inline-block text-center`}>{status}</span>
            </td>
            
            <td className="px-6 py-4">
            <select className='rounded text-sm' onChange={handleStatusChange} name="" id="">
                  <option value="">Select</option>
                  <option value="Pending">Pending</option>
                  <option value="Active">Active</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
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