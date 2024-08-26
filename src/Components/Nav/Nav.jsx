import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar  rounded-lg">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl">Blood<span className='text-red-500'>Bank</span></a>
            </div>
            <div className="flex-none gap-2">
                {!user &&
                    <button className='btn'>
                        <Link to='/login'><div>Join Us</div></Link>
                    </button>
                }
                {
                    user &&
                    <div className="dropdown dropdown-end z-50">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>DashBoard</a></li>
                            <li>
                                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>

    );
};

export default Nav;