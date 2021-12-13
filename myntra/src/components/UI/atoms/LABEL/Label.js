import React from 'react';


const Label =({labelValue}) => {
    return(
        <>
        <label className='align-label'>{labelValue}</label>
        </>
    );
}

Label.defaultProps={
    labelValue: 'label'
}

export default Label;