import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutMuqaddas from '../../components/Shared/AboutMuqaddas/AboutMuqaddas';
import CountUp from '../../components/Shared/CountUp/CountUp';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <AboutMuqaddas></AboutMuqaddas>
            </div>

            <div>
                <CountUp></CountUp>
            </div>
        </div>
    );
};

export default Home;