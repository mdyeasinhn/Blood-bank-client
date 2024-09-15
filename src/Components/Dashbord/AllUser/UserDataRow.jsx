import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import UpdateUserModal from '../../Shared/Modal/UpdateUserModal';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const UserDataRow = ({ user, refetch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { user: loggedInUser } = useAuth()
    const axiosSecure = useAxiosSecure();

    // Mutation for updating status
    const { mutateAsync: updateStatus } = useMutation({
        mutationFn: async (newStatus) => {
            const { data } = await axiosSecure.patch(`/users/update/${user.email}`, { status: newStatus });
            return data;
        },
        onSuccess: () => {
            toast.success('User status updated successfully!');
            refetch();
        }
        
    });

    // Mutation for updating role
    const { mutateAsync: updateRole } = useMutation({
        mutationFn: async (newRole) => {
            const { data } = await axiosSecure.patch(`/users/update/${user.email}`, { role: newRole });
            return data;
        },
        onSuccess: () => {
            toast.success('User role updated successfully!');
            refetch();
            setIsModalOpen(false); // Close modal after success
        },

    });

    // Handle status change
    const handleStatusChange = async () => {
        const newStatus = user.status === 'active' ? 'blocked' : 'active';
        try {
            await updateStatus(newStatus);
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    // Handle role update  modal
    const handleRoleUpdate = async (selectedRole) => {
        if (loggedInUser.email === user.email) {
            toast.error('Action Not Allowed')
            return setIsOpen(false)
          }
        try {
            await updateRole(selectedRole);
        } catch (error) {
            console.error('Error updating role:', error);
        }
    };
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
                {user?.status && (
                    <button
                     onClick={handleStatusChange}
                        className={`btn-sm btn rounded-xl ${user.status === 'active' ? 'bg-red-400 hover:bg-red-300' : 'bg-green-400 hover:bg-green-300'
                            }`}
                    >
                        {user.status === 'active' ? 'Block' : 'Active'}
                    </button>
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
                <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={handleRoleUpdate} user={user} />
            </td>
        </tr>

    );
};

export default UserDataRow;