import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { motion } from "motion/react";


const ManageMyPackages = () => {

    const { user } = use(AuthContext);

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://muqaddas-server.vercel.app/packages?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            }).then(response => setMyPackages(response.data))
        }
    }, [user?.email, user.accessToken])

    const [myPackages, setMyPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const handleEditClick = (pckg) => {
        setSelectedPackage(pckg);
        reset(pckg);
        setShowModal(true);
    };

    const handleUpdate = (data) => {
        const { _id, ...safeData } = data;

        axios.put(`https://muqaddas-server.vercel.app/package/${selectedPackage._id}`, safeData)
            .then(response => {
                if (response.data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                    });

                    axios.get(`https://muqaddas-server.vercel.app/packages?email=${user.email}`, {
                        headers: {
                            authorization: `Bearer ${user.accessToken}`
                        }
                    }).then(response => setMyPackages(response.data));

                    setShowModal(false);
                }
            })
            .catch(error => {
                console.error("Update failed:", error);
                toast.error("Update failed. Check console.");
            });
    };

    const handleDeletion = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://muqaddas-server.vercel.app/package/${_id}`)
                    .then(response => {
                        if (response.data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your package has been deleted.", "success");

                            const updatedPackages = myPackages.filter((pckg) => pckg._id !== _id);
                            setMyPackages(updatedPackages);
                        }
                    })
                    .catch(error => {
                        console.error("Deletion failed:", error);
                        toast.error("Deletion failed. Check console.");
                    });
            }
        });
    };

    return (
        <div className="relative flex justify-center items-center hero min-h-screen pt-30 pb-15"
            style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749475548/mosque10_bhd65v.jpg)` }}>
            <div className="absolute inset-0 bg-secondary opacity-75"></div>

            <div className="relative px-5 w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                >
                    <div className='max-w-5xl mx-auto p-5 bg-white rounded-2xl shadow-md lg:p-10'>
                        <div className="mb-6 text-center space-y-2">
                            <h1 className="text-3xl font-bold text-secondary">All My Packages</h1>
                            <p className="font-semibold text-gray-500 font-roboto">
                                Manage and track all your package posts
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
                                        <th>Price</th>
                                        <th>Duration</th>
                                        <th className='text-center'>Guide</th>
                                        <th>Bookings</th>
                                        <th>Departure Date</th>
                                        <th className='text-center'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myPackages.length === 0 ? (
                                        <tr>
                                            <td colSpan="10" className="py-8 text-center text-gray-500">
                                                No tours listed yet.
                                            </td>
                                        </tr>
                                    ) : (
                                        myPackages.map((pckg, index) => (
                                            <tr key={pckg._id}>
                                                <td className='font-roboto'>{index + 1}</td>
                                                <td className="flex flex-col text-center items-center gap-2">
                                                    <img src={pckg.image} alt={pckg.tour_name} className="w-10 h-10 rounded object-cover" />
                                                    <span className="font-semibold">{pckg.tour_name}</span>
                                                </td>
                                                <td className='font-roboto'>{pckg.destination}</td>
                                                <td className='font-roboto'>{pckg.departure_location}</td>
                                                <td className="font-semibold text-primary font-roboto">${pckg.price}</td>
                                                <td className='font-roboto'>{pckg.duration}</td>
                                                <td className="text-center">
                                                    <img src={pckg.guide_photo} className="w-6 h-6 rounded-full mx-auto mb-2" alt="" />
                                                    <span>{pckg.guide_name}</span>
                                                </td>
                                                <td className='font-roboto text-center'>{pckg.booking_count ? pckg.booking_count : 0}</td>
                                                <td className='font-roboto'>{pckg.departure_date}</td>
                                                <td className="space-y-2">
                                                    <button onClick={() => handleEditClick(pckg)} className="text-primary text-sm flex gap-1 items-center hover:underline cursor-pointer">
                                                        <MdEdit /> Update
                                                    </button>
                                                    <button onClick={() => handleDeletion(pckg._id)} className="text-red-600 text-sm flex gap-1 items-center hover:underline cursor-pointer">
                                                        <MdDelete /> Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Modal */}
                        {showModal && (
                            <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/40 overflow-y-auto px-5 md:px-0">
                                <div className="bg-white p-6 rounded-xl max-w-sm w-full relative max-h-[90vh] overflow-y-auto thin-scrollbar">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="absolute top-3 right-3 text-xl cursor-pointer hover:scale-110 hover:text-secondary"
                                    >
                                        ✕
                                    </button>
                                    <h3 className="text-xl font-semibold mb-4 text-center">Update Package</h3>

                                    <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
                                        {[
                                            { label: 'Tour Name', name: 'tour_name' },
                                            { label: 'Destination', name: 'destination' },
                                            { label: 'Departure Location', name: 'departure_location' },
                                            { label: 'Price', name: 'price', type: 'number' },
                                            { label: 'Duration', name: 'duration' },
                                            { label: 'Guide Name', name: 'guide_name' },
                                            { label: 'Guide Photo URL', name: 'guide_photo' },
                                            { label: 'Guide Email', name: 'guide_email' },
                                            { label: 'Package Details', name: 'package_details', isTextarea: true },
                                            { label: 'Departure Date', name: 'departure_date', type: 'date' },
                                            { label: 'Image URL', name: 'image' },
                                        ].map(field => (
                                            <div key={field.name}>
                                                <label className="label font-semibold mb-2">{field.label}</label>
                                                {field.isTextarea ? (
                                                    <textarea
                                                        {...register(field.name, { required: true })}
                                                        className="textarea textarea-bordered w-full font-roboto"
                                                        rows={4}
                                                    />
                                                ) : (
                                                    <input
                                                        type={field.type || 'text'}
                                                        {...register(field.name, { required: true })}
                                                        className="input input-bordered w-full font-roboto"
                                                    />
                                                )}
                                            </div>
                                        ))}

                                        <div className="flex justify-end pt-4">
                                            <button type="submit" className="btn btn-primary text-white">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ManageMyPackages;
