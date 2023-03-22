import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

const TableRow = ({ user }) => {
    const handleEdit = () => {

    }
    return (
        <>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.fullName}
            </th>
            <td className="px-6 py-4">
                {user.email}
            </td>
            <td className="px-6 py-4">
                {user.role}
            </td>
            <td className="px-6 py-4">
                {user.phoneNumber}
            </td>
            <td className="px-6 py-2 ">
                <div className='flex gap-3'>
                    <AiOutlineEdit className='text-violet-500 cursor-pointer' />
                    <RiDeleteBinLine onClick={handleEdit} className='text-red-500 cursor-pointer' />
                </div>
            </td>
        </>
    );
};

export default TableRow;