import React from 'react';
import AboutUsBanner from '../../components/AboutUsBanner/AboutUsBanner';
import AboutMuqaddas from '../../components/Shared/AboutMuqaddas/AboutMuqaddas';
import CountUpSection from '../../components/Shared/CountUpSection/CountUpSection';
import Team from '../../components/Shared/Team/Team';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Muqaddas | About Us</title>
            </Helmet>
            <div>
                <AboutUsBanner></AboutUsBanner>
            </div>

            <div>
                <AboutMuqaddas></AboutMuqaddas>
            </div>

            <div>
                <CountUpSection></CountUpSection>
            </div>

            <div className='pt-15'>
                <Team></Team>
            </div>
        </div>
    );
};

export default AboutUs;