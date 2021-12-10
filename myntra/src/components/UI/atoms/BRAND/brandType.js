import React from 'react';
import './brand.css';

const BrandType = ({brandType}) => {
    return(
        <>
        <span className='brand-type-font'>{brandType}</span>
        </>
    );
}

export default BrandType;
