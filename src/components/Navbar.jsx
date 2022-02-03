import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../assets/LOGO.png';
import menu from '../assets/menu.png';

import { NavLink } from 'react-bootstrap';

import { Popup /* or Slider */ } from 'react-typeform-embed';

var calcOpacity = 0;
export default function Navbar({ scroll, setMenu, setProvider, navbar }) {
  const screensize = window.screen.width < 800;
  useEffect(() => {
    if (scroll / 750 >= 0.5) {
      calcOpacity = 0.5;
    } else {
      calcOpacity = scroll / 750;
    }
  }, [scroll]);
  return (
    <div
      className='NavbarMain'
      style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}
    >
      <div>
        <NavLink href='/' style={{ textDecoration: 'none' }}>
          <img src={logo} alt='' />
        </NavLink>
      </div>
      <div>
        <ScrollLink
          activeClass='active'
          to='howitworks'
          // spy={true}
          smooth={true}
          offset={-50}
          duration={600}
        >
          <span>How it works</span>
        </ScrollLink>
        <ScrollLink
          activeClass='active'
          to='liveswetouched'
          // spy={true}
          smooth={true}
          offset={-50}
          duration={600}
        >
          <span>Lives we touched</span>
        </ScrollLink>
        <ScrollLink
          activeClass='active'
          to='vs'
          // spy={true}
          smooth={true}
          offset={-50}
          duration={600}
        >
          <span>Implants v/s Alternatives</span>
        </ScrollLink>
        {/* <ScrollLink>   */}
        {/* <span
            onClick={() =>
              window.open("https://e4h3uqkvd80.typeform.com/to/a31vCGUw")
            }
          >
            Book an appointment
          </span> */}
        {/* <Popup id="a31vCGUw" size={80}>
          <span>Book an appointment</span>
        </Popup> */}
        {/* </ScrollLink> */}
      </div>
      <div>
        <NavLink
          style={{ textDecoration: 'none' }}
          onClick={() => setProvider(true)}
        >
          <span>For Providers</span>
        </NavLink>
      </div>
      <div>
        <div onClick={() => setMenu(true)}>
          <img src={menu} alt='' />
        </div>
      </div>
    </div>
  );
}
