import React, { useContext, useEffect } from "react";
import "../Academy.css";
import { AuthContext } from "../AuthProvider";
import { Cart } from "./Cart";
import { ShopContent } from "./ShopContent";
import ShopNavbar from "./ShopNavbar";
export const Shop = () => {
  const authcontext = useContext(AuthContext);
  const setAcadNavbar = authcontext.value.setAcadnavbar;
  const setNavbar = authcontext.value.setNavbar;
  const screensize=(window.screen.width)>1100;
  useEffect(() => {
    setNavbar(0);
  }, [setAcadNavbar]);
  return (
    <>
      <div className="academyshopMain" >
        <ShopNavbar />
        <div className="shopcontentdiv">
          <ShopContent />
        </div>
        {screensize&&(<div >
          <Cart />
        </div>)}
      </div>
    </>
  );
};
