import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../../assets/logo.png"

const Navbar = () => {

    const navLinkStyle = ({ isActive }) =>
        `hover:transition-all hover:duration-300 hover:text-primary font-bold ${isActive ? 'text-primary' : ''
        }`;

    const links = <>
        <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
        <li><NavLink to="/all-packages" className={navLinkStyle}>All Packages</NavLink></li>
        {/* {
            user && <li><NavLink to="/my-bookings" className={navLinkStyle}>My Bookings</NavLink></li>
        } */}
        <li><NavLink to="/about-us" className={navLinkStyle}>About Us</NavLink></li>
    </>

    return (
        <div>
            <div className='flex fixed top-0 z-50 justify-center w-full'>
                <nav className="navbar max-w-6xl mx-auto bg-white rounded-full my-5 shadow-sm px-5">
                    <div className="navbar-start">
                        <div className="dropdown relative">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-white rounded-box w-52 space-y-1 text-secondary">
                                {links}
                            </ul>
                        </div>

                        <Link to="/" className="text-xl text-secondary font-bold flex items-center gap-2">
                            <img className="w-10 h-10" src={logo} alt="Logo" />Muqaddas
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex text-sm text-secondary">
                        <ul className="menu-horizontal px-1 gap-5">
                            {links}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {/* {
                        user ? (
                            <div className="dropdown dropdown-end relative">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL || userAvatar} alt="User Avatar" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-white rounded-box w-52 text-secondary gap-2">
                                    <li><NavLink to="/add-package" className={navLinkStyle}>Add Package</NavLink></li>
                                    <li><NavLink to="/manage-my-packages" className={navLinkStyle}>Manage My Packages</NavLink></li>
                                    <li><Link onClick={handleLogout} className='flex items-center justify-center gap-1'><TbLogout2 size={20} />Logout</Link></li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login" className="btn bg-transparent px-6 ml-2 flex items-center gap-2">
                                <TbLogin2 size={20} /> Login
                            </Link>
                        )
                    } */}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;