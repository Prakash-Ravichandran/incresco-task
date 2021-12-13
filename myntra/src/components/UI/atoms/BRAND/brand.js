import React from 'react';
import './brand.css';


 const Brand = ({brandName}) => {
    return(
        <>
        <span className='brand-font'>{brandName}</span>
        </>
    );
}

Brand.defaultProps = {
    brandName: 'Branded-Clothes'
}

export default Brand;
