import React, { useContext, useEffect, useState } from "react";
import "./Academy.css";
import Academynavbar from "./Academynavbar";
import { AuthContext } from "./AuthProvider";
import { useHistory } from "react-router";
import bg1 from '../../assets/beamember1.png';
import bg2 from '../../assets/beamember2.png';
import { useFormik } from "formik";
import * as yup from "yup";
import { useLocation } from 'react-router-dom';
export default function Beamenber({ setNavbar, setMenu }) {
  const context = useContext(AuthContext);
  const setType = context.value.setType;
  const setSingup = context.value.setSingup;
  const history = useHistory();
  const location=useLocation();
  const [nameerror,setnameerror]=useState("");
  const [lNumbererror,setlNumbererror]=useState("");
  const [pNumbererror,setpNumbererror]=useState("");
  const [addresserror,setaddresserror]=useState("");
  const currUrl=location.pathname.slice(0,-10);
  const [value, setValue] = useState({
    name: "",
    pNumber: "",
    lNumber: "",
    address: ""
  })
const [error, setError] = useState({
    name: false,
    pNumber: false,
    lNumber: false,
    address: false
  })
  const handleClick = () => {
    errord()
  }
  const storedata=()=>{
    localStorage.setItem("name", value.name);
    localStorage.setItem("pNumber", value.pNumber);
    localStorage.setItem("lNumber", value.lNumber);
    localStorage.setItem("address", value.address);
  }

  useEffect(() => {
    setNavbar(0);
  }, [setNavbar]);
  const isLandscape = window.innerHeight > window.innerWidth ? false : true;
  const errord=()=>{
    let errorcount=0;
    if(value.name==""){
      setnameerror("name is required")
    } 
    else{
      errorcount=errorcount+1
      setnameerror("")
    }
    if(value.pNumber==""){
      setpNumbererror("pratice number is required")
     } 
     else{
      errorcount=errorcount+1
      setpNumbererror("")
    }
     if(value.lNumber==""){
      setlNumbererror("licence number is required")
      
     } 
     else{
      errorcount=errorcount+1
      setlNumbererror("")
    }
     if(value.address==""){
      setaddresserror("pratice number is required")
     } 
     else{
      errorcount=errorcount+1
      setaddresserror("")
    }
  if(errorcount==4){
    history.push(currUrl+"/login")
  }
  
  }
  return (
    <div style={{ maxHeight: window.innerHeight }}>
      <Academynavbar setMenu={setMenu} />
      <div className='beamemberMain'>
        <img
          src={isLandscape ? bg1 : bg2}
          style={{
            height:
              window.innerWidth < 800
                ? window.innerHeight * 0.6 + 'px'
                : window.innerHeight + 'px',
            width:
              window.innerWidth < 800
                ? window.innerWidth + 'px'
                : window.innerWidth * 0.77 + 'px',
          }}
        />
        <div>
          <span className="beamemberMainh3">Fill the form to be membership</span>
          <CustomInput className={error.name} onChange={(e) => {setValue({...value, name: e.target.value})}} value={value.name} label="Practioner's name" />
          <span>{nameerror}</span>
          <CustomInput className={error.pNumber} onChange={(e) => {setValue({...value, pNumber: (e.target.value)})}} value={value.pNumber} label="Practice number" />
          <span>{pNumbererror}</span>
          <CustomInput className={error.lNumber} onChange={(e) => {setValue({...value, lNumber: e.target.value})}} value={value.lNumber} label="License number" />
          <span>{lNumbererror}</span>
          <CustomInput className={error.address} onChange={(e) => {setValue({...value, address: e.target.value})}} value={value.address} label="Practice address"  />
          <span>{addresserror}</span>
          <button
            className="beamemberMainbutton"
            onClick={handleClick}
            id="nextbtn"
           
          >
            <span className="beamemberMainbuttontext" onClick={() => {
              setType("membership");
              storedata(value);
              setSingup(2);
              handleClick();
              // 
            // if(currUrl=="/club/beamember"){
            //   history.push("/club/login")
            // }
            // else{
            //   history.push(currUrl+"/login")
            // }
            }}> Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function CustomInput({onClick, onChange, value, label, className}) {
  return (
    <div className="beamemberforminput">
      <label>{label}</label>
    <input className={className ? "error" : ""} type="text" onClick={onClick} onChange={(e) => onChange(e)} value={value} />
    </div>
  )
}
