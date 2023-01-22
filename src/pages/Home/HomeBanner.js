import React from 'react';
import { Link } from 'react-router-dom';


const HomeBanner = () => {
    return (
        <>
            <section className="py-10 sm:py-16 lg:py-24 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-4xl font-bold primary-text sm:text-6xl lg:text-7xl">
                                Collaborate remotely, with
                                <div className="relative inline-flex">
                                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80] dark:border-[#666666]"></span>
                                    <h1 className="relative text-4xl font-bold primary-text sm:text-6xl lg:text-7xl">Postcrafts.</h1>
                                </div>
                            </h1>

                            <p className="mt-8 text-base primary-text sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <Link to="/" className="btn border-0 focus:bg-[#36D399] hover:bg-[#36D399] px-10 text-md font-semibold text capitalize bg-[#36D399] "> Start exploring </Link>

                                
                            </div>
                        </div>

                        <div>
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeBanner;