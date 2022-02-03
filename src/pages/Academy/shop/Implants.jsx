import React, { useContext, useEffect, useState } from "react";

import ImplantItems from "./ImplantItems";
export const Implants = ({ products, limit }) => {
  return (
    <div >
      {products.length > 0 &&
        products.slice(0, limit).map((product, index) => {
          return <ImplantItems item={product} index={index} />;
        })}
    </div>
  );
};
