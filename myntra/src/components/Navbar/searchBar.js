import React, { useEffect }  from 'react';
import { useRef } from 'react';
import searchBarIcon from '../../images/search.png';
import NavIcon from './navIcons';
import './navitem.css';


const SearchBar = () => {

    const ref = useRef();
    console.log(ref);

    useEffect(() => {
      ref.current.focus();
    },
    [ref]);

    return(
        <>
        <div>
          <NavIcon iconName={"fa-solid fa-magnifying-glass"}/>
         <input type="search" name="search-bar" id="search-product" placeholder="Search for products,brands and more" ref={ref}  style={{padding : 10}} className='search-bar'/>
          
         </div>
        </>
    );
}

export default SearchBar;