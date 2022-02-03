import React from "react";
import IncrDecrButton from "./productactions/IncrDecrButton";
import "./Shop.css";
const CartItem = ({ cartitem, type }) => {
   
  return cartitem ? (type !== "mobile" ? (
    <div className="cartitemmain">
      <div className="cartimage">
        {cartitem.image.slice(0, 1).map((img) => {
          return <img src={img} className="cartimage" />;
        })}
      </div>
      <div className="cartdetails">
        <span>{cartitem.name}</span>
        <br />
        <span>{cartitem.price}</span>
        <br />

        <IncrDecrButton product={cartitem} />
      </div>
    </div>
  ) : (
    <div className="cartitemmain">
      <div className="cartimage">
      {cartitem.image.slice(0, 1).map((img) => {
          return <img src={img} className="cartimage" />;
        })}
      </div>
      <div className="cartdetails">
        <span>{cartitem.name}</span>
        <br />
        <span>{cartitem.price}</span>
        <br />

        <IncrDecrButton product={cartitem} />
      </div>
    </div>
  )):"jo"
};

export default CartItem;
