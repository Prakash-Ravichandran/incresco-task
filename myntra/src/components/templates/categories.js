import React from 'react';
import Label from '../../Components/UI/atoms/LABEL/Label';
import Checkbox from '../../Components/UI/atoms/CHECKBOX/Checkbox';
import './categories.css';
import CheckboxLabel from '../UI/Molecules/CheckboxLabel';


const Categories = () => {
    return(
        <>
        <div className='categories-wrapper'>
        <p className=' brand-font '>CATEGORIES</p>
        <CheckboxLabel checkboxvalue={'Mshirts'} labelvalue={'Mshirts'} identityName={'M-shirts'} itemCount='12506'/>
        </div>
        </>
    );
}

export default Categories;