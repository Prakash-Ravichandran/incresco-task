import React from'react';

const NavIcon = ({imageItem, imageCaption}) => {
    return(
        <>
         <figure>
             <img src={imageItem}>
             </img>
             <figurecaption className="bold-text">
                 {imageCaption}
             </figurecaption>
         </figure>
        </>
    );
}

export default NavIcon;