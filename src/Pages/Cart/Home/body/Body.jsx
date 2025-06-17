import React, { useState } from 'react'
import Cart from './Cart'
import { useCartContext } from '../../../../context/cartcontext/CartContext';



const Body = () => {
  const {
    state: { products },
  } = useCartContext();

  return (
    <>
    {products.length <= 0 ? (
      <div className='w-full h-full flex items-center justify-center mt-6'>
        <p className='text-xl font-semibold'>Product Not Available..!!</p>
      </div>
    ):(
        <div className="grid grid-cols-3 gap-[1rem] p-3 max-[1150px]:grid-cols-2 max-[850px]:grid-cols-1">
    {products.map(prod => {
      return <Cart key={prod.id} productDetail = {prod}/>
    })}
    </div>
    )}
    
    </>
  )
}

export default Body
