import React from 'react';
import  NavItem from './navItem';
import '../Navbar/navitem.css';
import SearchBar from './searchBar';
import NavIcon from './navIcons';


const Navbar = () => {
     return(
         <React.Fragment>
             <div className="navbar-wrapper">
             <div className="flex ">
            <NavItem items="MEN"/>
            <NavItem items="WOMEN"/>
            <NavItem items="KIDS"/>
            <NavItem items="HOME & LIVING"/>
            <NavItem items="OFFERS"/>
            </div>
            <div className="navbar-wrapper">
            <SearchBar />
            <NavIcon imageCaption="Profile" />
            <NavIcon imageCaption="WishList" />
            <NavIcon imageCaption="Bag" />
            </div>
            </div>
         </React.Fragment>
     );

     
}

export default Navbar;