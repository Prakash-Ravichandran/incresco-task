import React from 'react';
import Image1 from '../../images/search.png';


const Product = ({shirtType, modelName, price , productImage}) => {
    return(
        <>
        <div>
            <div>
                <span>
                    <img src={productImage}></img>
                </span>
            </div>
            <div>
                <span>
                    {shirtType}
                </span>
            </div>
            <div>
                <span>
                    {modelName}
                </span>
            </div>
            <div>
                <span>
                    {price}
                </span>
            </div>
        </div>
        </>
    );
}

export default Product;