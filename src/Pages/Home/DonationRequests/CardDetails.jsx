import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DonateModal from './DonateModal';


const CardDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  // single  request

  const { id } = useParams()
  const axiosPublic = useAxiosPublic();

  const { data: request = {}, isLoading } = useQuery({
    queryKey: ['request', id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/request/${id}`)
      return data
    }
  })

  console.log(request);
  const closeModal = () => {
    setIsOpen(false)
}

  return (
    <div className=' w-full p-8  flex justify-center'>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
       <div className='flex justify-between'>
       <h2 className="text-2xl font-bold mb-4">Donation Request </h2>
        <h2 className='badge-outline badge'>{request.status}</h2>
       </div>

        <table className="table-auto w-full border-collapse border border-gray-300">
          <tbody>
            {/* Recipient Name */}
            <tr>
              <td className="px-4 py-2 border font-semibold">Recipient Name:</td>
              <td className="px-4 py-2 border">{request.name}</td>
            </tr>

            {/* Recipient District */}
            <tr>
              <td className="px-4 py-2 border font-semibold">Recipient District:</td>
              <td className="px-4 py-2 border">{request.district}</td>
            </tr>

            {/* Recipient Upazila */}
            <tr>
              <td className="px-4 py-2 border font-semibold">Recipient Upazila:</td>
              <td className="px-4 py-2 border">{request.upazila}</td>
            </tr>

            {/* Hospital Name */}
            <tr>
              <td className="px-4 py-2 border font-semibold">Hospital Name:</td>
              <td className="px-4 py-2 border">{request.hospital}</td>
            </tr>

            {/* Full Address */}
            <tr>
              <td className="px-4 py-2 border font-semibold">Full Address:</td>
              <td className="px-4 py-2 border">{request.fullAddress}</td>
            </tr>

            {/* Donation Date */}
            <tr>
              <td className="px-4 py-2 border font-semibold">Donation Date:</td>
              <td className="px-4 py-2 border">{request.donationDate}</td>
            </tr>

            {/* Donation Time */}
            <tr>
              <td className="px-4 py-2 border font-semibold">Donation Time:</td>
              <td className="px-4 py-2 border">{request.donationTime}</td>
            </tr>

            {/* Request Message */}
            <tr>
              <td className="px-4 py-2 border font-semibold">Request Message:</td>
              <td className="px-4 py-2 border">{request.requestMessage}</td>
            </tr>

          </tbody>
       
        </table>
        <div className='text-center mt-4'>
            <button     disabled={request.status === 'inprogress'}   onClick={() => setIsOpen(true)} className='btn btn-block bg-red-500'>
              Donate
            </button>

            <DonateModal closeModal={closeModal} isOpen={isOpen} setIsOpen={setIsOpen} request={ request}/>

            
          </div>
      </div>

    </div>
  );
};

export default CardDetails;