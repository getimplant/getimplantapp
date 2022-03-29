import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
import "./Academy.css";
import Singup from "./Singup";
import Login from "./Login";
import Box from "@material-ui/core/Box";
import Academynavbar from "./Academynavbar";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
import * as polyline from "@mapbox/polyline";
import { getdistance } from "../../Actions/getdistance";
import { useLocation } from 'react-router-dom';
export default function Academy({ setNavbar, setMenu }) {
  const authcontext = useContext(AuthContext);
  const acadnavbar = authcontext.value.acadnavbar;
  const setMessage = authcontext.value.setMessage;
  const message = authcontext.value.message;
  const singup = authcontext.value.singup;
  const setSingup = authcontext.value.setSingup;
  const history=useHistory();
  const location =useLocation();
  const currUrl=location.pathname.slice(0,-6);
  let classname = "academyMain";
  {
    singup ? (classname = "singuppage") : (classname = "academyMain");
  }

  
  useEffect(() => {
    setNavbar(0);
  }, [setNavbar]);
  useEffect(() => {
    // getdistance("Houston TX USA","Hi Dental Care East Freeway Houston TX USA");
  }, []);
  return (
    <div>
      <>
        {acadnavbar && <Academynavbar setMenu={setMenu} />}
        <div className={classname}>
          <Box display="flex" flexDirection="row-reverse">
            <Box className="logindiv">
              <Card style={{ borderRadius: "12px" }}>
                <CardContent>
                  {singup==1 && (
                    setSingup(0),window.location.replace(currUrl+"/beamember"))}
                   {singup==2&&(<Singup
                      setSingup={setSingup}
                      message={message}
                      setMessage={setMessage}
                    />)}
                  {singup==0&&(<Login
                      setSingup={setSingup}
                      message={message}
                      setMessage={setMessage}
                    />)}
                  
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Box>
          </Box>
        </div>
      </>
    </div>
  );
}
