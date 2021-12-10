import React from 'react';
import './brand.css';


 const Brand = ({brandName}) => {
    return(
        <>
        <span className='brand-font'>{brandName}</span>
        </>
    );
}

export default Brand;