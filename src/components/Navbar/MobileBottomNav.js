import React from 'react';
import { HiHome } from 'react-icons/hi';
import { BsPersonCircle } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';


const MobileBottomNav = () => {
    return (
        <>
            <div className="btm-nav lg:hidden nav-color">

                <NavLink to='/' className={({ isActive }) =>
                    isActive
                        ? "primary-text bg-green-800"
                        : "primary-text"}>
                    <button className='flex flex-col justify-center items-center'>
                        <HiHome className='w-5 h-5'></HiHome>
                        <span className="btm-nav-label text-sm font-semibold">Home</span>
                    </button>
                </NavLink>

                <NavLink to='/account' className={({ isActive }) =>
                    isActive
                        ? "primary-text bg-green-800"
                        : "primary-text"}>
                    <button className='flex flex-col justify-center items-center'>
                        <BsPersonCircle className='w-5 h-5'></BsPersonCircle>
                        <span className="btm-nav-label text-sm font-semibold">Account</span>
                    </button>
                </NavLink>

                <NavLink to='/c' className={({ isActive }) =>
                    isActive
                        ? "primary-text bg-green-800"
                        : "primary-text"}>
                    <button className='flex flex-col justify-center items-center'>
                        <FaShoppingCart className='w-5 h-5'></FaShoppingCart>
                        <span className="btm-nav-label text-sm font-semibold">Cart</span>
                    </button>
                </NavLink>

                <NavLink to='/a' className={({ isActive }) =>
                    isActive
                        ? "primary-text bg-green-800"
                        : "primary-text"}>
                    <button className='flex flex-col justify-center items-center'>
                        <HiHome className='w-5 h-5'></HiHome>
                        <span className="btm-nav-label text-sm font-semibold">Home</span>
                    </button>
                </NavLink>
            </div>
        </>
    );
};

export default MobileBottomNav;