import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { motion } from "motion/react";
import { GiDuration } from 'react-icons/gi';
import { GoPackage } from "react-icons/go";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { RiGuideLine } from "react-icons/ri";
import { TbBrandBooking } from 'react-icons/tb';

const PackageDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    // const { user } = use(AuthContext);
    const targetedPackage = data.find(pckg => pckg._id === id);
    const {
        _id,
        tour_name,
        image,
        guide_name,
        guide_photo,
        guide_contact_no,
        duration,
        price,
        package_details,
        booking_count,
        departure_location,
        departure_date,
        destination
    } = targetedPackage;

    return (
        <div className="relative flex justify-center items-center hero min-h-screen pt-30 pb-15" style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749464853/mosque9_qb5vaq.jpg)` }}>
            <div className="absolute inset-0 bg-secondary opacity-75"></div>

            <div>
                <div className='relative mx-auto max-w-5xl'>
                    <div className="mx-5 grid gap-10 p-5 bg-white rounded-2xl shadow-md lg:grid-cols-2">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center items-center">
                            <img src={image} alt={tour_name} className="object-cover w-full rounded-2xl" />
                        </motion.div>

                        {/* Details */}
                        <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col gap-4 justify-center">
                            <div className='pb-3 border-b-2 border-gray-400 border-dashed flex justify-between items-center'>
                                <h2 className=" text-2xl font-bold text-gray-800 ">{tour_name}</h2>
                                <p className="text-gray-700 text-md"><span className="font-semibold text-primary font-roboto">${price}</span></p>
                            </div>

                            <div className='pb-3 text-center border-b-2 border-gray-400 border-dashed md:text-left'>
                                <p className='flex flex-col text-md font-roboto'><strong className='flex items-center gap-1'><GoPackage /> Package Details:</strong> {package_details}</p>
                            </div>

                            <div className='gap-4 justify-center pb-3 text-center border-b-2 border-gray-400 border-dashed md:text-left grid md:grid-cols-2'>
                                <p className="text-gray-700 text-md font-roboto flex flex-col items-center md:items-start"><strong className='flex items-center gap-1'><LiaPlaneDepartureSolid /> Departure Location:</strong>{departure_location}</p>
                                <p className="text-gray-700 text-md font-roboto flex flex-col items-center md:items-start"><strong className='flex items-center gap-1'><FiMapPin /> Destination:</strong>{destination}</p>
                                <p className="text-gray-700 text-md font-roboto flex flex-col items-center md:items-start"><strong className='flex items-center gap-1'><GiDuration /> Duration:</strong>{duration}</p>
                                <p className="text-gray-700 text-md font-roboto flex flex-col items-center md:items-start"><strong className='flex items-center gap-1'><MdOutlineDateRange /> Departure Date: </strong>{departure_date}</p>
                                <p className="text-gray-700 text-md font-roboto flex flex-col items-center md:items-start"><strong className='flex items-center gap-1'><TbBrandBooking /> Booking: </strong>{booking_count}</p>
                            </div>

                            <div className='flex flex-col gap-2 items-center md:items-start'>
                                <p className="text-gray-700 text-md font-roboto"><strong className='flex items-center gap-1'><RiGuideLine />Guide Details:</strong></p>

                                <div className='flex justify-center items-center gap-2 md:justify-start'>
                                    <img src={guide_photo} alt={guide_name} className="w-10 h-10 rounded-full object-cover" />
                                    <div className='flex flex-col gap-1'>
                                        <span className="font-medium text-sm text-gray-600">{guide_name}</span>
                                        <span className="font-medium text-sm text-gray-600 font-roboto">+{guide_contact_no}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button className='btn btn-sm btn-primary w-full text-white'>
                                    Book Now
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;