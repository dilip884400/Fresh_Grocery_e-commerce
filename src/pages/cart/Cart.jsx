import React from 'react';
import style from './Cart.module.css';
import { motion } from 'framer-motion';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItem } from '../../redux/userSlice';
import { BiSolidCheckShield } from 'react-icons/bi';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.cartItems);
  const totalAmount =useSelector(state => state.cart.totalAmount);
  const totalQuantity =useSelector(state => state.cart.totalQuantity);
  const navigate = useNavigate();

  return (
    <div className={style.shopping_cart}>

      <div className={style.product_cart}>
        <div className={style.heading}>
          <h1>YOUR CART({totalQuantity})</h1>
        </div>
        {cartItem.length === 0 ? (
          <>
          <h2>Cart is empty</h2>
          <motion.button whileTap={{scale:0.8}} className={style.more_shop} onClick={() => navigate('/product')}
          >Continue Shopping</motion.button>
          </>
        ) : (
          <div className={style.product_table}>
            {cartItem.map((item) => (
              <div className={style.product} key={item.id}>
                <div className={style.product_image}>
                  <img src={item.imgUrl} alt={item.title} />
                  </div>
                <div className={style.product_details}>
                  <h2>{item.productName}</h2>
                  <span>₹{item.price}</span>
                  <p>Quantity: {item.quantity}px</p>
                  <motion.button whileTap={{scale:0.9}} onClick={() => dispatch(deleteItem(item.id))}>
                    <MdDelete />
                    <span>Remove</span>
                  </motion.button>
                  </div>
                  </div>
            ))}
           
          </div>
        )}

      </div>
      {cartItem.length !== 0 && (
        <div className={style.subTotal }>
           <span><BiSolidCheckShield className={style.check_icon}/>Your order is eligible for FREE Delivery.</span>
            <h2>Subtotal ({totalQuantity} items): ₹{totalAmount}</h2>
            <button onClick={()=> navigate("/checkout")}>Proceed to Buy</button>
            <button className={style.more_shop} onClick={() => navigate('/product')}
          >Continue Shopping</button>
      </div>
      )}
        
    </div>
  );
}

export default Cart;
