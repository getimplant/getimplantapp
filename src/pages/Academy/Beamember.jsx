import React, { useContext, useEffect, useState } from 'react';
import './Academy.css';
import Academynavbar from './Academynavbar';
import { AuthContext } from './AuthProvider';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';

import bg1 from '../../assets/beamember1.png';
import bg2 from '../../assets/beamember2.png';
export default function Beamenber({ setNavbar, setMenu }) {
  const context = useContext(AuthContext);
  const setType = context.value.setType;
  const history = useHistory();

  const [value, setValue] = useState({
    name: '',
    pNumber: '',
    lNumber: '',
    address: '',
  });
  const [error, setError] = useState({
    name: false,
    pNumber: false,
    lNumber: false,
    address: false,
  });
  const handleClick = () => {
    console.log(value);
  };
  const storedata = () => {
    localStorage.setItem('name', value.name);
    localStorage.setItem('pNumber', value.pNumber);
    localStorage.setItem('lNumber', value.lNumber);
    localStorage.setItem('address', value.address);
  };

  useEffect(() => {
    setNavbar(0);
  }, [setNavbar]);
  const isLandscape = window.innerHeight > window.innerWidth ? false : true;
  return (
    <div style={{ maxHeight: window.innerHeight }}>
      <Academynavbar setMenu={setMenu} />
      <div className='beamemberMain'>
        <img
          src={isLandscape ? bg1 : bg2}
          style={{
            height:
              window.innerWidth < 800
                ? window.innerHeight * 0.6 + 'px'
                : window.innerHeight + 'px',
            width:
              window.innerWidth < 800
                ? window.innerWidth + 'px'
                : window.innerWidth * 0.77 + 'px',
          }}
        />
        <div>
          <span className='beamemberMainh3'>
            Fill the form to be membership
          </span>
          <CustomInput
            className={error.name}
            onChange={(e) => {
              setValue({ ...value, name: e.target.value });
            }}
            value={value.name}
            label="Practioner's name"
          />
          <CustomInput
            className={error.pNumber}
            onChange={(e) => {
              setValue({ ...value, pNumber: e.target.value });
            }}
            value={value.pNumber}
            label='Practice number'
          />
          <CustomInput
            className={error.lNumber}
            onChange={(e) => {
              setValue({ ...value, lNumber: e.target.value });
            }}
            value={value.lNumber}
            label='License number'
          />
          <CustomInput
            className={error.address}
            onChange={(e) => {
              setValue({ ...value, address: e.target.value });
            }}
            value={value.address}
            label='Practice address'
          />
          <button className='beamemberMainbutton' onClick={handleClick}>
            <span
              className='beamemberMainbuttontext'
              onClick={() => {
                setType('membership');
                storedata(value);

                history.push('/academy/shop');
              }}
            >
              {' '}
              Next
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function CustomInput({ onClick, onChange, value, label, className }) {
  return (
    <div className='beamemberforminput'>
      <label>{label}</label>
      <input
        className={className ? 'error' : ''}
        type='text'
        onClick={onClick}
        onChange={(e) => onChange(e)}
        value={value}
      />
    </div>
  );
}
