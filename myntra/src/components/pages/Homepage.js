import React from 'react';
import ProductTwo from '../../images/productTwo.webp';
import Product from '../templates/ProductComponent';
 

const HomePage = () => {
    return(
        <>
        <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductTwo}/>
        </>
    );
}

export default HomePage;
