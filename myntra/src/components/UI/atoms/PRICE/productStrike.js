import React from 'react';
import './price.css';

const ProductStrike = ({productStrike}) => {
    return(
        <>
        <span className='product-strike'>Rs.{productStrike}</span>
        </>
    );
}

ProductStrike.defaultProps = {
    productStrike: 999 
}

export default ProductStrike;