import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className='container mx-auto'>
                    <div className="navbar justify-between">
                        <a className="btn btn-ghost normal-case text-xl">React Shop</a>

                        {/* Mobile And Tab Screen NavBar */}
                        <div>
                            <MobileMenu></MobileMenu>
                        </div>
                    </div>

                    {/* Large Screen NavBar */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink className='rounded-lg mr-2' to='/home'>Home</NavLink></li>
                            <li><NavLink className='rounded-lg mr-2' to='/about'>About</NavLink></li>
                            <li><NavLink className='rounded-lg mr-2' to='/contact'>Contact</NavLink></li>
                            <li><NavLink className='rounded-lg' to='/login'>Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;