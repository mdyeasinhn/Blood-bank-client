import PropTypes from 'prop-types'
import {
    Dialog,
    Transition,
} from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const DonateModal = ({ closeModal, isOpen, setIsOpen, request }) => {
    const { user } = useAuth();
    const [status, setStatus] = useState('inprogress');
    const [userInfo, setUserInfo] = useState({ donorName: '', donorEmail: '' });
    const axiosSecure = useAxiosSecure();
    // Set userInfo in  state 
    useEffect(() => {
        if (user) {
            setUserInfo({
               donorName: user?.displayName || '',
                donorEmail: user?.email || '',
            });
        }
    }, [user]);

    
    const { mutateAsync } = useMutation({
        mutationFn: async ({ id, status, userInfo }) => {  
          const { data } = await axiosSecure.patch(`/donation/update/${id}`, { status, userInfo });
          return data;
        },
        onSuccess: data => {
         
          console.log(data);
          toast.success('Donation request successfully!');
        },
      });


      const handleDonate = async (id) => {
        try {
            await mutateAsync({ id, status, userInfo });
        } catch (error) {
            console.log(error);
            toast.error('Error during donation request');
        }
    };


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >

                                </Dialog.Title>
                                <div>
                                    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
                                        <h2 className="text-lg font-semibold text-black capitalize">Donor Info</h2>

                                        <div className='text-center space-y-3'>
                                            <h3>Name : {user?.displayName}</h3>
                                            <h2>   Email : {user?.email}</h2>
                                        </div>

                                        <div>
                                            <button onClick={()=> handleDonate(request._id)} className='btn btn-sm'>
                                                Confirm
                                            </button>
                                        </div>

                                    </section>


                                </div>


                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

DonateModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
}

export default DonateModal
