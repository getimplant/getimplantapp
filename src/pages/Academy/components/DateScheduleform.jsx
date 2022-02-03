import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AuthContext } from "../AuthProvider";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginRight: "100px",
    flexWrap: "wrap",

    width: "100%",
  },
  textField: {
    marginLeft: "100px",
    marginRight: "100px",
    width: "70%",
    fontSize: "12px",
  },
  inputfields: {
    marginTop: "30px",
    marginLeft: "30px",
    height: "60px",
  },
  datescheduleformbutton: {},
}));
export default function DateScheduleform({
  getslots,
  bookslot,
  avalibleslots,
  
  setPending,
  staff,
  
  getstaffs,
  datevalue,
}) {
  const classes = useStyles();
  useEffect(() => {
    
    let formatted_date =
      datevalue.getDate() +
      "-" +
      (datevalue.getMonth() + 1) +
      "-" +
      datevalue.getFullYear();
    getslots(formatted_date);
    getstaffs().then(()=>setPending(false));
  }, [datevalue]);
  
  const validationSchema = yup.object({
    timeslot: yup.string().ensure().required("please chose a timeslot"),

    staffid: yup.string().ensure().required("please chose a clinic"),
  });
  const initialValues = {
    timeslot: "",
    staffid: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let formatted_date =
        datevalue.getDate() +
        "-" +
        (datevalue.getMonth() + 1) +
        "-" +
        datevalue.getFullYear();
      const from_time = formatted_date + " " + values.timeslot + ":00";

      const staffid = values.staffid;

      bookslot(from_time, staffid);
    },
  });
  // useEffect(() => {
  //   console.log(avalibleslots);
  // }, [avalibleslots]);
  return (
    <div style={{ position: "relative" }}>
      <span className="datescheduletitle">Details filling section </span>
      <form id="loginform" onSubmit={formik.handleSubmit}>
        <div className={classes.inputfields}>
          <FormControl sx={{ m: 1, minWidth: 320 }}>
            <InputLabel
              style={{ fontSize: "12px", color: "black", marginLeft: "10px" }}
            >
              {" "}
              <b> Avalible Clinics</b>
            </InputLabel>
            <Select
              name="staffid"
              id="staffid"
              onChange={formik.handleChange}
              value={formik.values.staffid}
              label="Age"
              weidth="200px"
            >
              <MenuItem value="">chose a timeslot</MenuItem>

              {staff &&
                staff.map((clinic, index) => {
                  return (
                    <MenuItem key={index} value={clinic.id}>
                      {clinic.name}
                      <span>
                        <i> {"___" + clinic.destancefromuser}km away</i>
                      </span>
                    </MenuItem>
                  );
                })}
            </Select>

            <span className={classes.textField}>
              {formik.errors.staffid && formik.errors.staffid}
            </span>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 320 }}>
            <InputLabel
              style={{ fontSize: "12px", color: "black", marginLeft: "10px" }}
              id="demo-simple-select-helper-label"
            >
              {" "}
              <b> Avalible slots</b>
            </InputLabel>
            <Select
              name="timeslot"
              id="timeslot"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={formik.handleChange}
              value={formik.values.timeslot}
            >
              <MenuItem value="">chose a timeslot</MenuItem>
              {avalibleslots &&
                avalibleslots.map((slot, index) => {
                  return (
                    <MenuItem key={index} value={slot}>
                      {slot}
                    </MenuItem>
                  );
                })}
            </Select>
            <span className={classes.textField}>
              {formik.errors.timeslot && formik.errors.timeslot}
            </span>
          </FormControl>
          {/* <TextField
              id="email"
              type="select"
              style={{ margin: 8 }}
              placeholder=""
              className={classes.textField}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                color:'black'
              }}
              // value={formik.values.email}
              // onChange={formik.handleChange}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              
            /> */}
          {/* <span className={classes.textField}> { formik.errors.email && formik.errors.email }</span> */}
        </div>
        <button type="submit">
          <span> Book service</span>
        </button>
      </form>
    </div>
  );
}
