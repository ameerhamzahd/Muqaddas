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
import PrivateRoute from '../routes/PrivateRoute/PrivateRoute';

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: MainLayout,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          index: true,
          Component: Home,
          // loader: () => fetch("https://muqaddas-server.vercel.app/packages"),
          hydrateFallbackElement: Loader
        },
        {
          path: "/all-packages",
          Component: AllPackages,
          loader: () => fetch("https://muqaddas-server.vercel.app/packages"),
          hydrateFallbackElement: Loader
        },
        {
          path: "/my-bookings",
          element:
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://muqaddas-server.vercel.app/bookings?email=${params.email}`),
          hydrateFallbackElement: Loader
        },
        {
          path: "/about-us",
          Component: AboutUs,
          // loader: () => fetch("https://muqaddas-server.vercel.app/packages"),
          hydrateFallbackElement: Loader
        },
        {
          path: "/add-package",
          element: 
          <PrivateRoute>
            <AddPackage></AddPackage>
          </PrivateRoute>
        },
        {
          path: "/manage-my-packages",
          element:
          <PrivateRoute>
            <ManageMyPackages></ManageMyPackages>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://muqaddas-server.vercel.app/packages?email=${params.email}`),
          hydrateFallbackElement: Loader
        },
        {
          path: "/package/:id",
          element:
          <PrivateRoute>
            <PackageDetails></PackageDetails>
          </PrivateRoute>,
          loader: () => fetch("https://muqaddas-server.vercel.app/packages"),
          hydrateFallbackElement: Loader
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