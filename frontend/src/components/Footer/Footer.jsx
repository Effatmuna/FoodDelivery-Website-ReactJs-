import React from 'react';
import './Footer.css';
import log from '../Footer/logo.png';
import facebook from '../Footer/facebook_icon.png';
import twitter_icon from '../Footer/twitter_icon.png';
import linkedin_icon from '../Footer/linkedin_icon.png';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={log} alt='logo'/>
            <p>Lorem ipsum dolor, sit amet consectetur </p>
            <div className='footer-social-icons'>
                <img src={facebook} alt='facebook'/>
                <img src={twitter_icon} alt='twitter'/>
                <img src={linkedin_icon} alt='linkedin'/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+0880173XXXXX</li>
                <li>tomato@.com</li>

            </ul>
        </div>
      </div>
      <hr/>
      <p>Copyright 2024 @- All rights reserved</p>
    </div>
  )
}

export default Footer
