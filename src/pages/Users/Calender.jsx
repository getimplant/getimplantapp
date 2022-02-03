import { FormatIndentDecreaseTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../components/Modals/Bookaslot.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  inputFields: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  nextbutton: {
    justifyContent: "center",
    alignItems: "center",
    padding: "1px 0px",

    width: "auto",
    height: "32px",

    /* Get Implant/Read */
    background: "#000000",
    borderRadius: "6px",
  },
}));
const Calender = ({
  setIsdate,
  setHaveloaded,
  datevalue,
  getstaffs,
  getslots,
  setDatevalue,
  setModal,
}) => {
  const classes = useStyles();

  const [value, onChange] = useState(new Date());
  useEffect(() => {
    setDatevalue(value);
    setIsdate(true);
  }, [value]);
  useEffect(() => {
   
    let formatted_date =
      datevalue.getDate() +
      "-" +
      (datevalue.getMonth() + 1) +
      "-" +
      datevalue.getFullYear();

    getstaffs().then((res) => {
      setHaveloaded(true);
      getslots(formatted_date);
      
    });
   
  }, [datevalue]);

  return (
    <div className="bookaslotsection">
      <Calendar
        value={value}
        minDate={new Date()}
        onChange={onChange}
        className="calendersection"
      />
      <div className="buttonsection">
        <button
          className={classes.nextbutton}
          onClick={() => {
            setModal(18);
          }}
        >
          <span className="signbuttontext"> Next</span>
        </button>
        <button
          className={classes.nextbutton}
          onClick={() => {
            setModal(16);
          }}
        >
          <span className="signbuttontext"> Back</span>
        </button>
      </div>
    </div>
  );
};

export default Calender;
