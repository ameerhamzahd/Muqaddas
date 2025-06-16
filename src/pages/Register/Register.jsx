import React, { use, useState } from 'react';
import { motion } from "motion/react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { toast, Bounce } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Register = () => {

    const { googleLogin, setUser, createUser, updateUser } = use(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);

    const handleGoogleLogin = () => {
        googleLogin()
            .then((userCredential) => {
                setUser(userCredential.user);

                toast.success(`Registration successful!`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                toast.error(`Registration failed: ${error.message}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    };

    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const passwordRegExp = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!passwordRegExp.test(password)) {
            toast.error(`Password must have one lowercase, one uppercase and at least 6 characters.`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...userCredential.user, displayName: name, photoURL: photoURL });

                        toast.success(`Registration successful!`, {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });

                        navigate(location.state ? location.state : "/");
                    })
                    .catch((error) => {
                        toast.error(`Update failed: ${error.message}`, {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                        setUser(userCredential.user);
                    });
            })
            .catch((error) => {
                toast.error(`Registration failed: ${error.message}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };

    return (
        <div className="relative flex justify-center items-center hero min-h-screen pt-30 pb-15" style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749400806/mosque7_yawrdm.jpg)` }}
        >
            <Helmet>
                <title>Muqaddas | Register</title>
            </Helmet>

            <div className="absolute inset-0 bg-secondary opacity-75"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-xl shadow-2xl w-full max-w-sm px-6 py-8 relative"
            >
                {/* Header */}
                <div className="flex justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-bold text-secondary mb-1">Create a new account</h2>
                        <p className="text-sm text-gray-500 font-roboto">
                            Enter your details below to register.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/login")}
                        className="text-sm font-semibold text-primary mt-7 cursor-pointer hover:underline duration-300 transition-all"
                    >
                        Login
                    </button>
                </div>

                <form onSubmit={handleRegister}>
                    {/* Name */}
                    <div className=" mb-5">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium">Name</label>
                        </div>
                        <input
                            name='name'
                            type="text"
                            className="input input-bordered w-full font-roboto"
                            placeholder='Enter your name'
                        />
                    </div>

                    {/* PhotoURL */}
                    <div className=" mb-5">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium">PhotoURL</label>
                        </div>
                        <input
                            name='photoURL'
                            type="text"
                            className="input input-bordered w-full font-roboto"
                            placeholder='Enter your phototURL'
                        />
                    </div>

                    {/* Email */}
                    <div className=" mb-5">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium">Email</label>
                        </div>
                        <input
                            name='email'
                            type="email"
                            className="input input-bordered w-full font-roboto"
                            placeholder='Enter your email'
                        />
                    </div>

                    {/* Password */}
                    <div className="relative mb-5">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium">Password</label>
                        </div>
                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            className="input input-bordered w-full font-roboto pr-12"
                            placeholder='Enter your password'
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-600 cursor-pointer z-10"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>


                    {/* Login Button */}
                    <button
                        className="form-control btn btn-block bg-secondary text-white hover:bg-secondary/90"
                    >
                        Register
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-3 text-sm text-gray-500">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                </form>

                {/* Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-block bg-white text-black border border-gray-300 hover:bg-gray-100"
                >
                    <FaGoogle className="mr-2" /> Login with Google
                </button>
            </motion.div>
        </div>
    );
};

export default Register;