import React from 'react'
import app_store from '../AppDownload/app_store.png';
import play_store from '../AppDownload/play_store.png';
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className='app-download-platforms'>
            <img src={app_store} alt='app'/>
            <img src={play_store} alt='play'/>
        </div>

      
    </div>
  )
}

export default AppDownload;
