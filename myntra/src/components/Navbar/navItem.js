import React from 'react';
import '../Navbar/navitem.css';


const NavItem = ({items}) => {

    return(
        <React.Fragment>
            <span className="margin bold-text">{items}</span>
        </React.Fragment>
    );

}

export default NavItem;