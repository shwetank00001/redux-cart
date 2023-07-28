import React from 'react'

import { useDispatch } from 'react-redux' // to dispatch reducers
import { add } from '../store/cartSlice'

const Products = () => {

    const dispatch = useDispatch()
    const [prod, setProd] = React.useState([])

    async function getProd(){
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setProd(data)
      console.log(data)
    }

    React.useEffect(function(){
        getProd()
    },[])



    function handleAdd(item){
      dispatch(add(item))
    }

    const ele = prod.map(function(item){
      return(
        <div className='card' key={item.id}>
          
          <h1>{item.title}</h1>
          <img src={item.image} alt=''/>
          <p>{item.price}</p>
          {/* <p>{item.description}</p> */}
          {/* <h4>{item.category}</h4> */}

          <button onClick={() => handleAdd(item)}  className='btn'>Add to card</button>
        </div>
      )
    })


  return (
    <div className='productsWrapper'>
      {ele}

    </div>
  )
}

export default Products