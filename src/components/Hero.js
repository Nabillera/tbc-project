import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div id='hero-container'>
      <div id='hero-image-container'>
        <img id='hero-image'src='https://static.wixstatic.com/media/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg/v1/fill/w_1502,h_352,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg'/>
      </div>

      <div id='header-text-container'>
        <span style={{fontSize:'24px'}}>TBC x USAID</span>
        <span style={{fontSize:'22px'}}>ტექნოლოგიური განათლებისთვის</span>
      </div>
    </div>
  )
}

export default Hero