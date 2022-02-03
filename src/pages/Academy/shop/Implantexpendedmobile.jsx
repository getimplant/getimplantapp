import React, { useState } from "react";
import "./Implantexpended.css";
import Mainbuttons from "./productactions/Mainbuttons";
import IncrDecrButton from "./productactions/IncrDecrButton";
export default function Implantexpendedmobile({ item, setOpen,open,index }) {
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
        <div className="expendedimplantdivimage">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
              marginTop: "50px",
            }}
          >
            {item.images.length ? (
              item.images.slice(0, 2).map((image) => {
                return (
                  <img
                    src={image}
                    className="producttilesimage"
                    style={{ marginLeft: "15px" }}
                    onClick={() => {
                      setSelectedImage(image);
                    }}
                  />
                );
              })
            ) : (
              <img src="#" className="productimage" />
            )}
          </div>
          <div>
            {selectedimage ? (
              <img src={selectedimage} className="imagedivimage" />
            ) : (
              item.images.slice(2, 3).map((image) => {
                return <img src={image} className="imagedivimage" />;
              })
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            {item.images.length ? (
              item.images
                .slice(item.images.length / 2, item.images.length - 1)
                .map((image) => {
                  return (
                    <img
                      src={image}
                      style={{ marginLeft: "15px" }}
                      className="producttilesimage"
                      onClick={() => {
                        setSelectedImage(image);
                      }}
                    />
                  );
                })
            ) : (
              <img src="#" className="productimage" />
            )}
          </div>
        </div>
        <div className="expandedimplantdetails">
          <span>
            <b>{item.name}</b>
          </span>
          <br />

          <div className="productdisc">
            <p style={{ fontWeight: "300" }}>{limit(item.desc, 50)}<a href="#" style={{textDecoration:"none",color:"black",fontSize:"12px"}} onClick={()=>{
               setOpen(cardOpenHandler)
              }}>...see less</a></p>
          </div>
          <span className="productvariant">Variants</span>

          <div>
            <form>
              <select name="cars" id="cars" className="">
                <option value="#" >select a variant</option>
              </select>
            </form>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop:"20px"
            }}
          >
            <div>
              <span className="productprice">$ {item.price}</span>
            </div>
            <div>
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
