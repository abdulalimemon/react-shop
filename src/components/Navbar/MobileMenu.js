import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const MobileMenu = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className='lg:hidden'>
            {showSidebar ? (
                <>
                </>
            ) : (
                <HiMenuAlt3 onClick={() => setShowSidebar(!showSidebar)} className='w-6 h-6 primary-text'></HiMenuAlt3>
            )}
            <div className={`top-0 right-0 w-10/12  px-5 py-8 bg-[#161B22] fixed h-full z-50  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                }`} >
                {showSidebar ? (
                    <div className='flex justify-between items-center'>
                        <h2 className="text-2xl text-white fixed z-50 flex items-center justify-center">
                            <HiOutlineMenuAlt1 className='w-7 h-7 error-text border-0 mr-4'></HiOutlineMenuAlt1>
                            Menu
                        </h2>
                        <button
                            className="text-xl error-text cursor-pointer fixed right-7 z-50"
                            onClick={() => setShowSidebar(!showSidebar)}
                        >
                            <MdOutlineClose className='w-7 h-7 error-text border-0'></MdOutlineClose>
                        </button>
                    </div>
                ) : (
                    <></>
                )}

                <div>
                    <div className='success h-20 mt-8'>

                    </div>
                    <div className='mt-8'>
                        <h3 className="text-4xl font-semibold text-white">
                            I am a sidebar
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;