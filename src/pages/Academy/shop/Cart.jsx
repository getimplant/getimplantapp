import { Grid, Paper, Card, Divider, CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import cartvector from "../../../assets/cartvector.png";
import CartItem from "./CartItem";
import { getcart } from "./Shopactions";
import { AuthContext } from "../AuthProvider";
import CartTotal from "./CartTotal";
import { Badge } from "@mui/material";
import "../Academy.css";
export const Cart = ({ type }) => {
  const context = useContext(AuthContext);

 
  return  context.value.cartdata? (
    <div className="cartdivmain">
      <div style={{ display: "flex", flexDirection: "column" }}>
        {type !== "mobile" && (
          <div className="cartheader">
            <Badge badgeContent={context.value.cartdata[0].length} color="primary">
              <img
                src={cartvector}
                style={{ marginLeft: "20px", marginTop: "10px" }}
              />
            </Badge>

            <span
              style={{
                fontSize: "12px",
                marginLeft: "10px",
                marginTop: "0px",
              }}
            >
              <b>Cart</b>
            </span>
          </div>
        )}
        <div className="cartbody">
          {context.value.cartdata[0].map((cartitem) => {
            return <CartItem cartitem={cartitem} type={type} />;
          })}
        </div>

        <div className="cartfooter">
          <Divider />
          <CartTotal />
          <button className="cartcheckoutbtn">
            <span>Make Payment</span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <CircularProgress />
  );
};
