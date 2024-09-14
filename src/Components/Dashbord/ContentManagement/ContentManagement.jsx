import React, { useState } from 'react';
import AddBlogModal from './AddBlogModal';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ContentManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const axiosPublic = useAxiosPublic();
    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const { data } = await axiosPublic.get("/all-blogs")
            return data
        }
    })
    console.log(blogs);
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            {/* <div className='text-center'>
                <h2 className='text-3xl'>Content Management</h2>
            </div> */}
            {/* add blog btn */}
            <div className='text-end'>
                <button className='btn btn-sm bg-red-500 hover:bg-red-400' onClick={() => setIsOpen(true)}>Add Blog</button>
                <AddBlogModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
            </div>

            {/* content management */}
            <div>
                <div className='py-2'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Image
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            content
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            date
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* User blog table row */}
                                    {
                                        blogs.map(blog => (
                                            <tr key={blog._id}>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <div className='flex items-center'>
                                                        <div className='flex-shrink-0'>
                                                            <div className='block relative'>
                                                                <img

                                                                    alt='profile'
                                                                    src={blog?.imageUrl}
                                                                    className='mx-auto object-cover rounded h-10 w-15'
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{blog.title}</p>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{blog.content}</p>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>{blog.date}</p>
                                                </td>
                                              


                                               
                                              
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ContentManagement;