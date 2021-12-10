import React from 'react';


const DiscountedPrice = ({discountedPrice}) => {
    return(
        <>
        <span className='discounted-price'>Rs.{discountedPrice}</span>
        </>
    );
}

export default DiscountedPrice;