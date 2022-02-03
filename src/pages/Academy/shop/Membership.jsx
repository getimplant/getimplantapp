import React from "react";
import Grid from "@mui/material/Grid";
import { Paper } from "@material-ui/core";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Mainbuttons from "./productactions/Mainbuttons";
import '../Academy.css'
import './Product.css'
const Membership = ({ products,limit }) => {
  return (
    <div className="productmain">
      {products.slice(0,limit).map((membership) => {
        return (
          <div className="membershipdiv">
            <Paper elevation={3}>
              <div
                container
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div>
                  <div>
                    {membership.images.slice(0,1).map((image)=>{
                     return <img className="membershipimg" src={image} />
                    })}
                  </div>
                </div>
                <div item>
                  <div className="membershipdetails">
                    <span>
                      <b>{membership.name}</b>
                    </span>
                    <br />
                    <br />
                    <span>$ {membership.price}/-</span>
                    <br />
                    <div className="membershipmainbutton">
                    <Mainbuttons product={membership} qty={1} />
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

export default Membership;
