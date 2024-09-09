import { HiOutlineUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";


const AdminMenu = () => {
    return (
        <div>
           <NavLink
                to='all-users'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
              <HiOutlineUsers className='text-2xl' />
              
                <span className='mx-4 font-medium'>All Users</span>
              </NavLink>
        </div>
    );
};

export default AdminMenu;