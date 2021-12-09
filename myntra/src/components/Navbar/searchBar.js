import React, { useEffect }  from 'react';
import { useRef } from 'react';


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
            <span>
                <img ></img>
                </span>
         <input type="search" name="search-bar" id="search-product" placeholder="Search for products,brands and more" ref={ref}  style={{padding : 10}}/>
         </div>
        </>
    );
}

export default SearchBar;