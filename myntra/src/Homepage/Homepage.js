import React from 'react';
import Product from '../Components/Product/ProductComponent';
import ProductTwo from '../images/productTwo.jpg';
 

const HomePage = () => {
    return(
        <>
          <Product shirtType="T-shirt" modelName="T-shirt" price="100" productImage={ProductTwo}/>
        </>
    );
}

export default HomePage;