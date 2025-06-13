import React from 'react'
import Cart from './Cart'
import useCartContext from '../../../../context/cartcontext/Cartcontext'

const Body = () => {
  const {product} = useCartContext()
  
  return (
    <div className="grid grid-cols-3 gap-[1rem] p-3 max-[1150px]:grid-cols-2 max-[850px]:grid-cols-1">
    {product.product.map(prod => {
      return <Cart productDetail = {prod}/>
    })}
    </div>
  )
}

export default Body
