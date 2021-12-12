import React from 'react';
import './RadioComponent.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Radio =({identityName,radioValue, labelValue}) => {
  const myState = useSelector((State) => State);
  const dispatch = useDispatch();
    return(
        <>
        <label htmlFor={identityName} name="radio">
               <input type='radio' 
                      name='radio' 
                      id={identityName} 
                      value={radioValue} 
                      onClick={() => { 
                          dispatch({
                              type: 'MEN'
                          })

               }}/>
               <span className='align-margin shirt-name-font'>{labelValue}</span>
           </label>
        </>
    );
}

export default Radio;