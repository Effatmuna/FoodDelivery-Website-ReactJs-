import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItems from '../FoodItems/FoodItems';
import './DisplayFood.css';
const DisplayFood = ({category}) => {
const {food_list} = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
        <h2 className=''>Top Dishes near you</h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
              if(category == 'All' || category===item.category)
                return <FoodItems key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>

            })}
        </div>
      
    </div>
  )
}

export default DisplayFood
