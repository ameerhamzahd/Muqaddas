import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import { motion } from "motion/react";
import { toast, Bounce } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const MyBookings = () => {

    const { user } = use(AuthContext);

    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://muqaddas-server.vercel.app/bookings?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            }).then(response => setMyBookings(response.data))
        }
    }, [user?.email, user.accessToken])

    const handleStatus = (event, booking_id) => {
        axios.patch(`https://muqaddas-server.vercel.app/booking/${booking_id}`, {
            status: event.target.value
        })
            .then(response => {
                if(response.data.modifiedCount){
                    toast.success("Booking status updated successfully!", {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "light",
                        transition: Bounce,
                    });
                }
        })
    }

    return (
        <div className="relative flex justify-center items-center hero min-h-screen pt-30 pb-15"
            style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749745478/mosque13_dmqvf0.jpg)` }}>
            <Helmet>
                <title>Muqaddas | My Bookings</title>
            </Helmet>
            
            <div className="absolute inset-0 bg-secondary opacity-75"></div>

            <div className="relative px-5 w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                >
                    <div className='max-w-5xl mx-auto p-5 bg-white rounded-2xl shadow-md lg:p-10'>
                        <div className="mb-6 text-center space-y-2">
                            <h1 className="text-3xl font-bold text-secondary">All My Bookings</h1>
                            <p className="font-semibold text-gray-500 font-roboto">
                                Manage and track all your booking posts
                            </p>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto w-full">
                            <table className="table table-zebra w-full text-sm">
                                <thead className="bg-primary text-white text-xs">
                                    <tr>
                                        <th>#</th>
                                        <th className='text-center'>Tour</th>
                                        <th>Destination</th>
                                        <th>Departure</th>
                                        <th>Departure Date</th>
                                        <th className='text-center'>Guide Details</th>
                                        <th className='text-center'>Special Note</th>
                                        <th className='text-center'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myBookings.length === 0 ? (
                                        <tr>
                                            <td colSpan="8" className="py-8 text-center text-gray-500">
                                                No tours listed yet.
                                            </td>
                                        </tr>
                                    ) : (
                                        myBookings.map((booking, index) => (
                                            <tr key={booking._id}>
                                                <td className='font-roboto'>{index + 1}</td>
                                                <td className="flex flex-col text-center items-center gap-2">
                                                    <img src={booking.image} alt={booking.tour_name} className="w-10 h-10 rounded object-cover" />
                                                    <span className="font-semibold">{booking.tour_name}</span>
                                                </td>
                                                <td className='font-roboto'>{booking.destination}</td>
                                                <td className='font-roboto'>{booking.departure_location}</td>
                                                <td className='font-roboto'>{booking.departure_date}</td>
                                                <td className="text-center flex flex-col gap-2">
                                                    <span>{booking.guide_name}</span>
                                                    <span className='font-roboto'>+{booking.guide_contact_no}</span>
                                                </td>
                                                <td className='font-roboto italic'>"{booking.special_note}"</td>
                                                <td className="space-y-2">
                                                    <select onChange={event => handleStatus(event, booking._id)} defaultValue={booking.status} className="select select-primary">
                                                        <option disabled={true}>Update Status</option>
                                                        <option>Pending</option>
                                                        <option>Confirm</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MyBookings;