import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

import Footer from './components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import Log from './components/LogIn/Log';
import OrderPlace from './pages/OrderPlace/OrderPlace';
const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin? <Log setShowLogin={setShowLogin} />: <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<ShoppingCart />}/>
       <Route path='/order' element={<OrderPlace/>}/>
      </Routes> 
      <Footer/>
      </div> 
      </>
  )
}   
  

export default App;