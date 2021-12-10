import React from 'react';
import Label from '../UI/atoms/LABEL/Label';
import Checkbox from '../UI/atoms/CHECKBOX/Checkbox';
import './categories.css';
import CheckboxLabel from '../UI/Molecules/CheckboxLabel';


const FilterComponent = ({filterType}) => {
    return(
        <>
        <div className='categories-wrapper'>
        <p className=' brand-font'>{filterType} </p>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts'} itemCount='12506'/>
        </div>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts'} itemCount='12506'/>
        </div>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts'} itemCount='12506'/>
        </div>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts'} itemCount='12506'/>
        </div>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts'} itemCount='12506'/>
        </div>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts'} itemCount='12506'/>
        </div>
        </div>
        </>
    );
}

export default FilterComponent;