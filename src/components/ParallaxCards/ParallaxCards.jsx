import React from 'react';
import { motion } from 'framer-motion';
import { FaPlaneDeparture, FaHotel, FaStar, FaArrowRight } from 'react-icons/fa';
import { BiSolidPlaneAlt } from "react-icons/bi";
import { GiDuration } from 'react-icons/gi';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router';



const ParallaxCards = ({ packages }) => {

    return (
        <div
            className="relative min-h-screen bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url('https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749843057/mosque14_d1fd5f.jpg')` }}
        >
            <div className="absolute inset-0 bg-secondary opacity-85"></div>

            <div className="relative z-10 px-4 py-15 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#E6D8CA] rounded-3xl shadow-xl p-10 text-center"
                >
                    <h3 className="text-sm text-secondary font-semibold flex justify-center items-center gap-2 mb-3"> <span className='bg-secondary p-1 rounded-full'><BiSolidPlaneAlt className='text-white' /></span>Special Offers</h3>
                    <h2 className="text-5xl font-bold text-secondary mb-3">
                    Answer the Divine Call with Ease
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-10 font-roboto">
                    Meticulously Crafted Pilgrimage Experiences Await.
                    </p>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {packages.map((pckg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * index }}
                                viewport={{ once: true }}
                                className="bg-white rounded-t-full shadow-md overflow-hidden flex flex-col items-center border-l-6 border-b-6 border-primary group"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={pckg.image}
                                        alt={pckg.tour_name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="py-5 w-11/12 mx-auto">
                                    <div className='flex justify-between items-center pb-3'>
                                        <h2 className="text-lg font-bold text-secondary">{pckg.tour_name}</h2>
                                        <span className='text-xl font-bold text-primary font-roboto'>${pckg.price}</span>
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
                            </motion.div>
                        ))}
                    </div>

                    <div className='flex justify-center pt-5'>
                            <Link to="/all-packages">
                                <button className="btn btn-secondary w-full text-white ">
                                <FaArrowRight className="mr-2" /> View All
                                </button>
                            </Link>
                        </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ParallaxCards;