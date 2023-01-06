import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';





const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <section className="py-10 accent2 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <h2 className="text-2xl font-semibold primary-text">React Shop</h2>
                        <p className="text-base leading-relaxed primary-text mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                        <ul className="flex items-center space-x-5 mt-9">
                            <li>
                                <Link className='primary-text hover:text-[#0098FA] hover:dark:text-[#36D399]'>
                                    <BsFacebook className='w-7 h-7'></BsFacebook>
                                </Link>
                            </li>
                            <li>
                                <Link className='primary-text hover:text-[#0098FA] hover:dark:text-[#36D399]'>
                                    <BsInstagram className='w-7 h-7'></BsInstagram>
                                </Link>
                            </li>
                            <li>
                                <Link className='primary-text hover:text-[#0098FA] hover:dark:text-[#36D399]'>
                                    <BsTwitter className='w-7 h-7'></BsTwitter>
                                </Link>
                            </li>
                            <li>
                                <Link className='primary-text hover:text-[#0098FA] hover:dark:text-[#36D399]'>
                                    <BsYoutube className='w-7 h-7'></BsYoutube>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-bold tracking-widest primary-text uppercase">Company</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link to="/about" className="flex text-base primary-text transition-all duration-200 font-medium hover:text-[#0098FA] hover:dark:text-[#36D399]"> About </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="flex text-base primary-text transition-all duration-200 font-medium hover:text-[#0098FA] hover:dark:text-[#36D399]"> Contact </Link>
                            </li>
                            <li>
                                <Link to="/" className="flex text-base primary-text transition-all duration-200 font-medium hover:text-[#0098FA] hover:dark:text-[#36D399]"> Career </Link>
                            </li>
                            <li>
                                <Link to="/" className="flex text-base primary-text transition-all duration-200 font-medium hover:text-[#0098FA] hover:dark:text-[#36D399]"> Works </Link>
                            </li>
                            <li>
                                <Link to="/" className="flex text-base primary-text transition-all duration-200 font-medium hover:text-[#0098FA] hover:dark:text-[#36D399]"> Features </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-bold tracking-widest primary-text uppercase">Help</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link to="/" className="flex text-base primary-text transition-all duration-200 font-medium hover:text-[#0098FA] hover:dark:text-[#36D399]"> Customer Support </Link>
                            </li>
                            <li>
                                <Link to="/" className="flex text-base primary-text transition-all duration-200 font-medium hover:text-[#0098FA] hover:dark:text-[#36D399]"> Delivery Details </Link>
                            </li>
                            <li>
                                <Link to="/" className="flex text-base primary-text transition-all duration-200 font-medium hover:text-[#0098FA] hover:dark:text-[#36D399]"> Terms & Conditions </Link>
                            </li>
                            <li>
                                <Link to="/" className="flex text-base primary-text transition-all duration-200 font-medium hover:text-[#0098FA] hover:dark:text-[#36D399]"> Privacy Policy </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-bold tracking-widest primary-text uppercase">Subscribe to newsletter</p>

                        <form className="mx-auto mt-8 accent2 lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                            <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-[#36D399] sm:focus-within:ring-1 sm:focus-within:ring-[#36D399]">
                                <div className="flex flex-col items-start sm:flex-row">
                                    <div className="flex-1 w-full min-w-0">
                                        <div className="relative primary-text">
                                            <label for="email" className='border-none'></label>
                                            <input type="email" name="email" id="email" placeholder="Enter email"
                                                className="md:focus:outline-0 border-0 block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 focus:outline-[#36D399] rounded-full sm:text-left focus:border-#36D399 focus:ring-0"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className=" inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 success border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-600" />

                <p className="text-md text-center text font-semibold mb-12 lg:mb-0">© Copyright {year}, All Rights Reserved by Postcraft</p>
            </div>
        </section>
    );
};

export default Footer;