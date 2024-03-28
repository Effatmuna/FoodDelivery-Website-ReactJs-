import React from 'react';
import { useContext } from 'react';
import './FoodItems.css';
import starImage from '../FoodItems/rating_starts.png';
import addImage from "../FoodItems/add_icon_white.png";
import removeImage from "../FoodItems/remove_icon_red.png";
import addGreen from "../FoodItems/add_icon_green.png";

import { StoreContext } from '../../context/StoreContext';
const FoodItems = ({id,name,description,image,price}) => {
const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img src={image} className='food-item-image'/>
           {!cartItems[id]? <img  className='add' onClick={()=>addToCart(id)} src={addImage} alt='add'/>: 
           <div className='food-item-counter'>
            <img className='remove'  src={removeImage} alt="remove" onClick={()=>removeFromCart(id)}/>
            <p>{cartItems[id]}</p>
            <img className='remove'  src={addGreen} alt="add" onClick={()=>addToCart(id)}/>
            </div>}
        </div>
      <div className='food-item-info'>
        <div className='food-item-rating'>
            <p>{name}</p>
            <img src={starImage} alt='starImage'/>
           
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>$ {price}</p>
      </div>
    </div>
  )
}

export default FoodItems
