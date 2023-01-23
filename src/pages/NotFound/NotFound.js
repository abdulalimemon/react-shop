import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="flex items-center h-full p-10 md:p-16 accent">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl primary-text">404</h2>
                    <p className="text-2xl font-semibold md:text-3xl text">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 primary-text">But don't worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/' className="px-8 py-3 font-semibold rounded bg-[#36D399]">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;