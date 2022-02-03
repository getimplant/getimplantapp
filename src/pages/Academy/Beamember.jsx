import React, { useContext, useEffect, useState } from "react";
import "./Academy.css";
import Academynavbar from "./Academynavbar";
import { AuthContext } from "./AuthProvider";
import { useHistory } from "react-router";
export default function Beamenber({ setNavbar, setMenu }) {
  const context = useContext(AuthContext);
  const setType = context.value.setType;
  const history=useHistory();
  useEffect(() => {
    setNavbar(0);
  }, [setNavbar]);
  return (
    <div>
      <Academynavbar setMenu={setMenu} />
      <div className="beamemberMain">
        <div>
          <span className="beamemberMainh3">type form here for membership</span>
          <button
            className="beamemberMainbutton"
            
          >
            <span className="beamemberMainbuttontext" onClick={() => {
              setType("membership");
             history.push("/academy/shop")
            }}> Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
