import React from 'react';


const Product = ({shirtType, modelName, price}) => {
    return(
        <>
        <div>
            <div>
                <span>
                    <img></img>
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