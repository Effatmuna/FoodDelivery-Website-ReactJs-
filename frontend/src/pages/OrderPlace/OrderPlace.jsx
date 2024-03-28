import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './OrderPlace.css';
const OrderPlace = () => {
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
     <div className='place-order-left'>
     <p className='title'>
        Delivery Information
     </p>
     <div className='multi-fields'>
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder='Last name'/>
     </div>
     <input type="text" placeholder='Email address'/>
     <input type="text" placeholder='Street'/>
     <div className='multi-fields'>
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='State'/>
     </div>
     <div className='multi-fields'>
        <input type="text" placeholder='Zip Code'/>
        <input type="text" placeholder='Country'/>
     </div>
     <input type="text" placeholder='Phone'/>
     </div>
     <div className='place-order-right'>
     <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>$ {getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cart-total-details'>
                            <p>Delivery Fee</p>
                            <p>$ {20}</p>
                        </div>
                        <hr/>
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>$ {getTotalCartAmount()+2}</b>
                        </div>
                       <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
                    </div>
                    <div className='cart-promcode'>
                        <div>
                            <p>If you have a promo code, inter it here</p>
                            <div className='cart-promocode-input'>
                                <input type="text" placeholder='promo code'/>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
     </div>
      
    </form>
  )
}

export default OrderPlace
