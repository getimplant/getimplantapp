import { FormatIndentDecreaseTwoTone } from '@material-ui/icons';
import React,{useEffect, useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const Calender = ({setIsdate,setDatevalue,setPending}) => {
    const [value, onChange] = useState(new Date());
   useEffect(()=>{
   setDatevalue(value)
   setIsdate(true)
   },[value])
  
   
    return (
        <>
             <Calendar
        onChange={onChange}
       value={value }
     
      />
        </>
    )
}

export default Calender
