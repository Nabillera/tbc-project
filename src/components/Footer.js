import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div id='footer-inner-container'>
        <img id='footer-tbc-logo' src='https://static.wixstatic.com/media/dd97f4_86c58c47370442a889e9a4e9db4eb00c~mv2.png/v1/crop/x_1,y_0,w_426,h_123/fill/w_106,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%201%402x.png'/>
      
        <div id='social-media-container'>
          <img className='social-links' src='https://static.wixstatic.com/media/ce6ec7c11b174c0581e20f42bb865ce3.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ce6ec7c11b174c0581e20f42bb865ce3.png'/>
          <img className='social-links' src='https://static.wixstatic.com/media/71ac09a5a92848cc943bf2ca2a09a6d0.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/71ac09a5a92848cc943bf2ca2a09a6d0.png'/>
        </div>

        <a id='contact-us-link'>მოგვწერეთ</a>

        <div id='footer-text-container'>
          <p className='footer-text'>წესები და პირობები</p>
          <p className='footer-text'><span style={{cursor: 'pointer'}}>&copy; 2023</span> ყველა უფლება დაცულია</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer