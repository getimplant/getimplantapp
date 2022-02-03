import React from "react";
import { NavLink } from "react-bootstrap";
import close from "../assets/close.png";
import home from "../assets/Home/home.png";
import club from "../assets/Home/club.png";
import shop from "../assets/Home/shop.png";
import academy from "../assets/Home/academy.png";

export default function Navmenu({ menu, setMenu }) {
  return (
    <div className={"Navmenu " + (menu ? "MenuOpen" : "")} > 
      <div>
        <img src={close} alt="" onClick={() => setMenu(false)} />
      </div>
      <div>
        <NavLink
          className="NavmenuLinks home"
          href="/"
          style={{ textDecoration: "none" }}
        >
          <img src={home} alt="" /> Home
        </NavLink>
        <NavLink
          className="NavmenuLinks club"
          href="/club"
          style={{ textDecoration: "none" }}
        >
          <img src={club} alt="" />
          Get Implant Club
        </NavLink>
        <NavLink
          className="NavmenuLinks aca"
          href="/academy"
          style={{ textDecoration: "none" }}
        >
          <img src={academy} alt="" />
          GI Academy
        </NavLink>
        <NavLink
          className="NavmenuLinks shop"
          href="https://get-implant.myshopify.com/"
          style={{ textDecoration: "none" }}
        >
          <img src={shop} alt="" />
          GI Store
        </NavLink>
        <NavLink
          className="NavmenuLinks mark"
          href="/bookanappointment"
          style={{ textDecoration: "none" }}
        >
          Marketing
        </NavLink>
      </div>
      <div>
        <NavLink
          className="NavmenuLinks cont"
          href="/"
          style={{ textDecoration: "none" }}
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}
