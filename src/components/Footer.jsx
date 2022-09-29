import React from "react";
import { NavLink } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import "./Footer.css";
import pdf from "../assets/privacypolicy.pdf"
export default function Footer({ setProvider }) {
  return (
    <div className="footerMain">
      <div className="footerLinks">
        <div
          onClick={() =>
            window.open("https://e4h3uqkvd80.typeform.com/to/a31vCGUw")
          }
        ></div>
        <div>
          <NavLink
            className="footerLINK"
            href="/"
            style={{ textDecoration: "none" }}
            onClick={() =>
              window.open("https://e4h3uqkvd80.typeform.com/to/a31vCGUw")
            }
          >
            Book an appointment
          </NavLink>
          <ScrollLink
            // activeClass="active"
            to="liveswetouched"
            // spy={true}
            smooth={true}
            offset={-50}
            duration={600}
          >
            Lives we touched
          </ScrollLink>
          <ScrollLink
            to="howitworks"
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
          >
            How it works
          </ScrollLink>
          <ScrollLink
            to="vs"
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
          >
            Implants v/s Alternatives
          </ScrollLink>
        </div>
        <div>
          <NavLink
            className="footerLINK"
            href="/"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
          <NavLink
            className="footerLINK"
            href={pdf}
            target="_blank"
            // onClick={()=>{
            //   window.open('../assets/privacypolicy.pdf')
            // }}
            style={{ textDecoration: "none" }}
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className="footerLINK"
            href="/liveswetouched"
            style={{ textDecoration: "none" }}
          >
            Careers
          </NavLink>
          <NavLink
            className="footerLINK"
            href="/compare"
            style={{ textDecoration: "none" }}
          >
            Corporate Connect
          </NavLink>
        </div>
        <div>
          <NavLink
            className="footerLINK"
            onClick={() =>
              window.open("https://getimplants-com-shop.myshopify.com/admin")
            }
            style={{ textDecoration: "none" }}
          >
            Store
          </NavLink>
          <NavLink
            className="footerLINK"
            onClick={() => alert("Coming soon...")}
            style={{ textDecoration: "none" }}
          >
            Academy
          </NavLink>
          <NavLink
            className="footerLINK"
            onClick={() => alert("Coming soon...")}
            style={{ textDecoration: "none" }}
          >
            Forum
          </NavLink>
          <NavLink
            className="footerLINK"
            onClick={() => setProvider(true)}
            style={{ textDecoration: "none" }}
          >
            For Dentists
          </NavLink>
        </div>
        <div>
          <a
            className="footerLINK"
            href="https://www.instagram.com/getimplant7777/"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="footerLINK"
            href="https://www.facebook.com/getimplants"
            target="_blank"
          >
            Facebook
          </a>
          <a className="footerLINK" href="http://facebook.com">
            LinkedIn
          </a>
          <a className="footerLINK" href="http://facebook.com">
            Youtube
          </a>
        </div>
      </div>
      <div className="footerSmile">
        <a href="http://info@getimplant.com">info@getimplant.com</a>
      </div>
    </div>
  );
}
