import React from 'react';
import { useProductContext } from '../../context/ProductContext';

const Contact = () => {
    const name = useProductContext();
    return (
        <div className='container mx-auto  h-96'>
            <h2>This is contact Page {name}</h2>
        </div>
    );
};

export default Contact;