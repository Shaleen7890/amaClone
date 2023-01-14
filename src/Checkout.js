import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img className='checkout-image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/KD/banner_PC.jpg' alt='...' />
                <div>
                    <h2 className='checkout-title'>Your Shopping Basket</h2>
                    {basket.map((item)=>(<CheckoutProduct id={item.id} price={item.price} rating={item.rating} image={item.image} title={item.title}/>))}
                    {/* {for(let item of action.item)=>(
                        <CheckoutProduct id={item.id} price={item.price} rating={item.rating} image={item.image} title={item.title}/>
                    )} */}
                </div>
            </div>
            <div className='checkout-right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout