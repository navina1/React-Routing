import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <button className='btn'>
            <NavLink to="/">Home</NavLink>
        </button>
        <button className='btn'>
            <NavLink to="/about">About</NavLink>
        </button>
        <button className='btn'>
            <NavLink to='/product'>Product</NavLink>
        </button>
        
    </nav>
  )
}

export default Navbar