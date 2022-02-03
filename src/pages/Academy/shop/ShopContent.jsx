import { Divider } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import Products from "./Products";
import { AuthContext } from "../AuthProvider";
import cartvector from "../../../assets/cartvector.png";
import { Cart } from "./Cart";
import { Badge } from "@mui/material";
import "../Academy.css";
export const ShopContent = () => {
  const context = useContext(AuthContext);
  const [mobilecart, setMobilecart] = useState(false);
  const setType = context.value.setType;
  const type = context.value.type;
  const screensize = window.screen.width < 1100;
  const cartcount = context.value.cartdata ? context.value.cartdata[0].length : 0;
  const setPending = context.value.setPending;
  return (
    <div>
      <div className="cartflexcontent">
        <div>
          <div style={{ maxWidth: "260px" }}>
            <NavLink
              href="#"
              onClick={() => {
                setType("implants");
                setMobilecart(0);
              }}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
                fontWeight: "bolder",
              }}
            >
              Implants
            </NavLink>
            <NavLink
              href="#"
              onClick={() => {
                setType("membership");
                setMobilecart(0);
              }}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
                fontWeight: "bolder",
                marginLeft: "30px",
              }}
            >
              Membership
            </NavLink>
            <NavLink
              href="#"
              onClick={() => {
                setType("courses");
                setMobilecart(0);
              }}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
                fontWeight: "bolder",
                marginLeft: "30px",
              }}
            >
              Courses
            </NavLink>
          </div>
        </div>
        <div>
          {screensize && (
            <Badge badgeContent={cartcount} color="primary">
              <NavLink
                href="#"
                style={{ textDecoration: "none", marginLeft: "30px" }}
                onClick={() => {
                  mobilecart ? setMobilecart(0) : setMobilecart(1);
                }}
              >
                <img
                  src={cartvector}
                  style={{ marginLeft: "20px", marginTop: "10px" }}
                />
              </NavLink>
            </Badge>
          )}
        </div>
      </div>
      {!mobilecart ? <Products type={type} /> : <Cart type="mobile" />}
    </div>
  );
};
