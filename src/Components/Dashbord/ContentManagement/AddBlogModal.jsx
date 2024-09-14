import PropTypes from 'prop-types'
import {
    Dialog,
    Transition,
} from '@headlessui/react'
import { Fragment } from 'react'
import { imageUploadFn } from '../../../Utils'
import { useMutation } from '@tanstack/react-query'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import toast from 'react-hot-toast'

const AddBlogModal = ({ closeModal, isOpen }) => {
    const axiosPublic = useAxiosPublic()

 // post a blog form db
 const { mutateAsync } = useMutation({
    mutationFn: async blog => {
        const { data } = await axiosPublic.put(`/add-blog`, blog)
        return data
    },
    onSuccess: () => {
        toast.success("blog saved successful!")
        console.log('Data save at Mongodb');



    }
})

// add blog
const handleAddBlog = async e =>{
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const title = form.title.value;
    const content = form.content.value;
    const date = form.date.value;
    const status = 'unpublished';

    

    try {
        const imageUrl = await imageUploadFn(image);

        const blog = {imageUrl, title, content, date, status}
        await mutateAsync(blog)

    } catch (error) {
        
    }
}


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
                                        <h2 className="text-lg font-semibold text-black capitalize">Blog Info</h2>

                                        <form onSubmit={handleAddBlog}>
                                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                                                {/* photo */}
                                                <div className='bg-white w-full m-auto rounded-lg'>
                                                    <div className="flex justify-between">
                                                        <label
                                                            className='block mb-2 text-sm font-medium text-black'
                                                            htmlFor='LoggingEmailAddress'
                                                        >
                                                            Photo
                                                        </label>
                                                    </div>
                                                    <div className='file_upload px-1 py-2 relative border-2 border-black rounded-lg'>
                                                        <div className='flex flex-col w-max mx-auto text-center'>
                                                            <label>
                                                                <input
                                                                    className='text-sm cursor-pointer w-36 hidden'
                                                                    type='file'
                                                                    name='image'
                                                                    id='image'
                                                                    accept='image/*'
                                                                    hidden
                                                                />
                                                                <div className='bg-blue-600 text-white border border-black rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500'>
                                                                    Upload Image
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="text-black" htmlFor="emailAddress">Title </label>
                                                    <input
                                                        id="title"
                                                        type="text"
                                                        name="title"
                                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border border-black rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="text-black" htmlFor="password">Content</label>
                                                    <input
                                                        id="password"
                                                        type="text"
                                                        name='content'
                                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border border-black rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="text-black" htmlFor="passwordConfirmation">Date</label>
                                                    <input
                                                        id="date"
                                                        type="date"
                                                        name='date'
                                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border border-black rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex justify-end mt-6">
                                                <button
                                                    className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </form>
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

AddBlogModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
}

export default AddBlogModal
