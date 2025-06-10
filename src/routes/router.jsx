import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../pages/NotFound/NotFound';
import Home from "../pages/Home/Home";
import AllPackages from '../pages/AllPackages/AllPackages';
import MyBookings from '../pages/MyBookings/MyBookings';
import AboutUs from '../pages/AboutUs/AboutUs';
import AddPackage from '../pages/AddPackage/AddPackage';
import ManageMyPackages from '../pages/ManageMyPackages/ManageMyPackages';
import PackageDetails from '../pages/PackageDetails/PackageDetails';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Loader from '../components/Shared/Loader/Loader';

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: MainLayout,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: "/all-packages",
          Component: AllPackages
        },
        {
          path: "/my-bookings",
          Component: MyBookings
        },
        {
          path: "/about-us",
          Component: AboutUs
        },
        {
          path: "/add-package",
          Component: AddPackage
        },
        {
          path: "/manage-my-packages",
          Component: ManageMyPackages,
          loader: () => fetch("http://localhost:3000/packages?email=:email"),
          hydrateFallbackElement: Loader
        },
        {
          path: "/package-details",
          Component: PackageDetails
        },
        {
          path: "/privacy-policy",
          Component: PrivacyPolicy
        },
        {
          path: "/login",
          Component: Login
        },
        {
          path: "/register",
          Component: Register
        },
      ]
    },
  ]
);

export default router;