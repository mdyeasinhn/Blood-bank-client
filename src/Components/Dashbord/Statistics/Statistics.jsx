import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { GrUserSettings } from "react-icons/gr";
import { BiSolidDonateHeart } from "react-icons/bi";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Statistics = () => {
    const { user, loading } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/users");
            return data;
        }
    });

    console.log(users);



    const donor = users?.filter(user => user.role === 'donor') || [];
    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg "></span>
        </div>
    }

    if (loading) return <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg "></span>
    </div>
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl'> Hi, Welcome {user.displayName} </h2>
            </div>

            <div className='flex gap-6'>
                <div className='flex w-[400px] mt-20 rounded h-[200px] p-16 gap-20 shadow-lg bg-gray-300'>
                    <div>
                        <GrUserSettings className='text-3xl' />
                    </div>
                    <div>
                        <h2>Total Donors</h2>
                        <h2 className='text-center'>{users.length}</h2>
                    </div>
                </div>
                <div className='flex w-[400px] mt-20 rounded h-[200px] p-16 gap-20 shadow-lg bg-gray-300'>
                    <div>
                        <BiSolidDonateHeart className='text-3xl' />
                    </div>
                    <div>
                        <h2>Total Donation</h2>
                        <h2 className='text-center'>5</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
