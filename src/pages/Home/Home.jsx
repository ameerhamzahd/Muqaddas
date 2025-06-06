import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutMuqaddas from '../../components/Shared/AboutMuqaddas/AboutMuqaddas';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <AboutMuqaddas></AboutMuqaddas>
            </div>
        </div>
    );
};

export default Home;