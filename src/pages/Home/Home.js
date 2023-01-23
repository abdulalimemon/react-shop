import React from 'react';
import HomeBanner from './HomeBanner';
import Trusted from './Trusted';

const Home = () => {
    return (
        <div className='accent'>
            <div className='container mx-auto'>
                <HomeBanner></HomeBanner>
                <Trusted></Trusted>
            </div>
        </div>
    );
};

export default Home;