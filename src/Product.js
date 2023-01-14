import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product( {id,image,title,price,rating}) {
  // dispatch the item into data layer
  const [{basket},dispatch]= useStateValue();
  const addToBasket=()=>{
     dispatch({
      type:'add-to-basket',
      item:{
        id,
        price,
        image,
        rating,
        title
      }
     })
  }
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product-rating'>
            {Array(rating).fill().map((_,i) =>(<p>&#127775;</p>))}
        </div>
      </div>
      <img src={image} alt=''/>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product