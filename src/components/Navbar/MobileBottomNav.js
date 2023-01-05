import React from 'react';
import { HiHome } from 'react-icons/hi';
import { BsPersonCircle } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MobileBottomNav = () => {
    return (
        <>
            <div className="btm-nav lg:hidden nav-color">
                <button>
                    <Link to='/' className='flex flex-col justify-center items-center primary-text'>
                        <HiHome className='w-5 h-5'></HiHome>
                        <span className="btm-nav-label text-sm">Home</span>
                    </Link>
                </button>
                <button>
                    <Link to='/account' className='flex flex-col justify-center items-center primary-text'>
                        <BsPersonCircle className='w-5 h-5'></BsPersonCircle>
                        <span className="btm-nav-label text-sm">Account</span>
                    </Link>
                </button>

                <button>
                    <Link to='/' className='flex flex-col justify-center items-center primary-text'>
                        <FaShoppingCart className='w-5 h-5'></FaShoppingCart>
                        <span className="btm-nav-label text-sm">Cart</span>
                    </Link>
                </button>

                <button>
                    <Link to='/' className='flex flex-col justify-center items-center primary-text'>
                        <BsPersonCircle className='w-5 h-5'></BsPersonCircle>
                        <span className="btm-nav-label text-sm">Account</span>
                    </Link>
                </button>
            </div>
        </>
    );
};

export default MobileBottomNav;