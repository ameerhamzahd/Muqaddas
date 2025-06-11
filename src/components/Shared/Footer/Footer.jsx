import React, { use } from 'react';
import { FaFacebook, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen, IoLogoLinkedin } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { Link } from 'react-router';
import logo from "../../../assets/logo.png"
import { GrInstagram } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {

    return (
        <div>
            <footer className="bg-secondary text-[#e6d8ca] py-12">
                <div className="grid md:grid-cols-4 gap-5 lg:gap-10 max-w-5xl mx-auto justify-center items-center px-5 lg:px-0">
                    {/* Logo & Description */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="bg-[#e6d8ca] text-secondary w-10 h-10 rounded-t-full flex items-center justify-center font-bold text-xl">
                                <img className="w-10 h-10" src={logo} alt="Logo" />
                            </div>
                            <h2 className="text-2xl font-bold">Muqaddas</h2>
                        </Link>
                        <p className="text-sm leading-relaxed font-roboto">
                            We offer seamless Hajj and Umrah tour packages, ensuring a spiritually fulfilling and stress-free experience from start to return.
                        </p>
                        <div className="flex gap-4 mt-4 text-xl">
                        <a href="https://www.facebook.com/ameerhamzah.daiyan/" target='_blank'><FaFacebook className='hover:scale-110 duration-300' /></a>
                        <a href="https://www.instagram.com/ameerhamzah.d/" target='_blank'><GrInstagram className='hover:scale-110 duration-300' /></a>
                        <a href="https://x.com/ameerhamzahd" target='_blank'><FaXTwitter className='hover:scale-110 duration-300' /></a>
                        <a href="https://www.linkedin.com/in/ameerhamzahd/" target='_blank'><IoLogoLinkedin className='hover:scale-110 duration-300' /></a>
                        </div>
                    </div>

                    {/* Navigation + Quick Link */}
                    <div>
                        <h3 className="font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className='font-roboto hover:underline duration-300 transition-all'>Home</Link></li>
                            <li><Link to="/all-packages" className='font-roboto hover:underline duration-300 transition-all'>All Packages</Link></li>
                            <li><Link to="/about-us" className='font-roboto hover:underline duration-300 transition-all'>About Us</Link></li>
                            <li><Link to="/privacy-policy" className='font-roboto hover:underline duration-300 transition-all'>Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Work Hours */}
                    <div>
                        <h3 className="font-bold mb-4">Work Hours</h3>
                        <div className="flex items-center gap-2 mb-2">
                            <BiTime />
                            <p className='font-roboto'>Sun - Thurs : 7AM–5PM</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <BiTime />
                            <p className='font-roboto'>Saturday 9AM–3PM</p>
                        </div>
                        <p className="text-sm font-roboto">
                            Here to assist you during our working hours.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <div className='bg-[#e6d8ca] text-secondary rounded-t-full flex items-center justify-center p-2'>
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <p className="font-bold">Phone</p>
                                <p className='text-sm font-roboto'>(+880) 1712345678</p>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center gap-2">
                            <div className='bg-[#e6d8ca] text-secondary rounded-t-full flex items-center justify-center p-2'>
                                <IoIosMailOpen />
                            </div>
                            <div>
                                <p className="font-bold">Email</p>
                                <p className='text-sm font-roboto'>infomuqaddas.org</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className='bg-[#e6d8ca] text-secondary rounded-t-full flex items-center justify-center p-2'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="font-bold">Address</p>
                                <p className='text-sm font-roboto'>Chittagong, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-[#e6d8ca]/30 max-w-5xl mx-auto" />

                <div className="text-center text-sm font-bold">
                    © 2023 Muqaddas - All Rights Reserved
                </div>
            </footer>
        </div>
    );
};

export default Footer;