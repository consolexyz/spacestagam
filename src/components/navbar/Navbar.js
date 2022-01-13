import React from 'react'
import logo from './NASA.png'
import './navbar.css'
 const Navabar =() =>
  (
        <div className='nav-bar'>
            <img src={logo} alt='logo' className='logo'/>
            <p className='spacestagram'>SPACESTAGRAM</p>
        </div>
    )

export default Navabar
