import React from 'react';
import './CheckboxLabel.css';


const CheckboxLabel = ({checkboxvalue, labelvalue,  itemCount}) => {
    return(
        <>
           <label >
               <input type='checkbox' name='checkbox'  value={checkboxvalue}  />
               <span className='align-margin shirt-name-font'>{labelvalue}</span>
           </label>
           <span className='item-count-font'>
             &#40;{itemCount}&#41;
           </span>
        </>
    );
}

export default CheckboxLabel;