import React from 'react'
import { motion } from 'framer-motion'
import style from './ProductCard.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/userSlice'


const ProductCard = ({item}) => {

  const dispatch = useDispatch()

  const handleAddToCart=()=>{
   
    dispatch(addToCart({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }))

    toast.success("Item is added successfully!")
  }

  return (
    <div className={style.ProductCard} >
       <Link to={`/product/${item.id}`}><motion.img src={item.imgUrl} alt="image" whileHover={{scale:0.9}} /></Link>
        <div className={style.card_details}>
            <Link to={`/product/${item.id}`}><h3>{item.productName}</h3></Link>
            <h5>({item.category})</h5>
        </div>
        <div className={style.price}>
             <span>₹{item.price}</span>
            <motion.button 
            className={style.cart_btn} 
            whileTap={{scale:1.1}} 
            onClick={handleAddToCart}
            >Add +</motion.button>
          </div>
    </div>
  )
}

export default ProductCard