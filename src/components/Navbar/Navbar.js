import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { HiOutlineSun } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";

const Navbar = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (
            localStorage.getItem("color-theme") === "dark" ||
            (!("color-theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setDark(true);
        } else {
            setDark(false);
        }
    }, [dark]);
    const themeChanger = () => {
        setDark((p) => !p);
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        }
    };

    return (
        <>
            <div className="navbar nav-color">
                <div className='container mx-auto'>
                    <div className="navbar justify-between">
                        <Link className="btn btn-ghost normal-case text-xl primary-text" to='/' >React Shop</Link>

                        {/* Mobile And Tab Screen NavBar */}
                        <div className='flex justify-between items-center content-center lg:hidden'>
                            <div className='mr-5'>
                                <button
                                    onClick={themeChanger}
                                    className="text"
                                >
                                    {
                                        dark ? <HiOutlineSun className='swap-on fill-current w-6 h-6'></HiOutlineSun>
                                            : <BsFillMoonFill className='swap-off fill-current w-6 h-6'></BsFillMoonFill>
                                    }
                                </button>
                            </div>
                            <MobileMenu></MobileMenu>
                        </div>
                    </div>

                    {/* Large Screen NavBar */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink className={({ isActive }) =>
                                isActive
                                    ? "text-lg font-bold text-black success mr-2"
                                    : "text-lg font-bold text mr-2"
                            } to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive
                                    ? "text-lg font-bold text-black success mr-2"
                                    : "text-lg font-bold text mr-2"
                            } to='/about'>About</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive
                                    ? "text-lg font-bold text-black success mr-2"
                                    : "text-lg font-bold text mr-2"
                            } to='/contact'>Contact</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive
                                    ? "text-lg font-bold text-black success mr-2"
                                    : "text-lg font-bold text mr-2"
                            } to='/login'>Login</NavLink></li>
                            <div className='hidden lg:flex justify-between items-center content-center'>
                                <div className='ml-3'>
                                    <button
                                        onClick={themeChanger}
                                        className="text"
                                    >
                                        {
                                            dark ? <HiOutlineSun className='swap-on fill-current w-7 h-7'></HiOutlineSun>
                                                : <BsFillMoonFill className='swap-off fill-current w-7 h-7'></BsFillMoonFill>
                                        }
                                    </button>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;