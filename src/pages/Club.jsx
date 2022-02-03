import React, { useState ,useEffect} from "react";
import "./Club.css";
import { useHistory } from "react-router-dom";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import Clubnavbar from "./club/Clubnavbar";

export default function Club({setNavbar, setMenu}) {
  const auth=getAuth() 
  const history=useHistory();
  const [cardNo, setCardNo] = useState(0);
  const openCard = (n) => {
    if (n === cardNo) {
      setCardNo(0);
    } else {
      setCardNo(n);
    }
  };

  useEffect(()=>{
    setNavbar(0)
   
  },[setNavbar])

  return (
    <>
    <Clubnavbar setMenu={setMenu}/>
    <div className={"clubMain " + (cardNo !== 0 ? "clubBG1" : "clubBG2")}>
    
      <div className="clubCardContainer">
        <div>
          <div
            className={
              "clubCard " + (cardNo === 1 ? "cardSizeTwo" : "cardSizeOne")
            }
          >
            <div onClick={() => openCard(1)} className="clubCardHover one">
              Treatment by Specialists at your Clinic
              <p className={cardNo === 1 ? "paraVisible" : "paraHidden"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                provident velit iusto amet. Ullam omnis laudantium recusandae
                quibusdam, nostrum accusamus, praesentium quidem atque dolorem
                veniam possimus provident fugit iste hic.
              </p>
            </div>
            <span>Treatmeant by Specialist</span>
          </div>
          <div
            onClick={() => openCard(2)}
            className={
              "clubCard " + (cardNo === 2 ? "cardSizeTwo" : "cardSizeOne")
            }
          >
            <div className="clubCardHover two">
              Implant Treatment Planning Support
              <p className={cardNo === 2 ? "paraVisible" : "paraHidden"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                provident velit iusto amet. Ullam omnis laudantium recusandae
                quibusdam, nostrum accusamus, praesentium quidem atque dolorem
                veniam possimus provident fugit iste hic.
              </p>
            </div>
            <span>Implant Planning Support</span>
          </div>
        </div>
        <div>
          <div
            onClick={() => openCard(3)}
            className={
              "clubCard " + (cardNo === 3 ? "cardSizeTwo" : "cardSizeOne")
            }
          >
            <div className="clubCardHover three">
              12 CE Credits Per Year
              <p className={cardNo === 3 ? "paraVisible" : "paraHidden"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                provident velit iusto amet. Ullam omnis laudantium recusandae
                quibusdam, nostrum accusamus, praesentium quidem atque dolorem
                veniam possimus provident fugit iste hic.
              </p>
            </div>
            <span>Enhance Clinical Skills</span>
          </div>
          <div
            onClick={() => openCard(4)}
            className={
              "clubCard " + (cardNo === 4 ? "cardSizeTwo" : "cardSizeOne")
            }
          >
            <div className="clubCardHover four">
              Open form to discuss case and sharing experience
              <p className={cardNo === 4 ? "paraVisible" : "paraHidden"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                provident velit iusto amet. Ullam omnis laudantium recusandae
                quibusdam, nostrum accusamus, praesentium quidem atque dolorem
                veniam possimus provident fugit iste hic.
              </p>
            </div>
            <span>Digital Forum</span>
          </div>
        </div>
      </div>
      <div>Get Implant Club</div>
      <div className="clubCardContainer">
        <div>
          <div
            onClick={() => openCard(5)}
            className={
              "clubCard " + (cardNo === 5 ? "cardSizeTwo" : "cardSizeOne")
            }
          >
            <div className="clubCardHover five">
              Patient Counseling Kits and Care Packages
              <p className={cardNo === 5 ? "paraVisible" : "paraHidden"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                provident velit iusto amet. Ullam omnis laudantium recusandae
                quibusdam, nostrum accusamus, praesentium quidem atque dolorem
                veniam possimus provident fugit iste hic.
              </p>
            </div>
            <span>Implant Store</span>
          </div>
          <div
            onClick={() => openCard(6)}
            className={
              "clubCard " + (cardNo === 6 ? "cardSizeTwo" : "cardSizeOne")
            }
          >
            <div className="clubCardHover six">
              Free Implant Surgical Kit
              <p className={cardNo === 6 ? "paraVisible" : "paraHidden"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                provident velit iusto amet. Ullam omnis laudantium recusandae
                quibusdam, nostrum accusamus, praesentium quidem atque dolorem
                veniam possimus provident fugit iste hic.
              </p>
            </div>
            <span>Counselling Support</span>
          </div>
        </div>
        <div>
          <div
            onClick={() => openCard(7)}
            className={
              "clubCard " + (cardNo === 7 ? "cardSizeTwo" : "cardSizeOne")
            }
          >
            <div className="clubCardHover seven">
              50% Discounts on FIX Implants and Components from our Online Store
              <p className={cardNo === 7 ? "paraVisible" : "paraHidden"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                provident velit iusto amet. Ullam omnis laudantium recusandae
                quibusdam, nostrum accusamus, praesentium quidem atque dolorem
                veniam possimus provident fugit iste hic.
              </p>
            </div>
            <span>Discounts on courses</span>
          </div>
          <div
            onClick={() => openCard(8)}
            className={
              "clubCard " + (cardNo === 8 ? "cardSizeTwo" : "cardSizeOne")
            }
          >
            <div className="clubCardHover eight">
              Clinic Promotion and Marketing Support
              <p className={cardNo === 8 ? "paraVisible" : "paraHidden"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                provident velit iusto amet. Ullam omnis laudantium recusandae
                quibusdam, nostrum accusamus, praesentium quidem atque dolorem
                veniam possimus provident fugit iste hic.
              </p>
            </div>
            <span>Clinic Promotion and Marketing Support</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
