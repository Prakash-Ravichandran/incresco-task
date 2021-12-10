import React from 'react';
import './CheckboxLabel.css';


const CheckboxLabel = ({checkboxvalue, labelvalue, identityName, itemCount}) => {
    return(
        <>
           <label htmlFor={identityName} >
               <input type='checkbox' name='checkbox' id={identityName} value={checkboxvalue}  />
               <span className='align-margin shirt-name-font'>{labelvalue}</span>
           </label>
           <span className='item-count-font'>
             &#40;{itemCount}&#41;
           </span>
        </>
    );
}

export default CheckboxLabel;