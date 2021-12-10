import React from 'react';
import Product from '../Components/Product/ProductComponent';
import ProductTwo from '../images/productTwo.webp';
 

const HomePage = () => {
    return(
        <>
          <Product shirtType="T-shirt" modelName="T-shirt" price="100" productImage={ProductTwo}/>
        </>
    );
}

export default HomePage;