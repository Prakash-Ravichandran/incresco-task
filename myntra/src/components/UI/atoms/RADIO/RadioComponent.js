import React from 'react';
import './RadioComponent.css';


const Radio =({identityName,radioValue, labelValue}) => {
    return(
        <>
        <label htmlFor={identityName} name="radio">
               <input type='radio' name='radio' id={identityName} value={radioValue}  />
               <span className='align-margin shirt-name-font'>{labelValue}</span>
           </label>
        </>
    );
}

export default Radio;