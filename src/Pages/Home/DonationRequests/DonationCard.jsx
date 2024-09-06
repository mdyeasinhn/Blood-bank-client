import React from 'react';
import { Link } from 'react-router-dom';


const DonationCard = ({ card }) => {


    return (
        <div className="bg-gray-200 rounded-lg shadow-md p-6 w-full max-w-lg mx-auto">
        <h3 className="text-lg font-semibold text-center mb-4">Patient</h3>

        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <tbody>
                    {/* Name */}
                    <tr>
                        <td className="px-4 py-2 border font-semibold"> Name:</td>
                        <td className="px-4 py-2 border">{card.name}</td>
                    </tr>

                    {/* Hospital */}
                    <tr>
                        <td className="px-4 py-2 border font-semibold">Location :</td>
                        <td className="px-4 py-2 border">{card.fullAddress}</td>
                    </tr>

             

                    {/* Donation Date */}
                    <tr>
                        <td className="px-4 py-2 border font-semibold">Donation Date:</td>
                        <td className="px-4 py-2 border">{card.donationDate}</td>
                    </tr>

                    {/* Donation Time */}
                    <tr>
                        <td className="px-4 py-2 border font-semibold">Donation Time:</td>
                        <td className="px-4 py-2 border">{card.donationTime}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="text-center mt-4">
            <Link to={`/request/${card._id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
                    View Details
                </button>
            </Link>
        </div>
    </div>
    );
};

export default DonationCard;