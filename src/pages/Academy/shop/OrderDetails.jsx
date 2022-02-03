import React from 'react'
import {useEffect} from 'react'  

import "../Academy.css";
import '../../../firebase/config'

import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import productimage from '../../../assets/logoblack.png'
import Order from './Order';
const OrderDetails = () => {
    const orders =[
        { name:"product 1",
        desc:"the product description goes here",
        price:"$25",
        image:productimage,},
        { name:"product 2",
        desc:"the product description goes here",
        price:"$25",
        image:productimage,},
      
    ]
    return (
        <>
       
       <div className="ordermaindiv">
        <span><b>Your Orders</b></span>
        <Order orders={orders}/>
              
        </div>
        
          </>
    )
}

export default OrderDetails
