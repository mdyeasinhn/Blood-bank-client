import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';

const MyRequests = () => {
const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {
        data: requests = [],
 
      } = useQuery({
        queryKey: ['my-requests', user?.email],
        queryFn: async () => {
       
          const { data } = await axiosSecure.get(`/my-requests/${user?.email}`);
          return data;
        },
      });

      console.log(requests);
      
    return (
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
                                        Name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Location
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Time
                                    </th>

                                
                                </tr>
                            </thead>
                            <tbody>
                                {/* User blog table row */}
                             {
                                requests.map(request => (

                                    <tr key={request._id}>
                                  
                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        <p className='text-gray-900 whitespace-no-wrap'>{request.name}</p>
                                    </td>
                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        <p className='text-gray-900 whitespace-no-wrap'>{request.hospital}</p>
                                    </td>
                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        <p className='text-gray-900 whitespace-no-wrap'>{request.donationDate}</p>
                                    </td>
                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        <p className='text-gray-900 whitespace-no-wrap'>{request.donationDate}</p>
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
    );
};

export default MyRequests;