import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import '../../firebase/config';
import { getFirestore } from 'firebase/firestore';
import * as yup from 'yup';
import { AuthContext } from './AuthProvider';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from 'firebase/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';

import './Academy.css';
import { saveuserdata } from './Usefirestore';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginRight: '100px',
    flexWrap: 'wrap',
    height: '470px',
    width: '100%',
  },

  inputfields: {
    width: '100%',
    marginTop: '0px',
  },
  inputlable: {
    marginBottom: '15px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
  },
  loginlinktext: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',

    /* identical to box height */
    display: 'flex',
    alignItems: 'center',

    /* Get Implant/Read */
    color: '#000000',
  },
}));
export default function Singup({ setSingup, message, setMessage }) {
  const classes = useStyles();
  const validationSchema = yup.object({
    username: yup
      .string('Enter your username')
      .required('username is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    cpassword:yup.string()
    .min(8)
    .when("password", {
      is: (val: any) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("password")],
        "Both password need to be the same"
      ),
    })
    .required("Confirm Password Required"),
  });
  const initialValues = {
    password: '',
    email: '',
    username: '',
    cpassword:''
  };
  const Submitsingupform = (e) => {
    const auth = getAuth();
    const email = e.email;
    const username = e.username;
    const password = e.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        const value = { username, email };
        saveuserdata(value);
        sendEmailVerification(auth.currentUser)
          .then(() => {
            signOut(auth);
          })
          .then(() => {
            setMessage('verification link sent ,please verify');
            setSingup(0);
          });
      })
      .catch(function (error) {
        // Handle Errors hee.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      Submitsingupform(values);
    },
  });

  return (
    <div className={classes.root}>
      <div style={{ width: '100%' }}>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.inputfields}>
            <InputLabel className={classes.inputlable}> Name</InputLabel>
            <TextField
              id='username'
              className={classes.textField}
              style={{ marginBottom: '40px', borderBottom: ' 1px' }}
              placeholder=''
              name='username'
              fullWidth
              margin='40px'
              InputLabelProps={{
                shrink: true,
                color: 'black',
              }}
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.errors.username}
            />
            {/* <span className={classes.textField}>  { formik.errors.username && formik.errors.username }</span> */}
            <InputLabel className={classes.inputlable}>
              {' '}
              Email address/User name
            </InputLabel>
            <TextField
              id='email'
              style={{ marginBottom: '40px', borderBottom: ' 1px' }}
              placeholder=''
              name='email'
              fullWidth
              margin='40px'
              InputLabelProps={{
                shrink: true,
                color: 'black',
              }}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.errors.email}
            />

            {/* <span className={classes.textField}>  { formik.errors.email && formik.errors.email }</span> */}
            <InputLabel className={classes.inputlable}> Password</InputLabel>
            <TextField
              id='password'
              type='password'
              style={{ marginBottom: '40px', borderBottom: ' 1px' }}
              placeholder=''
              name='password'
              fullWidth
              margin='40px'
              InputLabelProps={{
                shrink: true,
              }}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.errors.password}
            />
               <InputLabel className={classes.inputlable}>Confirm Password</InputLabel>
            <TextField
              id='cpassword'
              type='password'
              style={{ marginBottom: '40px', borderBottom: ' 1px' }}
              placeholder=''
              name='cpassword'
              fullWidth
              margin='40px'
              InputLabelProps={{
                shrink: true,
              }}
              value={formik.values.cpassword}
              onChange={formik.handleChange}
              error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
              helperText={formik.errors.cpassword}
            />
            {/* <span className={classes.textField}> { formik.errors.password && formik.errors.password }</span> */}
          </div>
          <button
            className='signbutton'
            type='submit'
            style={{ marginTop: '50px' }}
          >
            <span className='signbuttontext'> Sign Up</span>
          </button>
        </form>
      </div>
      <a
        href='#'
        onClick={() => {
          setSingup(0);
        }}
        style={{
          border: '0px',
          marginTop: '120px',
          height: '25px',
          textDecoration: 'none',
          color: 'inherit',
          fontSize: '12px',
        }}
      >
        <span className={classes.textField}>
          already have an account,sign in
        </span>
      </a>
    </div>
  );
}
