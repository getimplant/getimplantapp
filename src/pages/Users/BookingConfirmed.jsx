import { FormatIndentDecreaseTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../components/Modals/Bookaslot.css";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const BookingConfirmed = ({setPreloader}) => {
  useEffect(()=>{
    setPreloader(false);
    sleep(3000);
    
    <Redirect to="/" />
  },[])
  return <div className="bookingconfirmedsection">
      <h3>Slot booked successfully, confirmation mail will be sent to provided email address</h3>

  </div>;
};

export default BookingConfirmed;
