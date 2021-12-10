import React from'react';
import './navitem.css';

const NavIcon = ({iconName, imageCaption, }) => {
    return(
        <>
         <figure className="align-icons">
         <i class={iconName}></i>
             <figurecaption className="bold-text">
                 {imageCaption}
             </figurecaption>
         </figure>
        </>
    );
}

export default NavIcon;