import React from 'react';
import Image1 from '../../images/search.png';
import Brand from '../UI/atoms/BRAND/brand';
import BrandType from '../UI/atoms/BRAND/brandType';
import DiscountedPrice from '../UI/atoms/PRICE/discountedPrice';
import ProductStrike from '../UI/atoms/PRICE/productStrike';
import Discount from '../UI/atoms/PRICE/discount';


const Product = ({brandName, brandType, discountedPrice, productStrike, discountPercentage, productImage}) => {
    return(
        <>
        <div className='align-product-margin'>
            <div>
                <span>
                    <img src={productImage}></img>
                </span>
            </div>
            <div>
               <Brand brandName={brandName}/>
            </div>
            <div>
               <BrandType  brandType={brandType}/>
            </div>
            <div>
               <DiscountedPrice discountedPrice={discountedPrice} />
               <ProductStrike productStrike={productStrike} />
               <Discount discountPercentage={discountPercentage}/>
            </div>
        </div>
        </>
    );
}

export default Product;