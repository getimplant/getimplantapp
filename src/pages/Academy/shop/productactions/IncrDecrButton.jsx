import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import { Button } from "@mui/material";
import { addtocart } from "../Shopactions";
import { NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "./ActionButtons.css";
const IncrDecrButton = ({ product }) => {
  const context = useContext(AuthContext);
  const setCartdata = context.value.setCartdata;
  const currentuser = context.value.user.uid;
  const setPending = context.value.setPending;
  return (
    <>
      <div className="incrdecrbuttons">
        <a
          onClick={() => {
            addtocart(product, currentuser, 1, setCartdata, setPending);
          }}
          onmouseover="" style={{cursor: "pointer"}}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </a>

        <span
          style={{ marginTop: "0px", marginLeft: "8px", marginRight: "4px" }}
        >
          <span> {product.qty}</span>
        </span>
        <a
          onClick={() => {
            addtocart(
              product,
              currentuser,
              Math.sign(-1),
              setCartdata,
              setPending
            );
          }}
          onmouseover="" style={{cursor: "pointer"}}
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </a>
      </div>
      {/* <NavLink to="#" onClick={()=>{
            setProductadded(product);
            addtocart(product,currentuser,"remove");
      }} style={{textDecoration:"none",color:"black",marginLeft:"10px"}}>Remove</NavLink> */}
    </>
  );
};

export default IncrDecrButton;
