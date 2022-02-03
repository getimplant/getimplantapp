import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import { Button } from "@mui/material";
import { addtocart } from "../Shopactions";
import "./ActionButtons.css";
const Mainbuttons = ({ product, qty, setShow, show }) => {
  const context = useContext(AuthContext);
  const setCartdata = context.value.setCartdata;
  const currentuser = context.value.user.uid;
  const setPending=context.value.setPending;
  return (
    <div className="shopmainbuttons">
      <button
        className="buynowbtn"
        onClick={() => {
          show == product.productid ? setShow(0) : setShow(product.productid);
        }}
        onmouseover="" style={{cursor: "pointer"}}
      >
       <span> Buy Now</span>
      </button>
      <button
      
        className="addtocartbtn"
        onClick={() => {
          {
           
            addtocart(product, currentuser, qty, setCartdata,setPending);
          }
        }}

        onmouseover="" style={{cursor: "pointer"}}
      >
       <span> Add to cart</span>
      </button>
    </div>
  );
};

export default Mainbuttons;
