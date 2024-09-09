import { IoCreateOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom'

const DonorMenu = () => {
    return (
        <div>
                  <NavLink
                to='create-donation-request'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <IoCreateOutline className='text-2xl'></IoCreateOutline>
                
                <span className='mx-4 font-medium'>Create  Request</span>
              </NavLink>
        </div>
    );
};

export default DonorMenu;