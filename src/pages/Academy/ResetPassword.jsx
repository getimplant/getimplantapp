import React ,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core';
import '../../firebase/config'
import { getFirestore } from "firebase/firestore";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import * as yup from "yup";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Toast from 'react-bootstrap/Toast'
import InputLabel from '@material-ui/core/InputLabel';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginRight:'100px',
      flexWrap: 'wrap',
      height:"470px",
      width:"100%"
    },
    inputlable:{
      fontFamily: "Poppins",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "12px",
lineHeight: "18px",
display: "flex",
alignItems: "center",
color: "#000000"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 'fullWidth',
      fontSize:'12px',
      
    },
    inputfields:{
    marginTop:"30px",
    width:"100%",
    }

  }));
export default function ResetPassword({setResetEmail}) {
    const classes = useStyles();
    const [emailsent,setEmailSent]=useState(false)
    const validationSchema = yup.object({
      email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
     
   
       
       
      });
      const initialValues = {

        email: "",
      
      };
      const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
          submitloginform(values)
        },
      });
    const submitloginform=(e)=>{
      
      
      const auth=getAuth()
      const email=e.email;
   
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setEmailSent(true)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    return (
        <div className={classes.root}>
         {emailsent?<span><Button onClick={()=>setResetEmail(false)}>Email sent,Login here</Button></span>: <div>
            <form id="loginform" onSubmit={formik.handleSubmit}>
          <div className={classes.inputfields}>
            <InputLabel  className={classes.inputlable}> <b> Email address/Username</b></InputLabel>
            <TextField
              id="email"
              
              style={{ margin: 8 }}
              placeholder=""
              className={classes.textField}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                color:'black'
              }}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              
            />
           
              </div>
           <Button type="submit" style={{marginLeft:'0%',marginTop:'20px',border:'0px', fontSize:'12px'}} variant="outlined" color="black">
            Send Reset password Email</Button>
           <Button style={{marginLeft:'0%',marginTop:'20px',border:'0px', fontSize:'12px'}} variant="outlined" color="black" onClick={()=>setResetEmail(false)}>Go back to login</Button>
          </form>
          </div>
}
        </div>
      );
}

 

