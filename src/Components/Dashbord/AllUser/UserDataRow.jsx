import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import UpdateUserModal from '../../Shared/Modal/UpdateUserModal';

const UserDataRow = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { user: loggedInUser } = useAuth()
  

    const modalHandler = async selected => {
        if (loggedInUser.email === user.email) {
            toast.error('Action not Allowed..');
            return setIsOpen(false)
        }}
    return (
     
            <tr>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <img className="object-cover w-6 h-6 rounded-full ring ring-gray-300 dark:ring-gray-600" src={user?.imageUrl} alt="" />
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    {user?.status ? (
                        <p className={`${user.status === 'active' ? 'text-yellow-500' : 'text-green-500'} whitespace-no-wrap`}>
                            {user?.status}
                        </p>
                    ) : (
                        <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
                    )}
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <button onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                        <span
                            aria-hidden='true'
                            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                        ></span>
                        <span className='relative'>Update Role</span>
                    </button>
                    {/* Update User Modal */}
                    <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user} />
                </td>
            </tr>
    
    );
};

export default UserDataRow;