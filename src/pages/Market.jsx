import React from "react";
import Packages from "../components/Packages";
import "./Market.css";

export default function Market() {
  const packages = [
    {
      Name: "Basic",
      Content: [
        "Target Audience Research",
        "Keyword Research",
        "Automated Feed Ads (DPA)",
        "Seasonality Ad Calendar",
        "Ad Content Creation",
        "Ads Analytical Report",
        "Management Duration (days)",
      ],
      Price: 1000,
      Period: 30,
      Color: "#F5D16F",
    },
    {
      Name: "Standard",
      Content: [
        "Target Audience Research",
        "Keyword Research",
        "Automated Feed Ads (DPA)",
        "Seasonality Ad Calendar",
        "Ad Content Creation",
        "Ads Analytical Report",
        "Management Duration (days)",
      ],
      Price: 3000,
      Period: 60,
      Color: "#30A792",
    },
    {
      Name: "Premium",
      Content: [
        "Target Audience Research",
        "Keyword Research",
        "Automated Feed Ads (DPA)",
        "Seasonality Ad Calendar",
        "Ad Content Creation",
        "Ads Analytical Report",
        "Management Duration (days)",
      ],
      Price: 5000,
      Period: 90,
      Color: "#3159A7",
    },
  ];
  return (
    <div className="marketMain">
      <div className="rightPane">
        <div className="content">
          <div>
            <h3>About Smile Secure</h3>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eget
              urna tempus libero diam arcu sit. At semper lorem neque, nunc est
              sagittis ultrices erat. Elit in in at sit egestas iaculis
              pellentesque. Dignissim amet sed cras cursus.{" "}
            </h6>
          </div>
          <div>
            <h3>Tailored made solutions for Dental offices</h3>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eget
              urna tempus libero diam arcu sit. At semper lorem neque, nunc est
              sagittis ultrices erat. Elit in in at sit egestas iaculis
              pellentesque. Dignissim amet sed cras cursus.{" "}
            </h6>
          </div>
          <div>
            <h3>What we offer</h3>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eget
              urna tempus libero diam arcu sit. At semper lorem neque, nunc est
              sagittis ultrices erat. Elit in in at sit egestas iaculis
              pellentesque. Dignissim amet sed cras cursus.{" "}
            </h6>
          </div>
          <div>
            <h3>For Get Implant Members</h3>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eget
              urna tempus libero diam arcu sit. At semper lorem neque, nunc est
              sagittis ultrices erat. Elit in in at sit egestas iaculis
              pellentesque. Dignissim amet sed cras cursus.
            </h6>
          </div>
        </div>
        <h2 className="ourPackage">Our Packages</h2>
        <div className="packages">
          <div className="packageContainer">
            {packages.map((item) => (
              <Packages item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="leftPane">
        <div className="cart">
          <h3>Cart</h3>
        </div>
        <div className="items">
          {"Be bold and try our service" /*when cart is empty*/}
        </div>
        <div className="total">
          <h2>Total</h2>
          <h2>${"00"}</h2>
        </div>
        <button className="HomeBTN">Make Payment</button>
      </div>
    </div>
  );
}
