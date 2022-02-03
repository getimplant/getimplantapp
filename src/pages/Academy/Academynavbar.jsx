import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./AcademyNavbar.css";
import logo from "../../assets/logoblack.png";
import menu from "../../assets/blackmenu.png";

import { NavLink } from "react-bootstrap";
export default function Academynavbar({
  scroll,
  setMenu,
  setProvider,
  navbar,
}) {
  return (
    <div className="NavbarMain" style={{ opacity: 1 }}>
      <div>
        <NavLink href="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div>
        <NavLink
          href="/academy/members"
          className="Academynavbarspan"
          style={{ textDecoration: "none" }}
        >
          <span style={{ color: "black", fontSize: "12px" }}>Home</span>
        </NavLink>

        <NavLink
          href="/academy/beamember"
          className="Academynavbarspan"
          style={{ textDecoration: "none" }}
        >
          <span style={{ color: "black", fontSize: "12px" }}>Be a Member</span>
        </NavLink>

        <NavLink
          href="#"
          className="Academynavbarspan"
          style={{ textDecoration: "none" }}
        >
          <span style={{ color: "black", fontSize: "12px" }}>Forum</span>
        </NavLink>

        <NavLink
          href="#"
          className="Academynavbarspan"
          style={{ textDecoration: "none" }}
        >
          <span style={{ color: "black", fontSize: "12px" }}>Extras</span>
        </NavLink>
      </div>
      <div>
        <div onClick={() => setMenu(true)}>
          <img src={menu} alt="" style={{ width: "30px", height: "20px" }} />
        </div>
      </div>
    </div>
  );
}
