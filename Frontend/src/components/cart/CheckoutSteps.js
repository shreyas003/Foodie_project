import React from 'react'
import {Link} from "react-router-dom";



const CheckoutSteps = ({ delivery, confirmOrder, payment }) => {
  return (
    <div className='checkout-progress d-flex justify-content-center mt-5'>

        {delivery ? (
            <Link to="shipping" className='float-right' >
                <div className='triangle2-active'></div>
                <div className='step active-step'>Address</div>
                <div className='traingle-active'></div>
            </Link>
        ):(
            <Link to="#!" disabled>
                <div className='triangle2-incomplete'></div>
                <div className='step incomplete'>Address</div>
                <div className='traingle-incomplete'></div>
            </Link>
        )}

        {confirmOrder ? (
            <Link to="/order/confirm" className='float-right' >
                <div className='triangle2-active'></div>
                <div className='step active-step'>Confirm order</div>
                <div className='traingle-active'></div>
            </Link>
        ):(
            <Link to="#!" disabled>
                <div className='triangle2-incomplete'></div>
                <div className='step incomplete'>confirm order</div>
                <div className='traingle-incomplete'></div>
            </Link>
        )}

        {payment ? (
            <Link to="/payment" className='float-right' >
                <div className='triangle2-active'></div>
                <div className='step active-step'>Payment</div>
                <div className='traingle-active'></div>
            </Link>
        ):(
            <Link to="#!" disabled>
                <div className='triangle2-incomplete'></div>
                <div className='step incomplete'>Payment</div>
                <div className='traingle-incomplete'></div>
            </Link>
        )}

    </div>
  )
}


export default CheckoutSteps
