import React from 'react';
import './Preloader.css';
import close from '../../assets/preloaderClose.png';
import call from '../../assets/call.png';
import { Popup /* or Slider */ } from "react-typeform-embed";
export default function Preloader({ setPreloader ,setModal}) {
  return (
    <div className='PreloaderMain'>
      <div className='PreloaderChild'>
        <div>
          <img
            className='preloaderClose'
            src={close}
            onClick={() => setPreloader(false)}
          />
        </div>
        <h1>Welcome new year with a confident smile</h1>
        <h5>
          Call us now and ask our Treatment coordinator about free dental
          implant camp scheduled at your nearest "Get Implant" dental office.
        </h5>
        <section>
          <img src={call} className='preloaderCall' />
          <span>713-322-5671</span>
        </section>
        <button className='HomeBTN' onClick={()=>{setPreloader(false)}}>
        <Popup size={80} id="a31vCGUw">
            Book an appointment
          </Popup></button>
      </div>
    </div>
  );
}
