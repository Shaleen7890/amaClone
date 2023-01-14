import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price,rating}) {
  const [{basket},dispatch]= useStateValue();
  const removeFromBasket=(basket)=>{
      dispatch({
        type:'remove-from-basket',
        id,
      })
  }
  return (
    <div className='checkoutProduct'>
        <div>
          <img className='checkoutProduct-image' src={image} alt='...'/>
        </div>
        <div className='checkoutProduct-info'>
          <p className='checkoutProduct-title'>{title}</p>
          <p className='checkoutProduct-price'>${price}</p>
          <p className='checkoutProduct-rating'>{Array(rating).fill().map((_,i)=>(<p>&#127775;</p>))}</p>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct