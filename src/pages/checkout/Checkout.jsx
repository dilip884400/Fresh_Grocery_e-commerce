import React from 'react'
import style from './Checkout.module.css'
import HeroSection2 from '../../commonUI/herosection2/HeroSection2'
import { useSelector } from 'react-redux'

const Checkout = () => {

    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <div>
        <HeroSection2 title="checkout"/>

        <div className={style.checkout_form}>
            <form>
            <h2>Billing Information</h2>
                <div className={style.input_field}>
                    <input type="text" placeholder='Enter your name' />
                </div>
                <div className={style.input_field}>
                    <input type="text" placeholder='Enter your email' />
                </div>
                <div className={style.input_field}>
                    <input type="text" placeholder='phone number' />
                </div>
                <div className={style.input_field}>
                    <input type="text" placeholder='Street address' />
                </div>
                <div className={style.input_field}>
                    <input type="text" placeholder='Pin code' />
                </div>
                <div className={style.input_field}>
                    <input type="text" placeholder='City' />
                </div>
            </form>

            <div className={style.checkout_cart}>
                <h6>Total Qty: <span>{totalQuantity} items</span></h6>
                <h6>Subtotal : <span>₹{totalAmount}</span></h6>
                <h6>Shipping :<span>0</span></h6>
                <h6>Free shipping</h6>
                <hr />
                <h4>Total cost : <span>₹{totalAmount}</span></h4>
                <button className={style.more_shop} > place order</button>
            </div>
        </div>

    </div>
  )
}

export default Checkout