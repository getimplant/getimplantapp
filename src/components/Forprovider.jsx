import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-bootstrap';
import './Forprovider.css';
import logo from '../assets/LOGO.png';
import Academy from '../pages/Academy/Academy';
import { AuthContext } from '../pages/Academy/AuthProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";


export default function Forprovider({ setProvider, setNavbar, navbar }) {
  let history = useHistory();
  const context = useContext(AuthContext);
  const uid = context.value.user;

  function handleclickacademy() {
    // handleclickacademy();
    // uid
    //   ? window.open('https://get-implant.myshopify.com/collections/courses')
    //   : history.push('/academy/login');
    window.open('https://shops.getimplant.com/collections/courses')
    setProvider(0);
  }
  function handleclickclub() {
    // uid
    //   ? window.open('https://get-implant.myshopify.com/collections/memberships')
    //   : history.push('/club');
    // window.open('https://get-implant.myshopify.com/collections/memberships')
    window.open('https://getimplant.simplybook.me/v2/#')
    setProvider(0);
  }
  function handleclickshop() {
    // uid
    //   ? window.open(
    //       ' https://shops.getimplant.com/?_cd=f48f9ed0562bfdc6870a1f681e328fc767fd7736a2164155ba277b6371baaa1a&_uid=73640968364'
    //     )
    //   : history.push('/store/login');
    window.open(
      ' https://shops.getimplant.com/?_cd=f48f9ed0562bfdc6870a1f681e328fc767fd7736a2164155ba277b6371baaa1a&_uid=73640968364'
    )
    setProvider(0);
  }
  function handleclickform() {
    // uid
    //   ? window.open('https://www.facebook.com/groups/1495380457508792')
    //   : history.push('/fourm/login');
    window.open('https://www.facebook.com/groups/1495380457508792')
    setProvider(0);
  }
  function handlelogout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location.reload();
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='providerMain'>
      <div className='providerBars'>
        <img
          className='providerLogo'
          src={logo}
          onClick={() => setProvider(false)}
        />
        <Link
          to='#'
          onClick={() => handleclickclub()}
          style={{ textDecoration: 'none' }}
          // onClick={handleclickclub}
        >
          {/* <h2>Membership</h2> */}
          <h2>Schedule </h2>
        </Link>
      </div>
      <div className='providerBars'>
        <Link
          style={{ textDecoration: 'none' }}
          to='#'
          onClick={handleclickacademy}
        >
          <h2>Academy</h2>
        </Link>
      </div>
      <div className='providerBars'>
        <NavLink onClick={handleclickshop} style={{ textDecoration: 'none' }}>
          <h2>Store</h2>
        </NavLink>
      </div>
      <div className='providerBars'>
        <NavLink
          // href='/marketing'
          style={{ textDecoration: 'none' }}
          // onClick={() => alert('Coming soon...')}
          onClick={() =>
            window.open(
              'https://shops.getimplant.com/pages/contact-us'
            )
          }
        >
          <h2>Marketing</h2>
        </NavLink>
      </div>
      <div className='providerBars'>
      {  uid?<h4 className='logout' onClick={()=>handlelogout()}>Logout</h4>:''}
        <NavLink
          style={{ textDecoration: 'none' }}
          onClick={() =>
            // handleclickform()
            handleclickform()
          }
        >
          <h2>Forum</h2>
        </NavLink>
      </div>
    </div>
  );
}
