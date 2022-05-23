import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import "./New.css"

function Product() {
  return (
      <>
        <div>
            <input type="search" placeholder='search product'/>
        </div>
        <nav>
            <Link className='new-product' to="featured">Featured</Link>
            <Link className='new-product' to="new">New</Link>
            <Outlet/>
        </nav>
      </>
    
  )
}

export default Product