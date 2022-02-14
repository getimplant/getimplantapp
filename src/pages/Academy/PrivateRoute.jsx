import React, { useContext,useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import AcademyContent from "./AcademyContent";
import {readuserdata } from './Usefirestore'
import Profile from "./Profile"
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { value } = useContext(AuthContext);
  const history = useHistory();
  
 
  useEffect(async()=>{
    const a=await readuserdata();
    const b= await a;
    // console.log(b.isamember)
  
    if (RouteComponent == AcademyContent || RouteComponent == Profile) {
      
      if (b.hasOwnProperty("isamember")) {
        if (b.isamember === false) {
          history.push("/academy/beamember");
        }
        else{
          history.push("/academy/members");
        }
      } else {
        history.push("/academy/beamember");
      }
    }
  },[])
  const setMessage = value.setMessage;
 
  
  return (
    <Route
      {...rest}
      render={() =>
        !!(value.user && value.user.emailVerified) ? (
          <RouteComponent {...rest} />
        ) : (
          (!value.user
            ? setMessage("Please login first")
            : setMessage("email not verified,please do verify first"),
          (<Redirect to="/login" />))
        )
      }
    />
  );
};

export default PrivateRoute;
