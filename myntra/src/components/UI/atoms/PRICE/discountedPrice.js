import React from 'react';


const DiscountedPrice = ({discountedPrice}) => {
    return(
        <>
        <span className='discounted-price'>Rs.{discountedPrice}</span>
        </>
    );
}

DiscountedPrice.defaultProps = {
    discountedPrice: 150
}

export default DiscountedPrice;