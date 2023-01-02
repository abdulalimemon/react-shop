import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="navbar bg-base-300">
                        <div className='container mx-auto'>
                            <div className="flex-1 px-2 mx-2 lg:pl-0 lg:ml-0">
                                <Link to='/'>React Shop</Link>
                            </div>
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal">
                                    <li><NavLink className='rounded-lg mr-2' to='/home'>Home</NavLink></li>
                                    <li><NavLink className='rounded-lg mr-2' to='/about'>About</NavLink></li>
                                    <li><NavLink className='rounded-lg mr-2' to='/contact'>Contact</NavLink></li>
                                    <li><NavLink className='rounded-lg' to='/login'>Login</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-10/12 md:w-8/12 bg-base-100">
                        <li><NavLink className='rounded-lg my-1' to='/home'>Home</NavLink></li>
                        <li><NavLink className='rounded-lg my-1' to='/about'>About</NavLink></li>
                        <li><NavLink className='rounded-lg my-1' to='/contact'>Contact</NavLink></li>
                        <li><NavLink className='rounded-lg my-1' to='/login'>Login</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;