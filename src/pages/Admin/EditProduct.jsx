import React, { useEffect,useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import AdminNavbar from "./AdminNavbar";
import "./admin.css";
import { useFormik } from "formik";
import * as yup from "yup";
import UploadImages from "./UploadImages";
import { InputLabel, TextField } from "@material-ui/core";
import {updateproduct} from '../Academy/Usefirestore';
const EditProduct = ({ setNavbar ,editproduct,iD,setEdit}) => {
  useEffect(() => {
    setNavbar(0);
    
  }, []);
 
  const validationSchema = yup.object({
    productcatagory: yup
      .string("Enter  Catagory")
      
      .required("Catagory is required"),
      productname: yup
      .string("Enter  Name")
     
      .required("Name is required"),
      productprice: yup
      .string("Enter price")
     
      .required("Price is required"),
      productdesc: yup
      .string("Enter Product denscriptio")
     
      .required("Desc is required"),
      // productimages: yup
      // .string("Enter your email")
      
      // .required("Email is required"),
   
  });
  const initialValues = {
    productcatagory:editproduct[0]._document.data.value.mapValue.fields.productcatagory.stringValue,
    productname: editproduct[0]._document.data.value.mapValue.fields.productname.stringValue,
    productprice:editproduct[0]._document.data.value.mapValue.fields.productprice.stringValue,
    productdesc: editproduct[0]._document.data.value.mapValue.fields.productdesc.stringValue,
    productdescprice: editproduct[0]._document.data.value.mapValue.fields.productdescprice.stringValue,
    productimages:""
  };
  // useEffect(()=>{
  // verifyed&&history.push("/academy/members")
  // },[verifyed])
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      Submitloginform(values);
    },
  });
  const Submitloginform = async(e) => {
    await updateproduct(e,iD)
    .then((res)=>{
      alert("product updated successfully");
      window.location.reload();
    });
  //  console.log(e);
  };
  // const handleChange = () => {};
  return (
    <>
      <AdminNavbar />
      <div className="maincontentdiv">
        <span>Edit Product</span>
       
        <form id="loginform" onSubmit={formik.handleSubmit}>
       
          <div className="flexcontent">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="productcatagory"
                name="productcatagory"
                //value={}
                label="Age"
                value={formik.values.productcatagory}
                onChange={formik.handleChange}
                error={formik.touched.productcatagory && Boolean(formik.errors.productcatagory)}
                helperText={formik.errors.productcatagory}
                //onChange={handleChange}
              >
                <MenuItem value="implants">Implants</MenuItem>
                <MenuItem value="courses">Courses</MenuItem>
                <MenuItem value="membership">Membership</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flexcontent">
            <FormControl fullWidth>
              <TextField
                labelId="demo-simple-select-label"
                id="productname"
                name="productname"
                //value={}
                //   style={{border:"1px solid"}}
                variant="outlined"
                label="Name"
                value={formik.values.productname}
                onChange={formik.handleChange}
                error={formik.touched.productname && Boolean(formik.errors.productname)}
                helperText={formik.errors.productname}
              />
            </FormControl>
          </div>
          <div className="flexcontent">
            <FormControl fullWidth>
              <TextField
                labelId="demo-simple-select-label"
                id="productprice"
                name="productprice"
                //value={}
                //   style={{border:"1px solid"}}
                variant="outlined"
                label="Price"
                value={formik.values.productprice}
                onChange={formik.handleChange}
                error={formik.touched.productprice && Boolean(formik.errors.productprice)}
                helperText={formik.errors.productprice}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                labelId="demo-simple-select-label"
                id="productdescprice"
                name="productdescprice"
                //value={}
                //   style={{border:"1px solid"}}
                variant="outlined"
                label="Discount Price"
                value={formik.values.productdescprice}
                onChange={formik.handleChange}
                error={formik.touched.productdescprice && Boolean(formik.errors.productdescprice)}
                helperText={formik.errors.productdescprice}
              />
            </FormControl>
          </div>
          <div className="flexcontent">
            <FormControl fullWidth>
              <TextField
                labelId="demo-simple-select-label"
                id="productdesc"
                name="productdesc"
                //value={}
                multiline
                rows={5}
                //   maxRows={4}
                variant="outlined"
                label="Description"
                value={formik.values.productdesc}
                onChange={formik.handleChange}
                error={formik.touched.productdesc && Boolean(formik.errors.productdesc)}
                helperText={formik.errors.productdesc}
              />
            </FormControl>
          </div>
          <div className="flexcontent">
            <FormControl fullWidth>
              <Button variant="contained" type="submit">
                Update
              </Button>
            </FormControl>
            <FormControl fullWidth>
              <Button variant="outlined" onClick={()=>{
                setEdit(false);
              }}>Cancel</Button>
            </FormControl>
          </div>
        </form>
      </div>
      <Divider  />
    </>
  );
};

export default EditProduct;
