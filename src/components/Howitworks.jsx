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
          src={isLandscapeMode ? Howitworks1 : HowitworksMobile1}
          className={itemNo === 1 ? 'imageActive' : 'imageInactive'}
        />
        <img
          src={isLandscapeMode ? Howitworks2 : HowitworksMobile2}
          className={itemNo === 2 ? 'imageActive' : 'imageInactive'}
        />
        <img
          src={isLandscapeMode ? Howitworks3 : HowitworksMobile3}
          className={itemNo === 3 ? 'imageActive' : 'imageInactive'}
        />
        <img
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
          <h5>Book an appointment</h5>
        ) : itemNo === 2 ? (
          <h5>Treatment consultation</h5>
        ) : itemNo === 3 ? (
          <h5>Treatment intiation</h5>
        ) : (
          <h5>Post treatment check up</h5>
        )}

        {itemNo === 1 ? (
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            eu facilisi quam sagittis, ut vestibulum. A tempor eget vestibulum.
          </h6>
        ) : itemNo === 2 ? (
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            eu facilisi quam sagittis, ut vestibulum. A tempor eget vestibulum.
          </h6>
        ) : itemNo === 3 ? (
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            eu facilisi quam sagittis, ut vestibulum. A tempor eget vestibulum.
          </h6>
        ) : (
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            eu facilisi quam sagittis, ut vestibulum. A tempor eget vestibulum.
          </h6>
        )}
      </div>
    </div>
  );
}
