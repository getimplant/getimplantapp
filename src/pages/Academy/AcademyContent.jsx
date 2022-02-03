import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./Academy.css";
import Box from "@material-ui/core/Box";
import MembersNavbar from "./MembersNavbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";
import "../../firebase/config";
import { AuthContext } from "./AuthProvider";
import { saveuserdata } from "./Usefirestore";
import Calender from "./components/Calender";
import DateScheduleform from "./components/DateScheduleform";
import { readuserdata } from "./Usefirestore";
import Products from "./shop/Products";
import { Paper } from "@material-ui/core";
import "./shop/productactions/ActionButtons.css";
import { Toast } from "react-bootstrap";
import {
  getaccesstoken,
  getavailibleslots,
  bookaslot,
  getstaff,
  getbookings,
} from "../../Actions/bookaservice";
import { NavLink } from "react-bootstrap";

const useStyles = makeStyles({
  root: {
    borderRadius: "15px",
    flexDirection: "right",
    marginRight: "180px",
    minHeight: "400px",
    width: "300px",
    marginTop: "50px",
    marginBottom: "50px",
  },
});
export default function AcademyContent({ setNavbar, setMenu }) {
  const classes = useStyles();
  const history = useHistory();
  const [datevalue, setDatevalue] = useState(new Date());
  const [isdate, setIsdate] = useState(false);
  const [userdata, setUserdata] = useState({});
  const usercontext = useContext(AuthContext);
  const setType = usercontext.value.setType;
  const type = usercontext.value.type;
  const setPending = usercontext.value.setPending;
  const [accesstoken, setAccesstoken] = useState();
  const [avalibleslots, setAvalibleslots] = useState();
  const [slotbooked, setSlotbooked] = useState();
  const [staff, setStaff] = useState();

  // console.log(accesstoken)
  // async function hl(){
  //  const data=await readuserdata();
  //   setUserdata(data)

  // }
  // useEffect(()=>{
  //   hl()
  // },[])

  const values = {
    name: "rohit",
    city: "jaipur",
  };

  useEffect(() => {
    getaccesstoken(setAccesstoken);
    setNavbar(0);
  }, []);

  const getslots = (date) => {
    getavailibleslots(setAvalibleslots, accesstoken, date, setPending);
  };
  const getstaffs = async () => {
    await getstaff(accesstoken, setStaff, setPending);
  };
  const bookslot = (from_time, staffid) => {
    const userdata = usercontext.value.userdata;
    accesstoken &&
      bookaslot(
        setSlotbooked,
        accesstoken,
        from_time,
        staffid,
        userdata,
        setPending
      );
  };
  return (
    <>
      <MembersNavbar setMenu={setMenu} />

      <div className="academycontentMain">
        <span>
          <b>Welcome {usercontext.value.userdata.username}</b>
        </span>
        <br />
        <br />
        <br />
        <span>
          <b>Book a Service</b>
        </span>
        <div className="profilecontent">
          <div className="calenderdiv">
            <Calender setIsdate={setIsdate} setDatevalue={setDatevalue} setPending={setPending}/>
          </div>

          {isdate && (
            <div className="datescheduleform">
              {slotbooked && (
                <Toast
                  onClose={() => setSlotbooked(false)}
                  show={slotbooked}
                  delay={3000}
                  autohide
                >
                  <Toast.Body>Slot booked successfully</Toast.Body>
                </Toast>
              )}
              {/* <DateScheduleform
                getslots={getslots}
                getstaffs={getstaffs}
                bookslot={bookslot}
                avalibleslots={avalibleslots}
                slotbooked={slotbooked}
                staff={staff}
                setStaff={setStaff}
                datevalue={datevalue}
                setPending={setPending}
              /> */}
            </div>
          )}
        </div>

        <div className="productsdiv">
          <span>
            <b>Made for you</b>
          </span>
          <div className="flexcontent">
            <div>
              {" "}
              <Products type="implants" limit={2} />
            </div>
            <div>
              <Link
                onClick={() => {
                  setType("implants");
                  console.log(type);
                }}
                to="/academy/members/shop"
                className="buynowbtn morebutton"
              >
                <span>More</span>
              </Link>
            </div>
          </div>

          <div className="flexcontent">
            <div>
              {" "}
              <Products type="courses" limit={2} />
            </div>
            <div>
              <Link
                onClick={() => {
                  setType("courses");
                  console.log(type);
                }}
                to="/academy/members/shop"
                className="buynowbtn morebutton"
              >
                <span>More</span>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
