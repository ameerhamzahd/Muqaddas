import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutMuqaddas from '../../components/Shared/AboutMuqaddas/AboutMuqaddas';
import CountUp from '../../components/Shared/CountUpSection/CountUpSection';
import ArticleANDBlog from '../../components/ArticleANDBlog/ArticleANDBlog';
import Team from '../../components/Shared/Team/Team';
import ParallaxCards from '../../components/ParallaxCards/ParallaxCards';
import { useLoaderData } from 'react-router';

const Home = () => {

    const packages = useLoaderData();

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

            <div>
                <ParallaxCards packages={packages}></ParallaxCards>
            </div>

            <div>
                <ArticleANDBlog></ArticleANDBlog>
            </div>
        </div>
    );
};

export default Home;