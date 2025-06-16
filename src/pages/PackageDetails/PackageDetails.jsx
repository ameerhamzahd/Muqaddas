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
            status: 'Pending'
        };

        axios.post('https://muqaddas-server.vercel.app/bookings', bookingData)
            .then(() => {
                axios.patch(`https://muqaddas-server.vercel.app/package/${_id}`)
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
        <div className="relative flex justify-center items-center hero min-h-screen pt-30 pb-15" style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749745661/mosque12_nzowfl.jpg)` }}>
            <div className="absolute inset-0 bg-secondary opacity-75"></div>

            <div className='relative mx-auto max-w-5xl grid lg:grid-cols-5 gap-5'>
                <motion.div 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-5 lg:mx-0 grid gap-10 p-5 bg-white rounded-2xl shadow-md lg:col-span-3">
                    <div
                        
                        className="flex justify-center items-center">
                        <img src={image} alt={tour_name} className="object-cover w-full rounded-2xl" />
                    </div>

                    <div
                        
                        className="flex flex-col gap-4 justify-center">
                        <div className='pb-3 border-b-2 border-gray-400 border-dashed flex justify-between items-center'>
                            <h2 className=" text-2xl font-bold text-gray-800 ">{tour_name}</h2>
                            <p className="text-gray-700 text-md"><span className="font-semibold text-primary font-roboto">${price}</span></p>
                        </div>

                        <div className='pb-3 text-center border-b-2 border-gray-400 border-dashed md:text-left'>
                            <p className='flex flex-col text-md font-roboto'><strong className='flex items-center justify-center md:justify-start gap-1'><GoPackage /> Package Details:</strong> {package_details}</p>
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
                    </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }} 
                className='lg:col-span-2 mx-5 lg:mx-0'>
                    <div className='bg-white rounded-2xl shadow-md p-5 grid gap-5 md:grid-cols-2 lg:grid-cols-none'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237684.5851863394!2d39.68173388279316!3d21.43625436959531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1750093479752!5m2!1sen!2sbd"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Makkah Map"
                            className="rounded-lg shadow-lg"
                        ></iframe>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232410.1505620134!2d39.452745144493726!3d24.471295543841833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe5197d220d5%3A0x2e54514fea3b08d9!2sMadinah%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1750095461589!5m2!1sen!2sbd"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Madinah Map"
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </motion.div>

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
