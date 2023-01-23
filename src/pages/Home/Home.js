import React from 'react';
import FeatureProducts from './FeatureProducts';
import HomeBanner from './HomeBanner';
import Trusted from './Trusted';

const Home = () => {
    return (
        <div className='accent'>
            <div className='container mx-auto'>
                <HomeBanner></HomeBanner>
                <FeatureProducts></FeatureProducts>
                <Trusted></Trusted>
            </div>
        </div>
    );
};

export default Home;