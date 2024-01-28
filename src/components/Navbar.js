import React, { useState } from 'react'
import '../styles/Navbar.css'
import Logo from '../images/logo.svg'
import { HiMenuAlt1 } from "react-icons/hi";
import Sidebar from './Sidebar';

const Navbar = () => {

  const [sidebarState, setSidebarState] = useState(false)

  return (
    <div>
      <div id='navbar-container'>
        <div id='inner-elements-container'>

          <div>
            <img id='tbc-logo' src={Logo} />
          </div>

          <div>
            <HiMenuAlt1 id='menu-icon' size={28}
            onClick={() => { setSidebarState(true) }} />
          </div>

          <ul id='navbar-list'>
            <li><a className='list-items'>მთავარი</a></li>
            <li><a className='list-items'>TBC IT</a></li>
            <li><a className='list-items'style={{ color: '#00A3E0' }}>TBC x USAID</a></li>
            <li><a className='list-items'>რისკები</a></li>
          </ul>
        </div>
      </div>
      {sidebarState && <Sidebar onClose={() => { setSidebarState(false) }} />}
    </div>
  )
}

export default Navbar