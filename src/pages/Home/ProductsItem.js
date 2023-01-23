import React from 'react';
import { Link } from 'react-router-dom';

const ProductsItem = ({ product }) => {
    const { _id, name, price, category, image } = product;
    return (
        <Link to={`/product/${_id}`}>
            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={image} alt={name} />
                </div>
                <div className="absolute left-3 top-3">
                    <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">{category}</p>
                </div>
                <div className="flex justify-between flex-col md:flex-row mt-4 space-x-0 md:space-x-4">
                    <div>
                        <h3 className="font-bold primary-text text-base">{name}</h3>
                    </div>
                    <div className='mt-2 md:mt-0'>
                        <p className="font-bold primary-text text-base">${price}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductsItem;