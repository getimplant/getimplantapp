import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { AuthContext } from "../AuthProvider";
import "../Academy.css";
import "../../../firebase/config";
import pic from "../../../assets/logoblack.png";
import { Button, Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { getbookings,cancelbooking } from "../../../Actions/bookaservice";
const Order = ({ orders }) => {
  const [message, setMessage] = useState();
  const [bookings,setBookings]=useState();
  const usercontext = useContext(AuthContext);
  const setPending = usercontext.value.setPending;
  useEffect(() => {
    usercontext &&
      getbookings(usercontext.value.user.uid, setPending, setBookings);
   
  }, [usercontext]);
  return (
    <div style={{ width: "100%", maxHeight: "400px", overflowY: "scroll" }}>
      {message&&<span>{message}</span>}
       {bookings&&bookings.map((order) => {
        return (
          <>
            <Paper elevation={3}>
              <div className="ordercontent">
                <div className="orderimg">
                <span>{order.start_time}</span><br/>
                <span>{order.end_time}</span>
                </div>
                <div className="orderdetails">
                  <span><b>{order.service_name}</b></span><br />
                  <span>{order.staff_name}</span>
                  <span>{order.booking_id}</span>
                 
                  <br />
                  <br />
                  <div
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                  >
                    
                    <Button variant="contained" color="primary" size="small" onClick={()=>cancelbooking(order.booking_id,setMessage,usercontext.value.user.uid)}>
                      <span style={{ fontSize: "9px" }}>
                        <b>Cancel </b>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </Paper>
          </>
        );
      })}
      {orders.map((order) => {
        return (
          <>
            <Paper elevation={3}>
              <div className="ordercontent">
                <div className="orderimg">
                  <img src={order.image} />
                </div>
                <div className="orderdetails">
                  <span>{order.name}</span>
                  <br />
                  <span>$25</span>
                  <br />
                  <br />
                  <br />
                  <div
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                  >
                    <Button size="small">
                      <span style={{ fontSize: "12px", color: "black" }}>
                        <b>Track</b>
                      </span>
                    </Button>
                    <Button variant="contained" color="primary" size="small">
                      <span style={{ fontSize: "9px" }}>
                        <b>Cancel </b>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </Paper>
          </>
        );
      })}
    </div>
  );
};

export default Order;
