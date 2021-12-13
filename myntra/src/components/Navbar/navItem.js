import React from 'react';
import './navitem.css';


const NavItem = ({items}) => {

    return(
        <React.Fragment>
            <span className="margin bold-text">{items}</span>
        </React.Fragment>
    );
}

NavItem.defaultProps = {
    items: 'Home'
}

export default NavItem;