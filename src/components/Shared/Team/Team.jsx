import React, { useState } from 'react';
import { RiTeamFill } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const teamMembers = [
    {
        name: "Khalid Al Mansoori",
        role: "Operations Manager",
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749309729/team3_glyu2r.jpg",
    },
    {
        name: "Amina Yousuf",
        role: "Technical Lead",
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749305235/team6_lyafys.jpg",
    },
    {
        name: "Omar Al Farsi",
        role: "Marketing Head",
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749305235/team1_iholp7.jpg",
    },
    {
        name: "Fatima Zahra",
        role: "Client Relations",
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749305235/team4_u1vfke.jpg",
    },
    {
        name: "Yousef Ali",
        role: "IT Support",
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749305235/team2_ierwoz.jpg",
    },
    {
        name: "Ayesha Siddique",
        role: "Content Strategist",
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749305235/team5_t9aknx.jpg",
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Team = () => {

    const [showOverlay, setShowOverlay] = useState(false);

    const handleToggle = () => {
        setShowOverlay((prev) => !prev);
    };

    return (
        <div>
            <div className="pb-15 text-center max-w-5xl mx-auto">
                <div className="mb-10">
                    <p className="text-secondary font-semibold text-md tracking-widest mb-2 flex justify-center items-center">
                        <RiTeamFill className='mr-2 text-white bg-secondary rounded-full p-1' size={25} />
                        Our Team
                    </p>
                    <h2 className="text-5xl font-bold text-secondary mt-2">Meet The Best Team</h2>
                    <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                        Behind every great journey is a dedicated team — passionate, professional, and committed to making your experience truly exceptional.
                    </p>
                </div>

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    showDots={false}
                    arrows={true}
                    containerClass="carousel-container"
                    itemClass="px-5"
                >
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative group rounded-t-full shadow-md flex flex-col items-center bg-[#E6D8CA] pb-2 cursor-pointer"
                            onClick={handleToggle}
                        >
                            <div className="relative rounded-t-full shadow-inner overflow-hidden w-2/3">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full object-cover border-l-6 border-b-6 border-primary"
                                />

                                {/* Hover Overlay */}
                                <div className={`absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-primary bg-opacity-90 transition-opacity duration-300 rounded-t-full ${showOverlay ? "opacity-90" : "opacity-0"} group-hover:opacity-90`}>
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-sm">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Team;