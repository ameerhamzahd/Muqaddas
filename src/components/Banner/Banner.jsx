import React, { useState } from 'react';
import Modal from 'react-modal';
import bannerImage from "../../assets/mosque2.jpg";
import { FaRegNewspaper, FaArrowRight, FaPlay } from "react-icons/fa";
import { motion } from "motion/react"
import kaabaImage from "../../assets/kaaba.jpg"
import { Link } from 'react-router';

Modal.setAppElement('#root'); // required for screen readers

const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div className="relative w-full bg-secondary">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                ></div>

                <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 pt-30 pb-15 md:pb-0 max-w-5xl mx-auto px-3 lg:px-0">
                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-1/2 lg:w-1/3"
                    >
                        <div className="relative rounded-t-full overflow-hidden bg-[#E6D8CA] pl-4 pb-4 top-0 md:top-5 lg:top-10">
                            <img
                                src={kaabaImage}
                                alt="Kaaba"
                                className="rounded-t-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white w-full md:w-1/2 text-center md:text-start"
                    >
                        <div className="flex items-center gap-2 mb-2 text-lg font-semibold justify-center md:justify-start">
                            <span className="bg-[#E6D8CA] text-secondary p-2 rounded-full">
                                <FaRegNewspaper />
                            </span>
                            <span>Welcome To Muqaddas</span>
                        </div>

                        <h1 className="text-5xl font-bold leading-tight mb-4">
                            Experience Divine Journeys with Trusted Guidance and Care
                        </h1>

                        <p className="text-white/80 max-w-lg mb-6 text-sm md:text-base pl-5 border-l-2 font-roboto">
                            Crafted for your faith and comfort, our packages turn your pilgrimage into a profound experience.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link to="/all-packages">
                                <button className="btn btn-outline text-white border-white hover:bg-white hover:text-secondary rounded-full">
                                    <FaArrowRight className="mr-2" />
                                    Explore All Packages
                                </button>
                            </Link>

                            <button
                                onClick={openModal}
                                className="btn btn-outline text-white border-white hover:bg-white hover:text-secondary rounded-full flex items-center"
                            >
                                <FaPlay className="mr-2" />
                                Watch Video
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Modal for YouTube video */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="YouTube Video"
                className="relative flex items-center justify-center h-screen"
                overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50"
            >
                {/* Close button at modal level */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-6 text-white text-3xl z-50 hover:scale-110 cursor-pointer"
                >
                    &times;
                </button>

                {/* Video box */}
                <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dds2DPK3KJs"
                        title="Muqaddas Intro Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
        </div>
    );
};

export default Banner;
