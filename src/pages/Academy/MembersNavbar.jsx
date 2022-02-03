import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../../components/Navbar.css";
import logo from "../../assets/logoblack.png";
import menu from "../../assets/blackmenu.png";

import { NavLink } from "react-bootstrap";

import { Popup /* or Slider */ } from "react-typeform-embed";

var calcOpacity = 0;
export default function MembersNavbar({ scroll, setMenu, setProvider,navbar }) {
 
  return (
   
    <div
      className="NavbarMain"
      
    >
      <div>
        <NavLink href="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div>
      <NavLink href="/academy/members" style={{ textDecoration: "none" }}>
         <span  style={{marginLeft:'50px',color:'black'}}><b>Home</b></span>
        </NavLink>
        <NavLink href="#" style={{ textDecoration: "none" }}>
         <span  style={{marginLeft:'50px',color:'black'}}><b>Forum</b></span>
        </NavLink>
        <NavLink href="/academy/members/shop" style={{ textDecoration: "none" }}>
         <span  style={{marginLeft:'50px',color:'black'}}><b>Shop</b></span>
        </NavLink>
        <NavLink href="/academy/members/profile" style={{ textDecoration: "none" }}>
         <span  style={{marginLeft:'50px',color:'black'}}><b>Profile</b></span>
        </NavLink>
      </div>
      <div>
        <div onClick={() => setMenu(true)}>
          <img src={menu} alt="" style={{width:'30px',height:'20px'}}/>
        </div>
      </div>
    </div>
  );
}
