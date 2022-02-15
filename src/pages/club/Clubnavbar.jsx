import React, { useEffect, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../../components/Navbar.css';
import logo from '../../assets/logoblack.png';
import menu from '../../assets/blackmenu.png';
import { AuthContext } from '../Academy/AuthProvider';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
export default function Clubnavbar({ scroll, setMenu, setProvider, navbar }) {
  const authcontext = useContext(AuthContext);
  const setSingup = authcontext.value.setSingup;
  const history = useHistory();
  return (
    <div className='NavbarMain'>
      <div>
        <NavLink href='/' style={{ textDecoration: 'none' }}>
          <img src={logo} alt='' />
        </NavLink>
      </div>
      <div>
        <NavLink
          onClick={() => {
            setSingup(0);
            history.push('/club/login');
          }}
          style={{ textDecoration: 'none' }}
        >
          <span style={{ marginLeft: '50px', color: 'black' }}>
            <b>Sign In</b>
          </span>
        </NavLink>

        <NavLink href='/club/beamember' style={{ textDecoration: 'none' }}>
          <span style={{ marginLeft: '20px', color: 'black' }}>
            <b>Be a Member</b>
          </span>
        </NavLink>

        <NavLink href='/forum' style={{ textDecoration: 'none' }}>
          <span style={{ marginLeft: '20px', color: 'black' }}>
            <b>Forum</b>
          </span>
        </NavLink>

        <NavLink href='/' style={{ textDecoration: 'none' }}>
          <span style={{ marginLeft: '20px', color: 'black' }}>
            <b>Extras</b>
          </span>
        </NavLink>
      </div>
      <div>
        <div onClick={() => setMenu(true)}>
          <img src={menu} alt='' style={{ width: '30px', height: '20px' }} />
        </div>
      </div>
    </div>
  );
}
