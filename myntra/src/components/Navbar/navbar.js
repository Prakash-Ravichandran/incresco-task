import React from 'react';
import  NavItem from './navItem';
import './navitem.css';
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
            <span>
                 <i class="fa-light fa-circle-m"></i>
                 </span>
            </div>
            <div className="navbar-wrapper">
            <SearchBar />
            <NavIcon imageCaption="Profile" iconName={'fa fa-user'}/>
            <NavIcon imageCaption="WishList" iconName={"fa fa-heart"}/>
            <NavIcon imageCaption="Bag" iconName={"fa fa-cart-arrow-down"}/>
            </div>
            </div>
         </React.Fragment>
     );

     
}

export default Navbar;