import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='main'>
      <span className='logo'>REDUX Store</span>

      <div>
        <Link className='navLink' to="/">Home</Link>
        <Link className='navLink' to="/cart">Cart</Link>
      
        
        <span className='cartCount'>
          Cart Item : 0
        </span>
      </div>
    </div>
  )
}

export default Nav