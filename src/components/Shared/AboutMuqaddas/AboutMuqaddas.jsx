import React from 'react';
import { FaUserTie, FaPassport, FaTools } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { MdLuggage } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { motion } from "motion/react"

const AboutMuqaddas = () => {
    return (
        <div className='px-5 lg:px-0'>
            <div className="max-w-5xl mx-auto my-15 rounded-4xl overflow-hidden grid md:grid-cols-3 shadow-md">
                {/* Left Section with motion */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#E6D8CA] w-full p-10 flex flex-col justify-center space-y-6 md:col-span-2"
                >
                    {/* Label */}
                    <div className="flex items-center justify-center md:justify-start gap-2 text-lg font-semibold text-secondary">
                        <div className="bg-secondary p-2 rounded-full text-white">
                            <FaUserTie />
                        </div>
                        <span>About Muqaddas</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-5xl font-bold text-secondary leading-tight text-center md:text-start">
                    Your Sacred Journey, Perfectly Planned
                    </h2>

                    {/* Description */}
                    <p className="text-secondary opacity-80 text-base text-center md:text-start font-roboto">
                    From travel arrangements to religious guidance, we ensure your pilgrimage is seamless, meaningful, and handled with the utmost care.
                    </p>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-10 md:gap-5 pt-5">
                        {/* Left Box with background image */}
                        <div
                            className="relative bg-cover bg-center rounded-2xl p-6 w-full text-white opacity-75"
                            style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749286871/mosque3_ohzyhr.jpg)` }}
                        >
                            <div className="absolute -top-5 left-5 bg-primary p-3 rounded-t-full  text-white text-lg shadow-md">
                                <FaPassport />
                            </div>
                            <h3 className="font-bold text-lg mt-5">Exclusive Deals</h3>
                            <p className="text-sm mt-2 font-roboto">
                            Experience More, Spend Less on Your Pilgrimage
                            </p>
                        </div>

                        {/* Right Box */}
                        <div className="relative bg-[#f9f1e7] border-r-6 border-b-6 border-primary rounded-2xl p-6 w-full text-secondary shadow-md">
                            <div className="absolute -top-5 left-5 bg-secondary p-3 rounded-t-full text-white text-lg shadow-md">
                            <PiAirplaneTiltFill />
                            </div>
                            <h3 className="font-bold text-lg mt-5">Travel Officially</h3>
                            <p className="text-sm mt-2 font-roboto">
                            Your Trusted Partner in Licensed Pilgrimage Travel
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 pt-5">
                    <div className="relative bg-[#f9f1e7] border-r-6 border-b-6 border-primary rounded-2xl p-6 w-full text-secondary shadow-md">
                            <div className="absolute -top-5 left-5 bg-secondary p-3 rounded-t-full text-white text-lg shadow-md">
                            <FaHeadset />
                            </div>
                            <h3 className="font-bold text-lg mt-5">24/7 Support</h3>
                            <p className="text-sm mt-2 font-roboto">
                            Your Trusted Partner in Licensed Pilgrimage Travel
                            </p>
                        </div>

                        <div className="relative bg-[#f9f1e7] border-r-6 border-b-6 border-primary rounded-2xl p-6 w-full text-secondary shadow-md">
                            <div className="absolute -top-5 left-5 bg-secondary p-3 rounded-t-full  text-white text-lg shadow-md">
                            <FaHotel />
                            </div>
                            <h3 className="font-bold text-lg mt-5">5 Star Hotel</h3>
                            <p className="text-sm mt-2 font-roboto">
                            Your Trusted Partner in Licensed Pilgrimage Travel
                            </p>
                        </div>

                        <div
                            className="relative bg-cover bg-center rounded-2xl p-6 w-full text-white opacity-75"
                            style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749401619/mosque8_bmzerr.jpg)` }}
                        >
                            <div className="absolute -top-5 left-5 bg-primary p-3 rounded-t-full  text-white text-lg shadow-md">
                            <MdLuggage />
                            </div>
                            <h3 className="font-bold text-lg mt-5">Free Luggage</h3>
                            <p className="text-sm mt-2 font-roboto">
                            Experience More, Spend Less on Your Pilgrimage
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Section with motion */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-1"
                >
                    <img
                        src="https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749286872/mosque5_yyvfqv.jpg"
                        alt="Masjid Al-Haram"
                        className="w-full h-full object-cover "
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMuqaddas;