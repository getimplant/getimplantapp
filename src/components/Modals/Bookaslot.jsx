import React, { useContext, useState, useEffect } from "react";
import "./Modals.css";
import "./Modals2.css";
import Singupform from "../../pages/Users/Singupform";
import Calender from "../../pages/Users/Calender";
import { AuthContext } from "../../pages/Academy/AuthProvider";
import Book from "../../pages/Users/Book";
import {
  getaccesstoken,
  getavailibleslots,
  bookaslot,
  getstaff,
  getbookings,
} from "../../Actions/bookaservice";
import { getdistance } from "../../Actions/getdistance";
import BookingConfirmed from "../../pages/Users/BookingConfirmed";

export default function Bookaslot({ modal, setModal, setPreloader }) {
  const [datevalue, setDatevalue] = useState(new Date());
  const [isdate, setIsdate] = useState(false);
  const usercontext = useContext(AuthContext);
  const setMessage = usercontext.value.setMessage;
  const message = usercontext.value.message;
  const [avalibleslots, setAvalibleslots] = useState();
  const [accesstoken, setAccesstoken] = useState("");
  const [staff, setStaff] = useState();
  const isuser = false;
  const [userdata, setUserdata] = useState();
  const [haveloaded, setHaveloaded] = useState(false);
  const [slotbooked, setSlotbooked] = useState(true);
  useEffect(() => {
    getaccesstoken(setAccesstoken);
  }, []);
  // useEffect(()=>{},[setUserdata]);
  const getslots = async (date) => {
    await getavailibleslots(setAvalibleslots, accesstoken, date);
  };
  const getstaffs = async () => {
    await getstaff(accesstoken, setStaff, isuser, userdata,setHaveloaded);
  };
  useEffect(() => {
    message !== "" && setModal(19);
  }, [message]);
  return (
    <div className="Modal2" style={{ width: "100%" }}>
      <div className="ModalChild2">
        <div>
          <div className="close" onClick={() => setModal(0)} />
          {/* <div className="share"/> */}
        </div>

        {message == "" &&
          (window.innerWidth > 800 ? (
            <h1>Please fill imformation for booking!</h1>
          ) : (
            <h6>Please fill imformation for booking!</h6>
          ))}

        <div>
          {modal === 16 && (
            <div>
              <Singupform
                setModal={setModal}
                setUserdata={setUserdata}
                accesstoken={accesstoken}
              />
            </div>
          )}
          {modal === 17 && (
            <div>
              <Calender
                getslots={getslots}
                getstaffs={getstaffs}
                setIsdate={setIsdate}
                setModal={setModal}
                setDatevalue={setDatevalue}
                userdata={userdata}
                setUserdata={setUserdata}
                datevalue={datevalue}
                setHaveloaded={setHaveloaded}
              />
            </div>
          )}
          {modal === 18 && (
            <div>
              <Book
                avalibleslots={avalibleslots}
                staff={staff}
                setModal={setModal}
                datevalue={datevalue}
                userdata={userdata}
                setUserdata={setUserdata}
                haveloaded={haveloaded}
                accesstoken={accesstoken}
                setMessage={setMessage}
                slotbooked={slotbooked}
                setSlotbooked={setSlotbooked}
              />
            </div>
          )}
          {modal === 19 && (
            <div>
              <BookingConfirmed setPreloader={setPreloader} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
