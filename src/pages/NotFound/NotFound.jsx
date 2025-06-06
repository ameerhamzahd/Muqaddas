import React from 'react';
import error from "../../assets/404.png";
import notFoundBG from "../../assets/mosque1.jpg"
import { FaHome } from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router";
import { GiCamel } from "react-icons/gi";

const NotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${notFoundBG})` }}>

                <div className="absolute inset-0 bg-secondary opacity-60"></div>

                <div className="relative z-10 text-white flex flex-col md:flex-row items-center justify-center gap-8 px-4">
                    {/* 404 Star Icon Style */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-1/2 md:max-w-1/3 flex items-center justify-center text-6xl md:text-8xl font-bold">
                        <div>
                            <img src={error} alt="error" />
                        </div>
                    </motion.div>

                    {/* Right Text Block */}
                    <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left max-w-md">
                        <div>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-lg font-semibold mb-2">
                                <span className="bg-[#C6AD8E] text-white p-2 rounded-full">
                                    <GiCamel />
                                </span>
                                <span className="text-white font-bold">Muqaddas</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found !!!</h1>
                            <p className="text-sm md:text-base text-white/90 mb-6 font-roboto">
                                The page you’re looking for doesn’t exist or has been moved. Please check the URL or go back home.
                            </p>
                            <Link to="/">
                                <button className="btn btn-outline text-white border-white hover:bg-white hover:text-[#5F503E] rounded-full">
                                    <FaHome className="mr-2" />
                                    Back Home
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;