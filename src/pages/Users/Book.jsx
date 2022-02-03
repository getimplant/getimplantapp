import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AuthContext } from "../Academy/AuthProvider";
import { CircularProgress } from "@material-ui/core";
import "../../components/Modals/Bookaslot.css";
import { bookaslot } from "../../Actions/bookaservice";
import SeeonMap from "./SeeonMap";
import { getgeocodes } from "../../Actions/getdistance";
const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "100px",

    width: "100%",
  },
  textField: {
    marginLeft: "100px",
    marginRight: "100px",
    width: "100%",
    fontSize: "12px",
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
}));
export default function Book({
  haveloaded,
  avalibleslots,

  staff,
  userdata,
  datevalue,
  slotbooked,
  setSlotbooked,
  accesstoken,
  setModal,
  setMessage,
}) {
  const classes = useStyles();
  const [seeonmap, setSeeonmap] = useState(false);
  const [coordinatespair, setCordinatepair] = useState([]);
  let clinicaddress = 0;
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
      setSlotbooked(false);
      let formatted_date =
        datevalue.getDate() +
        "-" +
        (datevalue.getMonth() + 1) +
        "-" +
        datevalue.getFullYear();
      const from_time = formatted_date + " " + values.timeslot + ":00";

      const staffid = values.staffid;

      accesstoken &&
        bookaslot(
          accesstoken,
          from_time,
          staffid,
          userdata,
          setSlotbooked,
          setMessage
        );
    },
  });
  const getclinicaddress = () => {
    let clinicaddress = 0;
    if (formik.values.staffid !== "") {
      staff.forEach((element) => {
        if (element.id === formik.values.staffid) {
          clinicaddress = element.address;
        }
      });
    }
    return clinicaddress;
  };

  const getgeo = async () => {
    clinicaddress = getclinicaddress();
    const cliniccodes = await getgeocodes(clinicaddress);
    const usercodes = await getgeocodes(userdata.address);
    const newarray = [
      cliniccodes[0][1],
      cliniccodes[0][0],
      usercodes[0][1],
      usercodes[0][0],
    ];
    setCordinatepair(newarray);
    setSeeonmap(true);
  };

  // if(pending){return (<CircularProgress />)}
  if (!haveloaded || !slotbooked) {
    return <CircularProgress />;
  }
  return (
    <div className="bookaslotsection">
      {seeonmap ? (
        <SeeonMap coordinatespair={coordinatespair} setModal={setModal}/>
      ) : (
        <form id="loginform" onSubmit={formik.handleSubmit}>
          <FormControl className="booksectioninput">
            <InputLabel style={{ fontSize: "12px", color: "black" }}>
              {" "}
              <b> Avalible Clinics</b>
            </InputLabel>
            <Select
              name="staffid"
              id="staffid"
              onChange={formik.handleChange}
              value={formik.values.staffid}
              label="Age"
              style={{ height: "50px" }}
              error={formik.touched.staffid && Boolean(formik.errors.staffid)}
              helperText={formik.errors.staffid}
            >
              <MenuItem value="" disabled>
                <em>please select a clinic nearby</em>
              </MenuItem>

              {staff &&
                staff.map((clinic, index) => {
                  return (
                    <MenuItem key={index} value={clinic.id}>
                      {clinic.name}
                      {clinic.destancefromuser && (
                        <span>
                          <i>
                            {" "}
                            {"---" + Math.trunc(clinic.destancefromuser)}km away
                          </i>
                        </span>
                      )}
                    </MenuItem>
                  );
                })}
            </Select>

            <span className={classes.textField}>
              {formik.errors.staffid && formik.errors.staffid}
            </span>
            {/* <a
              href="#"
              disabled
              onClick={() => {
                getgeo();
                
              }}
            >
              see on map
            </a> */}
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
              onChange={formik.handleChange}
              value={formik.values.timeslot}
              style={{ height: "50px" }}
              error={formik.touched.timeslot && Boolean(formik.errors.timeslot)}
              helperText={formik.errors.timeslot}
            >
              <MenuItem value="" disabled>
                <em>please select a suitable time slot</em>
              </MenuItem>
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

          <div className="buttonsection">
            <button
              className={classes.nextbutton}
              type="submit"
              style={{ marginTop: "0px" }}
            >
              <span className="signbuttontext"> Confirm</span>
            </button>
            <button
              className={classes.nextbutton}
              style={{ marginTop: "0px" }}
              onClick={() => {
                setModal(17);
              }}
            >
              <span className="signbuttontext"> Back</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
