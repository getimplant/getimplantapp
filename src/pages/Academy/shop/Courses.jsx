import React from "react";
import Grid from "@mui/material/Grid";
import { Paper } from "@material-ui/core";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Mainbuttons from "./productactions/Mainbuttons";
import vectorpassthrough from '../../../assets/Vectorpassthrough.png'
import "../Academy.css";
import "./Product.css"
export const Courses = ({ products ,limit}) => {
  return (
    <div className="productmain" >
      {products.slice(0,limit).map((course) => {
        return (
          <div className="coursediv" style={{marginBottom:"20px"}}>
            <Paper elevation={3}>
              <div
                container
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div>
                  <div>
                  {course.images.slice(0,1).map((image)=>{
                     return <img className="courseimg" src={image} />
                    })}
                  </div>
                </div>
                <div>
                  <div className="coursedetails">
                    <span>
                      <b>{course.name}</b>
                    </span>
                    <br />
                    <span>$ {course.price}<img className="digonalpassthrough" src={vectorpassthrough}/></span>
                    <span>$ {course.descprice}</span>
                    
                  </div>
               <div style={{marginLeft:"20px",marginBottom:"10px"}} className="coursemainbuttons">   <Mainbuttons product={course} qty={1} /></div>
                </div>
              </div>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};
