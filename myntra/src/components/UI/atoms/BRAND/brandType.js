import React from 'react';
import './brand.css';

const BrandType = ({brandType}) => {
    return(
        <>
        <span className='brand-type-font'>{brandType}</span>
        </>
    );
}


BrandType.defaultProps = {
    brandType: 'Suitable sizes - XL,XXL'
}

export default BrandType;
