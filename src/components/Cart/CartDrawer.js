import React from 'react';

const CartDrawer = () => {
    return (
        <>
            <div className="drawer drawer-end">
                <input id="cart-drawer" type="checkbox" className="drawer-toggle" />

                
                <div className="drawer-side">
                    <label htmlFor="cart-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;