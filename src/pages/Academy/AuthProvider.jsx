import React, { useState, useEffect } from "react";
import { getAuth, signOut, sendEmailVerification } from "@firebase/auth";
import "../../firebase/config";
import CircularProgress from '@mui/material/CircularProgress';
import { Redirect } from "react-router";
import { useHistory } from "react-router";
import { readuserdata,Getfirestore } from "./Usefirestore";
import { addtocart, getcart } from "./shop/Shopactions";
import Spinner from "react-bootstrap/Spinner";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [userdata, setUserdata] = useState({});
  const [acadnavbar, setAcadnavbar] = useState(true);
  const [navbar, setNavbar] = useState(true);
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(0);
  const [provider, setProvider] = useState(false);
  const [cartdata, setCartdata] = useState(null);
  const [message, setMessage] = useState("");
  const [singup, setSingup] = useState(0);
  //products
  const [type, setType] = useState("implants");
  useEffect(() => {
    const auth = getAuth();
    getAuth().onAuthStateChanged(async (user) => {
      if (user != null) {
        if (!user.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              signOut(auth);
            })
            .then(() => {
              setMessage("Verification Email send,please verify and continue");
            });
        } else {
          setMessage("");
          setCurrentUser(user);
          readuserdata(setUserdata);
          user && getcart(user.uid, setCartdata, setPending);
          // let d=await Getfirestore("products");
          // let r=await d;
          // setProducts(r);
          // setPending(false);
        }
      }
      setPending(false);
    });
  }, []);
  const value = {
    user: currentUser,
    userdata: userdata,
    acadnavbar,
    setAcadnavbar,
    navbar,
    setNavbar,
    menu,
    modal,
    provider,
    setMenu,
    setModal,
    setProvider,
    cartdata,
    setCartdata,
    type,
    setType,
    setPending,
    message,
    setMessage,
    setSingup,
    singup
   
  };

  if (pending) {
    return (
      <div style={{marginLeft:"45%",marginTop:"300px"}}>
        <CircularProgress/>
      </div>
    );
  }

  return (
    <div>
      <AuthContext.Provider value={{ value }}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
