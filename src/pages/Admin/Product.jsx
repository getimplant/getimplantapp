import React, { useEffect, useState } from "react";
import {Getsingleproduct,deleteproduct} from '../Academy/Usefirestore';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Button } from "@material-ui/core";
import { AuthContext } from "../Academy/AuthProvider";
import "./admin.css";
const Product = ({ product ,setEdit,setID,setEditproduct}) => {
  function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
  }
  let desclimit=200;
  
  const handleEdit = async(id) => {
    
    let res=await Getsingleproduct(id);
    let product=await res;
    setEditproduct(product);
    setEdit(true);
    setID(id);
  };
  const handleDelete = async(id) => {
    await deleteproduct(id).then((res)=>{
     if(res){
      alert("product deleted successfully");
      window.location.reload();
     }else{
       alert("something went wrong ,please try again after sometime");
     }
    })
  };
  const document = product._document.data.value.mapValue.fields;
  const id = product._key.path.segments[6];
  
  return (
    product && (
      <>
        <TableRow>
          <TableCell>0</TableCell>
          <TableCell>
            <Carousel
              autoPlay="true"
              infiniteLoop={true}
              width="200px"
              showThumbs={false}
              showIndicators={false}
            >
              {product.images.length ? (
                product.images.map((image) => {
                  return (
                    <div>
                      <img
                        className="productimage"
                        src={image}
                        alt="First slide"
                      />
                    </div>
                  );
                })
              ) : (
                <img src="#" className="productimage" />
              )}
            </Carousel>
          </TableCell>
          <TableCell style={{ textAlign: "center" }}>
            {document.productname.stringValue}
          </TableCell>
          <TableCell style={{ textAlign: "center" }}>
            {document.productprice.stringValue}
          </TableCell>
          <TableCell style={{ textAlign: "center" }}>
            {
            
            limit(document.productdesc.stringValue,desclimit)}
            {/* <a href="#" onClick={()=>{
              return <p>{document.productdesc.stringValue}</p>
            }}>read more</a> */}
          </TableCell>
          <TableCell style={{ textAlign: "center" }}>
            {document.productcatagory.stringValue}
          </TableCell>
          <TableCell style={{ textAlign: "center" }}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEdit(id)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(id)}
              >
                Delete
              </Button>
            </Stack>
          </TableCell>
        </TableRow>
      </>
    )
  );
};
export default Product;
