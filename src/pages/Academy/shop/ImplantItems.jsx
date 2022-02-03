import React, { useState } from "react";
import "./ImplantItems.css";
import "./Product.css";
import ImplantproductContent from "./ImplantproductContent";
import Implantexpended from "./Implantexpended";
import Implantexpendedmobile from "./Implantexpendedmobile";
import expandvector from "../../../assets/expandvector.png";
export default function ImplantItems({ item, index }) {
  const [open, setOpen] = useState(0);
  const screensize = window.screen.width < 1100;
  const cardOpenHandler = () => {
    if (open === index + 1) {
      setOpen(0);
    } else {
      setOpen(index + 1);
    }
  };
  return (
    <>
      {open === index + 1 ? <br /> : ""}
      <div
        className={
          "implantItemMain " + (open === index + 1 ? "active" : "inactive")
        }
      >
       
       <div style={{display:"flex",flexDirection:"row-reverse"}}>
       {/* //<a href="#" onClick={() => setOpen(cardOpenHandler)}> <img src={expandvector} style={{height:"10px",width:"10px"}}/></a> */}
       </div>
        {!open ? (
          <ImplantproductContent item={item} setOpen={setOpen} open={open} index={index}/>
        ) : screensize ? (
          <Implantexpendedmobile item={item} setOpen={setOpen} open={open} index={index}/>
        ) : (
          <Implantexpended item={item} setOpen={setOpen} open={open} index={index}/>
        )}
      </div>
      {open === index + 1 ? <br /> : ""}
    </>
  );
}
