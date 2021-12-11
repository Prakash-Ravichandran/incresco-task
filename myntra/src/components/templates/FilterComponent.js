import React from 'react';
import Label from '../UI/atoms/LABEL/Label';
import Checkbox from '../UI/atoms/CHECKBOX/Checkbox';
import './categories.css';
import CheckboxLabel from '../UI/Molecules/CheckboxLabel';
import Radio from '../UI/atoms/RADIO/RadioComponent';


const FilterComponent = ({filterType}) => {
    return(
        <>
        <div className='categories-wrapper'>
        <p className=' brand-font'>{filterType} </p>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts1'} itemCount='12506'/>
        </div>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts2'} itemCount='12506'/>
        </div>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts3'} itemCount='12506'/>
        </div>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts4'} itemCount='12506'/>
        </div>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts5'} itemCount='12506'/>
        </div>
        <div>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts6'} itemCount='12506'/>
        </div>
        </div>
        </>
    );
}

export default FilterComponent;