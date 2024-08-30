import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="logo" className='nav--icon'/>
        <h3 className='nav--logo_text'>React Facts</h3>
        <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar