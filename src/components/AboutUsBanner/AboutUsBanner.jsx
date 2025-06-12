import React from 'react';
import { GiCamel } from "react-icons/gi";
import { motion } from "framer-motion";

const AboutUsBanner = () => {
    return (
        <div>
            <div className="relative hero min-h-screen" style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749310365/mosque4_cbpa7u.jpg)` }}>
                <div className="absolute inset-0 bg-secondary opacity-85"></div>

                <motion.div
                    className="relative text-center max-w-3xl px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-primary rounded-full p-2 mr-2 text-white">
                            <GiCamel size={20} />
                        </div>
                        <p className="text-lg font-semibold text-[#E6D8CA]">
                            About Muqaddas
                        </p>
                    </div>

                    <h1 className="text-5xl font-bold leading-tight mb-4 text-[#E6D8CA]">
                    Start the Journey of a Lifetime
                    </h1>

                    <p className="text-base sm:text-lg text-[#E6D8CA] leading-relaxed">
                    Begin a journey that’s not just about distance, but about transformation — one that brings your heart closer to what truly matters.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUsBanner;