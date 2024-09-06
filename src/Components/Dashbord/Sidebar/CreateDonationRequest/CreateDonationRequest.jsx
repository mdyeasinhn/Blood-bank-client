import React from 'react';
import RequestFrom from '../../Form/RequestFrom';
import useAuth from '../../../../hooks/useAuth';
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const CreateDonationRequest = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()


       // post data form db
       const { mutateAsync } = useMutation({
        mutationFn: async tableData => {
            const { data } = await axiosSecure.post(`/request`, tableData)
            return data
        },
        onSuccess: () => {
            console.log('Data save at Mongodb');
         
      
           
        }
    })

    // donation reqest submit
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const form = e.target; 

        const name = form.recipientName.value;
        const district = form.recipientDistrict.value;
        const upazila = form.recipientUpazila.value;
        const hospital = form.hospitalName.value;
        const fullAddress = form.fullAddress.value;
        const donationDate = form.donationDate.value;
        const donationTime = form.donationTime.value;
        const requestMessage = form.requestMessage.value;

        const requester = {
            name: user?.displayName,
            email: user?.email,
            image : user?.photoURL,
        };

        const tableData = {
            name,
            district,
            upazila,
            hospital,
            fullAddress,
            donationDate,
            donationTime,
            requestMessage,
            requester
        };

        console.log(tableData); 
        await mutateAsync(tableData)
    };



    return (
        <div>
            <RequestFrom handleSubmit={handleSubmit} />
        </div>
    );
};

export default CreateDonationRequest;
