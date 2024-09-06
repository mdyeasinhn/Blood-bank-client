import React from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import DonationCard from './DonationCard';

const DonationRequests = () => {
    const axiosPublic = useAxiosPublic();
    const {data: request = [], isLoading} = useQuery({
        queryKey:['request'],
        queryFn : async ()=>{
            const {data} = await axiosPublic.get("/all-requests")
            return data
        }
    })
    console.log(request);
    return (
      <div>
        <div>
            <h2 className='text-3xl font-bold text-center'>Donation Requests</h2>
        </div>
          <div className='grid lg:grid-cols-3 gap-4 mt-8'>
            {
                request.map(card => (
                    <DonationCard key={card._id} card={card}/>
                ))
            }
        </div>
      </div>
    );
};

export default DonationRequests;