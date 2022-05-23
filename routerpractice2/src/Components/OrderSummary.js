import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const navigate=useNavigate();
    setTimeout( () => {
        navigate('/about')
    },3000)
  return (
      <>
        <div>
            <h1>Order Conformed</h1>
            <button onClick={()=>{navigate(-1)}}>Go Back</button>
        </div>
      </>
    
  )
}

export default OrderSummary