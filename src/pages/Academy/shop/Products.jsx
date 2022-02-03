import React, { useEffect, useState } from "react";
import Product from "./Product";
import productimage from "../../../assets/productimg.png";
import Grid from "@mui/material/Grid";
import membership1 from "../../../assets/customimages/membership1.png";
import membership2 from "../../../assets/customimages/membership2.png";
import course1 from "../../../assets/customimages/course1.png";
import course2 from "../../../assets/customimages/course2.png";
import { Getfirestore, Getsingleproduct } from "../Usefirestore";
import { CircularProgress } from "@mui/material";
const Products = ({ type, limit }) => {
  let products = [];
  const implants = [];
  const memberships = [];
  const courses = [];
  useEffect(()=>{},[type])
  {
    type == "implants"
      ? (products = implants)
      : type == "membership"
      ? (products = memberships)
      : (products = courses);
  }
  const [p, setP] = useState([]);
  let ch = [];
  const [k, setK] = useState(false);
  useEffect(async () => {
  
    // console.log(p)
    let d = await Getfirestore();
    let r = await d;
    await setP(r);
    // setfunc(r);
    // console.log(p)
  }, []);
  useEffect(async () => {
    await sleep(2000);

    ch = p;
   
    setK(ch);
  }, [p]);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  p.forEach((element) => {
    let document = element._document.data.value.mapValue.fields;
    let id = element._key.path.segments[6];
    if (document.productcatagory.stringValue == "implants") {
      implants.push({
        name: document.productname.stringValue,
        desc: document.productdesc.stringValue,
        price: document.productprice.stringValue,
        images: element.images,
        id: id,
      });
    } else if (document.productcatagory.stringValue == "courses") {
      courses.push({
        name: document.productname.stringValue,
        desc: document.productdesc.stringValue,
        price: document.productprice.stringValue,
        descprice: document.productdescprice.stringValue,
        images: element.images,
        id: id,
      });
    } else if (document.productcatagory.stringValue == "membership") {
      memberships.push({
        name: document.productname.stringValue,
        desc: document.productdesc.stringValue,
        price: document.productprice.stringValue,
        images: element.images,
        id: id,
      });
    }
  });
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return k ? ((
    <div>
      <Grid container xm={12}>
        <Product products={products} type={type} limit={limit} />
      </Grid>
    </div>
  )):(<CircularProgress />);
};

export default Products;
