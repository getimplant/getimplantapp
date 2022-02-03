import React, { useEffect, useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../../../components/Navbar.css";
import logo from "../../../assets/logoblack.png";
import menu from "../../../assets/blackmenu.png";

import { NavLink } from "react-bootstrap";

import { Popup /* or Slider */ } from "react-typeform-embed";
import { AuthContext } from "../AuthProvider";
var calcOpacity = 0;
export default function ShopNavbar() {
  const context = useContext(AuthContext);
  const setMenu = context.value.setMenu;
  const currentuser=context.value.user;
  return (
    <div className="NavbarMain" >
      <div>
        <NavLink href="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div></div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <div onClick={() => setMenu(true)}>
          <img src={menu} alt="" style={{ width: "30px", height: "20px" }} />
        </div>
        <div style={{ marginTop: "5px" }}>
         {!currentuser&& <NavLink href="/academy/members/" style={{ textDecoration: "none" }}>
            <span style={{ color: "black" }}>Sing in</span>
          </NavLink>}
        </div>
      </div>
      
    </div>
  );
}
