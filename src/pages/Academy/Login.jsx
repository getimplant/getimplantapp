import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import "../../firebase/config";
import { useFormik } from "formik";
import * as yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import InputLabel from "@material-ui/core/InputLabel";
import ResetPassword from "./ResetPassword";
import { Toast } from "react-bootstrap";
import "./Academy.css";
import { AuthContext } from "./AuthProvider";
import { Redirect, useHistory } from "react-router";
import { readuserdata } from "./Usefirestore";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginRight: "100px",
    flexWrap: "wrap",
    height: "470px",
    width: "100%",
    position: "relative",
  },
  textField: {
    widht: "100%",
  },
  inputfields: {
    width: "100%",
    marginTop: "30px",
  },
  inputlable: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    marginBottom: "20px",
    fontSize: "12px",
    lineHeight: "18px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  loginlinktext: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "8px",
    lineHeight: "18px",
  },
}));
export default function Login({ setSingup, message, setMessage }) {
  const classes = useStyles();
  const [resetemail, setResetEmail] = useState(false);
  const [isamember,setIsamember]=useState(0);
  const history = useHistory();
  const context = useContext(AuthContext);
  const userdata=context.value.userdata;
 
  const alreadyloggedin = () => {
    setMessage("you are already logged in,redirecting...");
    setTimeout(() => {
      history.push("/academy/members");
    }, 5000);
  };
  useEffect(() => {
    context.value.user && context.value.user.emailVerified && alreadyloggedin();
  }, []);
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),

    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const initialValues = {
    password: "",
    email: "",
  };
  // useEffect(()=>{
  // verifyed&&history.push("/academy/members")
  // },[verifyed])
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitloginform(values);
    },
  });
  const submitloginform = (e) => {
    const auth = getAuth();
    const email = e.email;
    const password = e.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        const userdata=readuserdata();
        if(userdata.hasOwnProperty('isamember')){
         if(userdata.isamember===true){
          cred.user.emailVerified && history.push("/academy/members");
         }
         else{
          cred.user.emailVerified && history.push("/academy/shop");
         }
        }
       else{
        cred.user.emailVerified && history.push("/academy/shop");
       }
        
        
      })
      .catch((error) => {
        setMessage("");
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("password entered is wrong");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };
  return resetemail ? (
    <ResetPassword setResetEmail={setResetEmail} />
  ) : (
    <div className={classes.root}>
      <div style={{ width: "100%" }}>
        {message != "" && (
          <Toast onClose={() => setMessage("")} show={message}>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        )}
        <form id="loginform" onSubmit={formik.handleSubmit}>
          <div className={classes.inputfields}>
            <InputLabel className={classes.inputlable}>
              {" "}
              <b> Email address/Username</b>
            </InputLabel>
            <TextField
              id="email"
              style={{ marginBottom: "30px", borderBottom: " 1px" }}
              placeholder=""
              className={classes.textField}
              fullWidth
              InputLabelProps={{
                shrink: true,
                color: "black",
              }}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.errors.email}
            />
            {/* <span className={classes.textField}> { formik.errors.email && formik.errors.email }</span> */}
            <InputLabel className={classes.inputlable}>
              {" "}
              <b>Password</b>
            </InputLabel>
            <TextField
              id="password"
              className={classes.textField}
              type="password"
              style={{ marginBottom: "0px", borderBottom: " 1px" }}
              placeholder=""
              name="password"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.errors.password}
            />
            {/* <span className={classes.textField}>{ formik.errors.password && formik.errors.password }</span> */}
          </div>
          <button
            type="submit"
            className="loginbutton"
            variant="contained"
            color="primary"
          >
            <span className="loginbuttontext">Sing In</span>
          </button>
        </form>
        <a
          href="#"
          style={{
            textDecoration: "none",
            marginTop: "20px",
            color: "inherit",
          }}
          variant="outlined"
          onClick={() => {
            setResetEmail(true);
          }}
        >
          <span className={classes.loginlinktext}>Forgot password?</span>
        </a>
        <br />
      </div>
      <a
        href="#"
        className={classes.loginlinktext}
        style={{
          textDecoration: "none",
          height: "25px",
          marginTop: "170px",
          color: "inherit",
        }}
        onClick={() => {
          setSingup(1);
        }}
      >
        <span className={classes.loginlinktext} style={{ fontSize: "12px" }}>
          New here,create an account
        </span>
      </a>
    </div>
  );
}
