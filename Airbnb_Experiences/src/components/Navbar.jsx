import React from 'react'
import logo from '../images/airbnb-logo.png'

const Navbar = () => {
  return (
    <nav>
        <img className='nav--logo' src={logo} alt="airbnb-logo" />
    </nav>
  )
}

export default Navbar