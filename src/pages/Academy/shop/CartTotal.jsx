import React ,{useContext}from 'react'
import { AuthContext } from '../AuthProvider'
const CartTotal = () => {
    const context=useContext(AuthContext);
    const cart =context.value.cartdata;
    let total=0;
    
    cart[0].forEach((data,index)=>{
        console.log(index,"=",data.price,data.qty)
    //  
     total=total+parseInt(data.price)*parseInt(data.qty);
    })
    return (
        <div style={{marginLeft:"10px",marginTop:"20px"}}>
           
             <span ><b>Total amount: $ {total}</b></span>
        </div>
    )
}

export default CartTotal
