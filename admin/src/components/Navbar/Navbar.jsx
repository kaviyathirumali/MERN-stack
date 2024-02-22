import React from 'react'
import './Navbar.css'
import navLogo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navLogo} alt='' className='nav-logo'/>
        <h1>Shopping<span>(Admin Panel)</span></h1>
    </div>
  )
}

export default Navbar