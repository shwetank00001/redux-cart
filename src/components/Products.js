import React from 'react'

const Products = () => {

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

    const ele = prod.map(function(item){
      return(
        <div className='card' key={item.id}>
          
          <h1>{item.title}</h1>
          <img src={item.image} />
          <p>{item.price}</p>
          {/* <p>{item.description}</p> */}
          {/* <h4>{item.category}</h4> */}

          <button  className='btn'>Add to card</button>
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