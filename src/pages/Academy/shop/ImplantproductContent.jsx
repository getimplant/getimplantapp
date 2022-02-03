import React, { useState } from "react";
import "./ImplantItems.css";

import { Paper } from "@material-ui/core";

import Mainbuttons from "./productactions/Mainbuttons";
import IncrDecrButton from "./productactions/IncrDecrButton";

import "./Product.css";
function limit (string = '', limit = 0) {  
  return string.substring(0, limit)
}
export default function ImplantproductContent({ item ,setOpen,open,index}) {
  const cardOpenHandler = () => {
    if (open === index + 1) {
      setOpen(0);
    } else {
      setOpen(index + 1);
    }
  };
  return (
    <>
      <div className="productdiv">
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              {item.images.slice(0, 1).map((image) => {
                return <img src={image} className="productimg"/>;
              })}
            </div>

            <div className="productdetails">
         
              <span className="productname">{item.name}  </span>
              <span><a href="#" style={{textDecoration:"none",color:"black",fontSize:"12px"}}onClick={()=>{
               setOpen(cardOpenHandler)
              }}>...see more</a></span>
              <span style={{fontSize:"12px"}}></span>
              <span className="productvariant">Variants</span>
              <form>
                <select name="cars" id="cars" className="productvariantselect">
                  <option value="#">select a variant</option>
                </select>
              </form>
            
              <br />
              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="productdetailsprice"
              >
                <span style={{ marginRight: "20px" }}>$ {item.price} </span>
                <IncrDecrButton product={item} />
              
              </div>

              <Mainbuttons product={item} qty={1} />
            </div>
          </div>
        </>
      </div>
    </>
  );
}
