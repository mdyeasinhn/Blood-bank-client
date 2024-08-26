import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar  rounded-lg">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl">Blood<span className='text-red-500'>Bank</span></a>
            </div>
            <div className="flex-none gap-2">
                <Link to='/login'><button className='btn'>Login</button></Link>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>DashBoard</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Nav;