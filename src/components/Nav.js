import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux' // to get data from database 

const Nav = () => {

  const item = useSelector((state) => state.cart ) // we give that item which we want to subscribe , i.e get details of that item which changes the value

  // whenever our cart changes, we get a new item and our components re renders
  return (
    <div className='main'>
      <span className='logo'>REDUX Store</span>

      <div>
        <Link className='navLink' to="/">Home</Link>
        <Link className='navLink' to="/cart">Cart</Link>
      
        
        <span className='cartCount'>
          Cart Item : {item.length}
        </span>

  
          {/* {item.map(function(val){
            return(
              <div>
                <h3>{val.id}</h3>
                <h3>{val.price}</h3>
              </div>
            )
          })} */}

      </div>
    </div>
  )
}

export default Nav