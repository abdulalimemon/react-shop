import React, { useState } from 'react';
import { RiMenuFoldLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const MobileMenu = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className='lg:hidden'>
            {showSidebar ? (
                    <>
                    </>
                ) : (
                    <RiMenuFoldLine onClick={() => setShowSidebar(!showSidebar)} className='w-6 h-6 primary-text'></RiMenuFoldLine>
                )}
            <div
                className={`top-0 right-0 w-9/12 bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                {showSidebar ? (
                    <div className='flex justify-between items-center'>
                        <h2 className="text-2xl text-white fixed z-50">sidebar</h2>
                        <button
                            className="text-xl text-white cursor-pointer fixed right-10 z-50"
                            onClick={() => setShowSidebar(!showSidebar)}
                        >
                            <MdOutlineClose className='w-6 h-6 primary-text'></MdOutlineClose>
                        </button>
                    </div>
                ) : (
                    <></>
                )}
                
                <h3 className="mt-20 text-4xl font-semibold text-white">
                    I am a sidebar
                </h3>
            </div>
        </div>
    );
};

export default MobileMenu;