import React from 'react'


import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'


const Cart = () => {

  const dispatch = useDispatch()

  const products = useSelector((state)=> state.cart)

  const ele = products.map(function(item){
    return(
      <div className='cartCard'>
        <img src={item.image} alt='' />
        <h3>{item.title}</h3>
        <h3>{item.price}</h3>
        <button className='btn' onClick={()=> handleRemove(item.id)}>Remove</button>
      </div>
    )
  })


  function handleRemove(id){
    dispatch(remove(id))
  }
   
  return (
    <div>
      
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {ele}
      </div>
    </div>
  )
}

export default Cart