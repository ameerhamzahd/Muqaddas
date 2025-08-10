import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { TbPackages } from "react-icons/tb";
import { motion } from "motion/react";
import axios from 'axios';
import { GiDuration } from 'react-icons/gi';
import { MdOutlineDateRange } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';

const AllPackages = () => {
    const initialPackages = useLoaderData();

    const [myPackages, setMyPackages] = useState(
        Array.isArray(initialPackages) ? initialPackages : []
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [sortPackage, setSortPackage] = useState(null);

    // Debounced search
    useEffect(() => {
        const delayDebounce = setTimeout(async () => {
            const { data } = await axios.get(
                `https://muqaddas-server.vercel.app/packages${searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : ''}`
            );
            setMyPackages(Array.isArray(data) ? data : []);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    // Derived sorted packages for display
    const displayPackages = [...myPackages].sort((a, b) => {
        if (sortPackage === 'Ascending') {
            return a.price - b.price;
        } else if (sortPackage === 'Descending') {
            return b.price - a.price;
        }
        return 0; // No sorting
    });

    return (
        <div>
            <Helmet>
                <title>Muqaddas | All Packages</title>
            </Helmet>

            {/* Hero Section */}
            <div className="relative hero min-h-screen pt-15 md:pt-0"
                style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749619957/mosque11_ndiw5y.jpg)` }}>
                <div className="absolute inset-0 bg-secondary opacity-85"></div>
                <motion.div
                    className="relative text-center max-w-3xl px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-primary rounded-full p-2 mr-2 text-white">
                            <TbPackages size={20} />
                        </div>
                        <p className="text-lg font-semibold text-[#E6D8CA]">Muqaddas Packages</p>
                    </div>
                    <h1 className="text-5xl font-bold leading-tight mb-4 text-[#E6D8CA]">
                        Your Curated Routes to the House of Allah
                    </h1>
                    <p className="text-base sm:text-lg text-[#E6D8CA] leading-relaxed">
                        Your Pilgrimage Packages, Perfectly Arranged for a Seamless and Spiritually Fulfilling Journey.
                    </p>
                </motion.div>
            </div>

            {/* Filter, Search, Sort */}
            <div className='max-w-5xl mx-auto py-15'>
                <div className="space-y-4 text-center px-5 md:px-0">
                    <h1 className="text-5xl font-bold text-secondary md:text-5xl">Sacred Steps Awaits</h1>
                    <p className="mx-auto max-w-2xl text-xl text-primary">
                        Begin your spiritual journey with comfort, care, and complete guidance.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder="Search for a package..."
                            className="input input-bordered w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-secondary font-roboto"
                        />
                    </div>
                    <div className="flex gap-2 justify-center items-center mt-4 text-sm text-primary">
                        <span className='font-roboto'>{myPackages.length} packages available</span>
                        <span className='font-roboto'>•</span>
                        <span className='font-roboto'>Updated daily</span>
                    </div>
                    <div>
                        <select
                            className="select select-primary text-secondary"
                            onChange={(event) => setSortPackage(event.target.value)}
                            defaultValue=""
                        >
                            <option disabled value="">Sort by price</option>
                            <option value="Ascending">Low to high</option>
                            <option value="Descending">High to low</option>
                        </select>
                    </div>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-0 pt-15">
                    {displayPackages.length > 0 ? (
                        displayPackages.map((pckg) => (
                            <div key={pckg._id} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl group flex flex-col justify-between">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={pckg.image}
                                        alt={pckg.tour_name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className='flex justify-between items-center pb-3'>
                                        <h2 className="text-xl font-bold text-secondary">{pckg.tour_name}</h2>
                                        <span className='text-lg font-bold text-primary font-roboto'>${pckg.price}</span>
                                    </div>
                                    <div className="flex items-center gap-3 border-t-2 border-b-2 border-[#E6D8CA] border-dashed py-3">
                                        <img src={pckg.guide_photo} alt={pckg.guide_name} className="w-10 h-10 rounded-full object-cover" />
                                        <span className="font-medium text-sm text-gray-600">{pckg.guide_name}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-gray-600 pt-3">
                                        <span className='font-roboto flex items-center gap-1'><GiDuration /> {pckg.duration}</span>
                                        <span className='font-roboto flex items-center gap-1'><MdOutlineDateRange /> {pckg.departure_date}</span>
                                    </div>
                                    <Link to={`/package/${pckg._id}`}>
                                        <button className="btn btn-sm btn-primary w-full text-white mt-3">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-primary text-lg py-10">
                            {searchTerm ? "No packages found matching your search." : "No packages available at the moment."}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllPackages;
