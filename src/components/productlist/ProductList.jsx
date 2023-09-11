import React from 'react'
import style from './ProductList.module.css'
import ProductCard from '../productCard/ProductCard'

const Productlist = ({data}) => {
  return (
   <div className={style.container_list}>
     <div className={style.productList}>
       {
            data.map((item)=>(
                <ProductCard key={item.id} item={item}/>
            ))
       }
        
    </div>
   </div>
  )
}

export default Productlist

