import React, { useState } from 'react';
import { Courses } from './Courses';
import { Implants } from './Implants';
import Membership from './Membership';
const Product = ({ products, type, limit }) => {
 
  return (
    <div style={{ marginTop: '0px' }}>
      
      {type=="implants"&&<Implants products={products} limit={limit}/>}   
      {type == 'membership' && <Membership products={products} limit={limit} />}
      {type == 'courses' && <Courses products={products} limit={limit} />}
    </div>
  );
};

export default Product;
