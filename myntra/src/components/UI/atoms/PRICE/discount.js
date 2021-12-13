import React from 'react';
import './price.css';


const Discount = ({discountPercentage}) => {
    return(
        <>
            <span className="discount">&#40;{discountPercentage} &#37; OFF &#41;</span>
        </>
    );
}

Discount.defaultProps = {
    discountPercentage: 25
}

export default Discount;