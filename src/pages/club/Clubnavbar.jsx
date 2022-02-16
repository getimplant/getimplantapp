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
  const uid = authcontext.value.user;
  const setSingup = authcontext.value.setSingup;
  const history = useHistory();
  function handleclickform() {
    uid
      ? window.open('https://www.facebook.com/groups/1495380457508792')
      : history.push('/fourm/login');
  }
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
            <b>Login</b>
          </span>
        </NavLink>

        <NavLink href='/club/beamember' style={{ textDecoration: 'none' }}>
          <span style={{ marginLeft: '20px', color: 'black' }}>
            <b>Be a Member</b>
          </span>
        </NavLink>

        <NavLink onClick={handleclickform} style={{ textDecoration: 'none' }}>
          <span style={{ marginLeft: '20px', color: 'black' }}>
            <b>Forum</b>
          </span>
        </NavLink>
      </div>
    </div>
  );
}
