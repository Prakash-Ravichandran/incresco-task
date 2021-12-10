import React from 'react';
import './price.css';

const ProductStrike = ({productStrike}) => {
    return(
        <>
        <span className='product-strike'>Rs.{productStrike}</span>
        </>
    );
}

export default ProductStrike;