import React, { useState, useRef, useEffect } from 'react';
import './Howitworks.css';
import Howitworks1 from '../assets/Home/howitworks1.png';
import Howitworks2 from '../assets/Home/howitworks2.png';
import Howitworks3 from '../assets/Home/howitworks3.png';
import Howitworks4 from '../assets/Home/howitworks4.png';

import HowitworksMobile1 from '../assets/Home/howitworksMobile1.png';
import HowitworksMobile2 from '../assets/Home/howitworksMobile2.png';
import HowitworksMobile3 from '../assets/Home/howitworksMobile3.png';
import HowitworksMobile4 from '../assets/Home/howitworksMobile4.png';

export default function Howitworks() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const isLandscapeMode = windowHeight < windowWidth ? true : false;

  const itemRef = useRef(1);
  const [itemNo, setItemNo] = useState(1);

  const handleItemNo = () => {
    if (itemNo === 4) {
      itemRef.current = 1;
      setItemNo(1);
    } else {
      itemRef.current = itemNo + 1;
      setItemNo(itemNo + 1);
    }
  };
  const cycleState = (n) => {
    setItemNo(n);
  };

  useEffect(() => {
    setInterval(() => {
      if (itemRef.current === 4) {
        itemRef.current = 1;
      } else {
        itemRef.current = itemRef.current + 1;
      }
      cycleState(itemRef.current);
    }, 4000);
  }, []);
  return (
    <div className='howitworksMain'>
      <div className='imgContainer' onClick={handleItemNo}>
        <img
          loading='lazy'
          src={isLandscapeMode ? Howitworks1 : HowitworksMobile1}
          className={itemNo === 1 ? 'imageActive' : 'imageInactive'}
        />
        <img
          loading='lazy'
          src={isLandscapeMode ? Howitworks2 : HowitworksMobile2}
          className={itemNo === 2 ? 'imageActive' : 'imageInactive'}
        />
        <img
          loading='lazy'
          src={isLandscapeMode ? Howitworks3 : HowitworksMobile3}
          className={itemNo === 3 ? 'imageActive' : 'imageInactive'}
        />
        <img
          loading='lazy'
          src={isLandscapeMode ? Howitworks4 : HowitworksMobile4}
          className={itemNo === 4 ? 'imageActive' : 'imageInactive'}
        />
      </div>
      <div className='itemNumberContainer'>
        <div
          className={itemNo === 1 ? 'itemNoActive' : 'itemNoInactive'}
          onClick={() => setItemNo(1)}
        >
          <span>Step</span>
          <span>1</span>
        </div>
        <div
          className={itemNo === 2 ? 'itemNoActive' : 'itemNoInactive'}
          onClick={() => setItemNo(2)}
        >
          <span>Step</span>
          <span>2</span>
        </div>
        <div
          className={itemNo === 3 ? 'itemNoActive' : 'itemNoInactive'}
          onClick={() => setItemNo(3)}
        >
          <span>Step</span>
          <span>3</span>
        </div>
        <div
          className={itemNo === 4 ? 'itemNoActive' : 'itemNoInactive'}
          onClick={() => setItemNo(4)}
        >
          <span>Step</span>
          <span>4</span>
        </div>
      </div>
      <div className='howitworksContent'>
        <h1>How it works</h1>

        {itemNo === 1 ? (
          <h5>Welcome aboard</h5>
        ) : itemNo === 2 ? (
          <h5>Get free assessment</h5>
        ) : itemNo === 3 ? (
          <h5>Let’s get started</h5>
        ) : (
          <h5>Follow it up</h5>
        )}

        {itemNo === 1 ? (
          <h6>
            An appointment with Get Implant, the oral health expert, is easy -
            just punch in your details and get a confirmation via email
          </h6>
        ) : itemNo === 2 ? (
          <h6>
            Expect a call from our patient-care officer for a free assessment of
            your concern. Get an appointment at your nearest dental clinic
          </h6>
        ) : itemNo === 3 ? (
          <h6>
            Meet our expert prosthodontists. Let them help you pick the best
            treatment plan, and get started with your recovery
          </h6>
        ) : (
          <h6>
            A follow-up is a must for total dental recovery. Let us ensure you
            are on the best path to great oral health
          </h6>
        )}
      </div>
    </div>
  );
}
