import React, { use, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const PackageListing = ({ ManageMyPackagesPromise }) => {

    const packages = use(ManageMyPackagesPromise);

    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [allPackages, setAllPackages] = useState(packages);

    const handleEditClick = (pkg) => {
        setSelectedPackage(pkg);
        setShowModal(true);
        reset(pkg); // prefill form
    };

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

        const res = await fetch(`http://localhost:3000/packages/${selectedPackage._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            const updated = await res.json();
            const updatedList = allPackages.map(p =>
                p._id === selectedPackage._id ? updated : p
            );
            setAllPackages(updatedList);
            setShowModal(false);
            setSelectedPackage(null);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if (!confirmDelete) return;

        const res = await fetch(`http://localhost:3000/packages/${id}`, { method: "DELETE" });
        if (res.ok) {
            setAllPackages(allPackages.filter(p => p._id !== id));
        }
    };

    const {
        register,
        handleSubmit,
        reset,
        trigger
    } = useForm();

    return (
        <div className="relative flex justify-center items-center hero min-h-screen pt-30 pb-15"
            style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749475548/mosque10_bhd65v.jpg)` }}>
            <div className="absolute inset-0 bg-secondary opacity-75"></div>

            <div className="absolute px-5 w-full">
                <div className='max-w-5xl mx-auto p-5 bg-white rounded-2xl shadow-md lg:p-10'>
                    <div className="mb-6 text-center space-y-2">
                        <h1 className="text-3xl font-bold text-secondary">All My Packages</h1>
                        <p className="font-semibold text-gray-500 font-roboto">
                            Manage and track all your package posts
                        </p>
                    </div>

                    {/* Responsive Table */}
                    <div className="overflow-x-auto w-full">
                        <table className="table table-zebra w-full text-sm">
                            <thead className="bg-primary text-white text-xs">
                                <tr>
                                    <th>#</th>
                                    <th>Tour</th>
                                    <th>Destination</th>
                                    <th>Departure</th>
                                    <th>Price</th>
                                    <th>Duration</th>
                                    <th className='text-center'>Guide</th>
                                    <th>Bookings</th>
                                    <th>Departure Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packages.length === 0 ? (
                                    <tr>
                                        <td colSpan="10" className="py-8 text-center text-gray-500">
                                            No tours listed yet.
                                        </td>
                                    </tr>
                                ) : (
                                    packages.map((pckg, index) => (
                                        <tr key={pckg._id}>
                                            <td className='font-roboto'>{index + 1}</td>
                                            <td className="flex flex-col text-center items-center justify-center gap-2">
                                                <img
                                                    src={pckg.image}
                                                    alt={pckg.tour_name}
                                                    className="w-10 h-10 rounded object-cover"
                                                />
                                                <span className="font-semibold font-roboto">{pckg.tour_name}</span>
                                            </td>
                                            <td className='font-roboto'>{pckg.destination}</td>
                                            <td className='font-roboto'>{pckg.departure_location}</td>
                                            <td className="font-semibold text-primary font-roboto">${pckg.price}</td>
                                            <td className='font-roboto'>{pckg.duration}</td>
                                            <td>
                                                <div className="flex flex-col justify-center text-center items-center gap-2">
                                                    <img src={pckg.guide_photo} className="w-6 h-6 rounded-full" alt="" />
                                                    <span className='font-roboto'>{pckg.guide_name}</span>
                                                </div>
                                            </td>
                                            <td className='font-roboto'>{pckg.bookingCount}</td>
                                            <td className='font-roboto'>{pckg.departure_date}</td>
                                            <td className="space-y-2">
                                                <button
                                                    onClick={() => handleEditClick(pckg)}
                                                    className="flex items-center gap-1 text-primary text-sm hover:underline cursor-pointer duration-300 transition-all"
                                                >
                                                    <MdEdit /> Update
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(pckg._id)}
                                                    className="flex items-center gap-1 text-red-600 text-sm hover:underline cursor-pointer duration-300 transition-all"
                                                >
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
                                <button onClick={() => setShowModal(false)} className="absolute top-5 right-5 text-xl cursor-pointer hover:scale-105 hover:text-secondary">✕</button>
                                <h3 className="text-xl font-semibold mb-4 text-center">Update Package</h3>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    {[
                                        { label: 'Tour Name', name: 'tour_name' },
                                        { label: 'Destination', name: 'destination' },
                                        { label: 'Departure Location', name: 'departure_location' },
                                        { label: 'Price', name: 'price', type: 'number' },
                                        { label: 'Duration', name: 'duration' },
                                        { label: 'Guide Name', name: 'guide_name' },
                                        { label: 'Guide Photo URL', name: 'guide_photo' },
                                        { label: 'Departure Date', name: 'departure_date', type: 'date' },
                                        { label: 'Image URL', name: 'image' },
                                    ].map(field => (
                                        <div key={field.name}>
                                            <label className="label font-semibold mb-2">{field.label}</label>
                                            <input
                                                type={field.type || 'text'}
                                                {...register(field.name, { required: true })}
                                                className="input input-bordered w-full font-roboto mb-2"
                                            />
                                        </div>
                                    ))}

                                    <div className="flex justify-end pt-4">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PackageListing;