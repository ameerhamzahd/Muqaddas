import React from 'react';
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const blogData = [
    {
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749276632/blog1_j1byiu.jpg",
        title: "A Sacred Journey Begins",
        date: "January 5, 2024",
        desc: "From the moment I stepped into the holy land, my heart felt a peace I’ve never known before.",
    },
    {
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749276635/blog2_wffr18.jpg",
        title: "Reflections in Makkah",
        date: "January 12, 2024",
        desc: "Makkah gave me clarity—spiritually and emotionally. I found answers I didn’t know I was seeking.",
    },
    {
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749276654/blog3_x9zqbq.jpg",
        title: "Umrah Simplified",
        date: "January 18, 2024",
        desc: "Every detail was taken care of with care and respect. I could truly focus on my Ibadah.",
    },
    {
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749276637/blog4_w3rnht.jpg",
        title: "The Call of the Kaaba",
        date: "January 24, 2024",
        desc: "Seeing the Kaaba brought tears to my eyes. A moment I’ll cherish for the rest of my life.",
    },
    {
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749276639/blog5_p8sy0y.jpg",
        title: "Moments That Matter",
        date: "January 30, 2024",
        desc: "From every dua to every step—I lived moments that touched my soul deeply.",
    },
    {
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749276641/blog6_dsilnl.jpg",
        title: "Pilgrim’s Peace",
        date: "February 4, 2024",
        desc: "There was a stillness in my heart I hadn’t felt in years. This journey brought me peace.",
    },
    {
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749276641/blog7_eflr8a.jpg",
        title: "The Light Within",
        date: "February 10, 2024",
        desc: "Umrah rekindled my faith and reminded me of the light I carry within.",
    },
    {
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749276641/blog8_ald7kc.jpg",
        title: "Stories from the Sacred",
        date: "February 15, 2024",
        desc: "Each pilgrim I met had a story that moved me. We walked alone, but healed together.",
    },
    {
        img: "https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749276641/blog9_nwqtf5.jpg",
        title: "Return with Purpose",
        date: "February 20, 2024",
        desc: "This journey didn’t end when I returned—it gave me a new beginning, full of purpose.",
    },
];

const BlogCard = ({ img, title, date, desc }) => (
    <div className="rounded-2xl overflow-hidden shadow-sm bg-white border border-gray-100 w-full h-full max-w-sm mx-auto">
        <img src={img} alt={title} className="w-full h-64 object-cover rounded-t-2xl" />
        <div className="p-6">
            <div className="flex items-center text-gray-400 text-sm mb-2">
                <FaRegCalendarAlt className="mr-2" />
                {date}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm mb-4 font-roboto">{desc}</p>
        </div>
    </div>
);

const ArticleANDBlog = () => {
    return (
        <div>
            <div className="py-15 bg-white max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <p className="text-brown-700 font-semibold text-sm uppercase tracking-widest mb-2">Our Blog</p>
                    <h2 className="text-4xl font-bold text-gray-800">Article & Blog</h2>
                </div>
                <Carousel
                    infinite
                    arrows
                    autoPlay
                    autoPlaySpeed={4000}
                    keyBoardControl
                    showDots={false}
                    itemClass="p-5"
                    containerClass="w-full"
                    customTransition="all 0.5s ease"
                    transitionDuration={500}
                    responsive={{
                        superLargeDesktop: {
                            breakpoint: { max: 4000, min: 1536 },
                            items: 3,
                        },
                        desktop: {
                            breakpoint: { max: 1536, min: 1024 },
                            items: 3,
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 640 },
                            items: 2,
                        },
                        mobile: {
                            breakpoint: { max: 640, min: 0 },
                            items: 1,
                        },
                    }}
                >
                    {blogData.map((item, index) => (
                        <BlogCard key={index} {...item} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ArticleANDBlog;