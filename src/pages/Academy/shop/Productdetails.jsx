import React,{useContext,useEffect,useState} from 'react'
import './Product.css'
import productimage from '../../../assets/logoblack.png'
const Productdetails = ({product,setShow}) => {
    return (
      <div className="productoverviewMain">
      <div className="productimagessection">
      	<img src={productimage} />
      
      </div>
      <div className="productimage">
      	image
      </div>
      <div className="productoverviewsection">
      third
      </div>
      	<a href="#" onClick={()=>{
      		setShow(0);
      	}}>See Less</a>
      </div>
    )
}

export default Productdetails
