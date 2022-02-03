import React from "react";
import { useEffect, useState, useContext } from "react";
import MembersNavbar from "./MembersNavbar";
import { TextField, Button, InputLabel } from "@material-ui/core";
import "./Academy.css";
import { FormLabel } from "react-bootstrap";
import "../../firebase/config";
import { AuthContext } from "./AuthProvider";
import { readuserdata } from "./Usefirestore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import "../../firebase/config";
import { getFirestore } from "firebase/firestore";
import * as yup from "yup";
import TableHead from "@material-ui/core/TableHead";
import { useFormik } from "formik";
import TableRow from "@material-ui/core/TableRow";
import pic from "../../assets/logoblack.png";
import { updateuserdata } from "./Usefirestore";
const EditProfileDetails = ({setEditprofile}) => {
  const profiledata = useContext(AuthContext);
  const [updated,setUpdated]=useState(false);
  const validationSchema = yup.object({
    username: yup
      .string("Enter your username")
      .required("username is required"),
      address: yup
      .string("Enter your address")
      .required("address is required"),
  });
  const initialValues = {
    address: "",
   
    username: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      Submitsingupform(values);
    },
  });
  const Submitsingupform=(e)=>{
    const username = e.username;
    const address = e.address;
    const value = { username, address };
    updateuserdata(value).then(()=>{
        window.location.reload()
    });
  }
  return (
    <>
      <div style={{ width: "50%" }}>
      <form onSubmit={formik.handleSubmit}>
        <Table className="table">
          <TableHead>
            <span>
              <b>Profile Details and editing</b>
            </span>{" "}
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Profile Image</TableCell>
              <TableCell>
                <img src={pic} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{profiledata.value.user.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
              
                Username
              </TableCell>
              <TableCell>
                <TextField
                  id="username"
                  className=""
               
                  placeholder=""
                  name="username"
                  fullWidth
                  margin="40px"
                  InputLabelProps={{
                    shrink: true,
                    color: "black",
                  }}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.errors.username}
                />
              </TableCell>
            </TableRow>
            <TableRow>
               <TableCell>
               Address
              </TableCell>
              <TableCell>
                <TextField
                  id="address"
                  className=""
                
                  placeholder=""
                  name="address"
                  fullWidth
                  margin="40px"
                  InputLabelProps={{
                    shrink: true,
                    color: "black",
                  }}
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.errors.address}
                />
              </TableCell>
            </TableRow>
            <br />
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Button variant="contained" color="primary" size="small" type="submit">
                  Update Profile
                </Button>
                <Button variant="contained" color="error" style={{marginLeft:"20px"}} size="small" type="button" onClick={()=>{
                    setEditprofile(false);
                }}>
                 Cancel
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </form>
      </div>
    </>
  );
};

export default EditProfileDetails;
