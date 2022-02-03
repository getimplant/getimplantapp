import React, { useState } from "react";
import "./Implantexpended.css";
import { Paper } from "@material-ui/core";
import Mainbuttons from "./productactions/Mainbuttons";
import IncrDecrButton from "./productactions/IncrDecrButton";

import { Carousel } from "react-responsive-carousel";
export default function Implantexpended({ item, setOpen,open,index }) {
  const [selectedimage, setSelectedImage] = useState("");
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }
  const cardOpenHandler = () => {
    if (open === index + 1) {
      setOpen(0);
    } else {
      setOpen(index + 1);
    }
  };
  return (
    <>
      <div className="expendedimplantdiv">
        <div className="implantimagetiles">
          {item.images.length ? (
            item.images.map((image) => {
              return (
                <div className="">
                  <img
                    src={image}
                    className="producttilesimage"
                    onClick={() => {
                      setSelectedImage(image);
                    }}
                  />
                </div>
              );
            })
          ) : (
            <img src="#" className="productimage" />
          )}
        </div>
        <div className="expendedimplantdivimage">
          {selectedimage ? (
            <img src={selectedimage} className="imagedivimage" />
          ) : (
            item.images.slice(0, 1).map((image) => {
              return <img src={image} className="imagedivimage" />;
            })
          )}
        </div>
        <div className="expandedimplantdetails">
          <span>
            <b>{item.name}</b>
          </span>
          <br />
          <span className="productprice">$ {item.price}</span>

          <div className="productdisc">
            <p style={{ fontWeight: "300" }}>{limit(item.desc, 200)}<a href="#" style={{textDecoration:"none",color:"black",fontSize:"12px"}}onClick={()=>{
               setOpen(cardOpenHandler)
              }}>...see less</a></p>
          </div>
          <span style={{ fontSize: "12px" }}>Variants</span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <form>
                <select name="cars" id="cars" className="productvariantselect">
                  <option value="#">select a variant</option>
                </select>
              </form>
            </div>
            <div style={{ marginTop: "10px", marginLeft: "50px" }}>
              <IncrDecrButton product={item} />
            </div>
          </div>
          <div className="mainbuttons">
            <Mainbuttons product={item} qty={1} />
          </div>
        </div>
      </div>
    </>
  );
}
