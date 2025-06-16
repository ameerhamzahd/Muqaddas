import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from "motion/react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const AddTour = () => {

    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const isValid = await trigger();

        if (!isValid) {
            toast.error("Please fill out all required fields.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
            return;
        }

        axios.post("https://muqaddas-server.vercel.app/packages", data)
            .then(response => {
                if (response.data.insertedId) {
                    toast.success("Tour created successfully!", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    });

                    navigate(`${location.state ? location.state : "/manage-my-packages"}`);
                }
            })
            .catch(error => {
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                });
            })

        reset();
    };

    const { register, handleSubmit, reset, trigger } = useForm();

    return (
        <div className="relative flex justify-center items-center hero min-h-screen pt-30 pb-15" style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749464853/mosque9_qb5vaq.jpg)` }}>
            <Helmet>
                <title>Muqaddas | Add Package</title>
            </Helmet>
            
            <div className="absolute inset-0 bg-secondary opacity-75"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg px-6 py-8 relative mx-5 md:mx-0"
            >
                <h2 className="text-xl font-bold text-secondary mb-6 text-center">Add New Package</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Tour Name */}
                    <div className="mb-4">
                        <label className="label mb-2">Tour Name</label>
                        <input type="text" {...register('tour_name', { required: true })} className="input input-bordered w-full font-roboto" placeholder="Enter tour name" />
                    </div>

                    {/* Image */}
                    <div className="mb-4">
                        <label className="label mb-2">Image URL</label>
                        <input type="text" {...register('image', { required: true })} className="input input-bordered w-full font-roboto" placeholder="Enter image URL" />
                    </div>

                    {/* Duration */}
                    <div className="mb-4">
                        <label className="label mb-2">Duration</label>
                        <input type="text" {...register('duration', { required: true })} className="input input-bordered w-full font-roboto" placeholder="e.g. 7 days, 5 nights" />
                    </div>

                    {/* Departure Location */}
                    <div className="mb-4">
                        <label className="label mb-2">Departure Location</label>
                        <input type="text" {...register('departure_location', { required: true })} className="input input-bordered w-full font-roboto" />
                    </div>

                    {/* Destination */}
                    <div className="mb-4">
                        <label className="label mb-2">Destination</label>
                        <input type="text" {...register('destination', { required: true })} className="input input-bordered w-full font-roboto" />
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <label className="label mb-2">Price</label>
                        <input type="number" {...register('price', { required: true, min: 0 })} className="input input-bordered w-full font-roboto" />
                    </div>

                    {/* Departure Date */}
                    <div className="mb-4">
                        <label className="label mb-2">Departure Date</label>
                        <input type="date" {...register('departure_date', { required: true })} className="input input-bordered w-full font-roboto" />
                    </div>

                    {/* Package Details */}
                    <div className="mb-4">
                        <label className="label mb-2">Package Details</label>
                        <textarea {...register('package_details', { required: true })} className="textarea textarea-bordered w-full font-roboto" rows={4} />
                    </div>

                    {/* Guide Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="label mb-2">Guide Name</label>
                            <input type="text" {...register('guide_name', { required: true })} className="input input-bordered w-full font-roboto"
                            defaultValue={user?.displayName} />
                        </div>
                        <div>
                            <label className="label mb-2">Guide Email</label>
                            <input type="email" {...register('guide_email', { required: true })} className="input input-bordered w-full font-roboto" 
                            defaultValue={user?.email}/>
                        </div>
                        <div>
                            <label className="label mb-2">Guide Photo URL</label>
                            <input type="text" {...register('guide_photo', { required: true })} className="input input-bordered w-full font-roboto" 
                            defaultValue={user?.photoURL}/>
                        </div>
                        <div>
                            <label className="label mb-2">Guide Contact No.</label>
                            <input type="number" {...register('guide_contact_no', { required: true })} className="input input-bordered w-full font-roboto" />
                        </div>
                    </div>

                    {/* Created At (Hidden) */}
                    <input type="hidden" {...register('created_at')} value={new Date().toISOString()} />

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-block bg-secondary text-white hover:bg-secondary/90">Add Package</button>
                </form>
            </motion.div>
        </div>
    );
};

export default AddTour;
