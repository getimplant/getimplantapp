import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import "../../firebase/config";
import FormControl from "@mui/material/FormControl";
import * as yup from "yup";
import "../../components/Modals/Bookaslot.css";
import { useFormik } from "formik";
import InputLabel from "@material-ui/core/InputLabel";

import "../Academy/Academy.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "100px",

    height: "370px",
    width: "100%",
  },

  inputfields: {
    width: "100%",
    marginTop: "0px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  inputlable: {
    marginBottom: "15px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
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
    fontSize: "12px",
    lineHeight: "18px",

    /* identical to box height */
    display: "flex",
    alignItems: "center",

    /* Get Implant/Read */
    color: "#000000",
  },
  nextbutton: {
    justifyContent: "center",
    alignItems: "center",
    padding: "1px 0px",

    width: "auto",
    height: "32px",

    /* Get Implant/Read */
    background: "#000000",
    borderRadius: "6px",
  },
  textField: {
    width: "100%",
  },
}));
export default function Singupform({ setModal, setUserdata, accesstoken }) {
  const classes = useStyles();

  const validationSchema = yup.object({
    username: yup
      .string("Enter your username")
      .required("username is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    address: yup
      .string("Enter your address")
      .min(5)
      .max(5)
      .required("area postal code is required"),
  });
  const initialValues = {
    email: "",
    username: "",
   
  };
  const Submitsingupform = (e) => {
    const username = e.username;
    const email = e.email;
    const address = parseInt(e.address);
    let values = {
      username,
      email,
      address,
    };
    setUserdata(values);
    setModal(17);
    // console.log("values set at",values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      Submitsingupform(values);
    },
  });

  return (
    <div className="bookaslotsection">
      <form onSubmit={formik.handleSubmit}>
        <FormControl className="singupsectioninput">
          <InputLabel
            className={classes.inputlable}
            style={{ marginTop: "100px" }}
          >
            {" "}
            Name
          </InputLabel>
          <TextField
            id="username"
            className={classes.textField}
            placeholder=""
            name="username"
            fullWidth
            InputLabelProps={{
              shrink: true,
              color: "black",
            }}
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.errors.username}
          />
          {/* <span className={classes.textField}>  { formik.errors.username && formik.errors.username }</span> */}
          <InputLabel className={classes.inputlable}> Email address</InputLabel>
          <TextField
            id="email"
            className={classes.textField}
            placeholder=""
            name="email"
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
          <InputLabel className={classes.inputlable}>
            {" "}
            Area Postal Code(US only)
          </InputLabel>
          <TextField
            id="address"
            className={classes.textField}
            name="address"
            InputLabelProps={{
              shrink: true,
              color: "black",
            }}
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.errors.address}
          />
          {/* <span className={classes.textField}>  { formik.errors.email && formik.errors.email }</span> */}

          {/* <span className={classes.textField}> { formik.errors.password && formik.errors.password }</span> */}
        </FormControl>
        <div className="buttonsection">
          {accesstoken !== "" ? (
            <button
              className={classes.nextbutton}
              type="submit"
              id="submitbtn"
              style={{ width: "30%" }}
            >
              <span className="signbuttontext"> Next</span>
            </button>
          ) : (
            <button
              className={classes.nextbutton}
              type="submit"
              id="submitbtn"
              style={{}}
              disabled
            >
              <span className="signbuttontext">Loading</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
