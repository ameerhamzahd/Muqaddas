import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutMuqaddas from '../../components/Shared/AboutMuqaddas/AboutMuqaddas';
import CountUp from '../../components/Shared/CountUp/CountUp';
import ArticleANDBlog from '../../components/ArticleANDBlog/ArticleANDBlog';
import Team from '../../components/Shared/Team/Team';

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

            <div>
                <ArticleANDBlog></ArticleANDBlog>
            </div>

            <div>
                <Team></Team>
            </div>
        </div>
    );
};

export default Home;