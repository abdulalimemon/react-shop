import React from 'react';
import { useProductContext } from '../../context/ProductContext';
import ProductsItem from './ProductsItem';

const FeatureProducts = () => {
    const {isLoading, featureProducts} = useProductContext();
    return (
        <section className="py-10 sm:py-10 lg:py-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold primary-text">Featured Products</h2>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                    {
                        featureProducts.map(product => <ProductsItem key={product._id} product={product}>
                        </ProductsItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeatureProducts;