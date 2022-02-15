import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './AcademyNavbar.css';
import logo from '../../assets/logoblack.png';
import menu from '../../assets/blackmenu.png';
import { useHistory } from 'react-router-dom';

import { NavLink } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
export default function Academynavbar({
  scroll,
  setMenu,
  setProvider,
  navbar,
}) {
  let history = useHistory();
  const context = useContext(AuthContext);
  const uid = context.value.user;
  function handleclickform() {
    uid
      ? window.open('https://www.facebook.com/groups/1495380457508792')
      : history.push('/login');
  }
  return (
    <div className='NavbarMain' style={{ opacity: 1 }}>
      <div>
        <NavLink href='/' style={{ textDecoration: 'none' }}>
          <img src={logo} alt='' />
        </NavLink>
      </div>
      <div>
        <NavLink
          href='/'
          className='Academynavbarspan'
          style={{ textDecoration: 'none' }}
        >
          <span style={{ color: 'black', fontSize: '12px' }}>Home</span>
        </NavLink>

        <NavLink
          href='/academy/beamember'
          className='Academynavbarspan'
          style={{ textDecoration: 'none' }}
        >
          <span style={{ color: 'black', fontSize: '12px' }}>Be a Member</span>
        </NavLink>

        <NavLink
          className='Academynavbarspan'
          style={{ textDecoration: 'none' }}
          onClick={handleclickform}
        >
          <span style={{ color: 'black', fontSize: '12px' }}>Forum</span>
        </NavLink>
      </div>
    </div>
  );
}
