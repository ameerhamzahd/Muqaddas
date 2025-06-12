import React, { use, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { motion } from "motion/react";
import { GiDuration } from 'react-icons/gi';
import { GoPackage } from "react-icons/go";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { RiGuideLine } from "react-icons/ri";
import { TbBrandBooking } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import { toast, Bounce } from 'react-toastify';
import axios from 'axios';

const PackageDetails = () => {

    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const { register, handleSubmit } = useForm();

    const { id } = useParams();
    const data = useLoaderData();
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
        departure_location,
        departure_date,
        destination
    } = targetedPackage;

    const [bookingCount, setBookingCount] = useState(targetedPackage?.booking_count || 0);

    const handleBookNow = (data) => {
        const bookingData = {
            tour_id: _id,
            tour_name,
            price,
            buyer_name: user.displayName,
            buyer_email: user.email,
            booking_date: new Date().toISOString(),
            special_note: data.special_note,
            status: 'pending'
        };

        axios.post('http://localhost:3000/bookings', bookingData)
            .then(() => {
                axios.patch(`http://localhost:3000/package/${_id}`)
                    .then((response) => {
                        toast.success("Booking submitted successfully!", {
                            position: "top-right",
                            autoClose: 2000,
                            theme: "light",
                            transition: Bounce,
                        });

                        setBookingCount(response.data.booking_count);
                        setShowModal(false);

                        navigate(location.state ? location.state : "/my-bookings");
                    })
            })
            .catch(() => toast.error('Booking failed. Try again.'));
    };

    return (
        <div className="relative flex justify-center items-center hero min-h-screen pt-30 pb-15" style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749664056/mosque12_u6dkya.jpg)` }}>
            <div className="absolute inset-0 bg-secondary opacity-75"></div>

            <div className='relative mx-auto max-w-5xl'>
                <div className="mx-5 grid gap-10 p-5 bg-white rounded-2xl shadow-md lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center items-center">
                        <img src={image} alt={tour_name} className="object-cover w-full rounded-2xl" />
                    </motion.div>

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
                            <p className="text-gray-700 text-md font-roboto flex flex-col items-center md:items-start"><strong className='flex items-center gap-1'><TbBrandBooking /> Booking: </strong>{bookingCount}</p>
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
                            <button onClick={() => setShowModal(true)} className='btn btn-sm btn-primary w-full text-white'>
                                Book Now
                            </button>
                        </div>
                    </motion.div>
                </div>

                {showModal && (
                    <motion.div
                        className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/40 overflow-y-auto px-5 md:px-0">
                        <div className="bg-white p-6 rounded-xl max-w-sm w-full relative max-h-[90vh] overflow-y-auto thin-scrollbar">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-3 right-3 text-xl cursor-pointer hover:scale-110 hover:text-secondary"
                            >✕</button>

                            <h3 className="text-xl font-semibold mb-4 text-center">Book This Package</h3>

                            <form onSubmit={handleSubmit(handleBookNow)} className="space-y-4">
                                <div>
                                    <label className="label font-medium mb-2">Tour Name</label>
                                    <input type="text" className="input input-bordered w-full font-roboto" value={tour_name} readOnly />
                                </div>
                                <div>
                                    <label className="label font-medium mb-2">Price</label>
                                    <input type="text" className="input input-bordered w-full font-roboto" value={`$${price}`} readOnly />
                                </div>
                                <div>
                                    <label className="label font-medium mb-2">Your Name</label>
                                    <input type="text" className="input input-bordered w-full font-roboto" value={user?.displayName} readOnly />
                                </div>
                                <div>
                                    <label className="label font-medium mb-2">Your Email</label>
                                    <input type="email" className="input input-bordered w-full font-roboto" value={user?.email} readOnly />
                                </div>
                                <div>
                                    <label className="label font-medium mb-2">Booking Date</label>
                                    <input type="text" className="input input-bordered w-full font-roboto" value={new Date().toLocaleDateString()} readOnly />
                                </div>
                                <div>
                                    <label className="label font-medium mb-2">Special Note (optional)</label>
                                    <textarea
                                        {...register("special_note")}
                                        className="textarea textarea-bordered w-full font-roboto"
                                    ></textarea>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button type="submit" className="btn btn-primary text-white">Book Now</button>
                                </div>
                            </form>

                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default PackageDetails;
