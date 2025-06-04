import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import ScrollToTop from '../components/Shared/ScrollToTop/ScrollToTop';
import Navbar from '../components/Shared/Navbar/Navbar';
import Loader from '../components/Shared/Loader/Loader';
import Footer from '../components/Shared/Footer/Footer';

const MainLayout = () => {

    const { state } = useNavigation();

    return (
        <div>
            <ScrollToTop></ScrollToTop>

            <header>
                <Navbar></Navbar>
            </header>

            <main>
                {
                    state === "loading" ? <Loader></Loader> : <Outlet></Outlet>
                }
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;