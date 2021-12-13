import React from 'react';
import './RadioComponent.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Radio =({identityName,radioValue, labelValue, actionType}) => {
    const myState = useSelector((State) => State);
    const dispatch = useDispatch();
    console.log(myState);
    return(
        <>
        <label htmlFor={identityName} name="radio">
               <input type='radio' 
                      name='radio' 
                      id={identityName} 
                      value={radioValue} 
                      onClick={ () => {
                          dispatch({
                              type: actionType
                          })
                      }}
                      />
               <span className='align-margin shirt-name-font'>{labelValue}</span>
           </label>
        </>
    );
}

Radio.defaultProps = {
    identityName: 'Primary-radio',
    radioValue: 'Gender',
    labelValue: 'Priimary-Label',
    actionType: 'Boys'
}


export default Radio;