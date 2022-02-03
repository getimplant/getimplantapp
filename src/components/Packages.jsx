import React from "react";
import "./Packages.css";

export default function Packages({ item }) {
  return (
    <div className="packagesMain" style={{ "--color": item.Color }}>
      <h6>{item.Name}</h6>
      <div className="priceTag">
        <h3>${item.Price}</h3>
        <h3>{item.Period + " days"}</h3>
      </div>
      <h4 className="Content">
        {item.Content.map((item, index) => (
          <span>
            {index + 1}. {item}
          </span>
        ))}
      </h4>
      <h4>Package to get</h4>
      <div className="priceTag">
        <h3>${item.Price * 10}</h3>
        <h3>{item.Period + " days"}</h3>
      </div>
      <button className="HomeBTN">Select {item.Name}</button>
    </div>
  );
}
