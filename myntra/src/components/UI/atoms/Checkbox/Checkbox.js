import React from 'react';


const Checkbox = ({CheckboxValue}) => {
    return(
        <>
        <input type="checkbox" value={CheckboxValue}/>
        </>
    );
}

Checkbox.defaultProps = {
    CheckboxValue: 'dresses'
}

export default Checkbox;