import React from 'react'
import Filterbar from './FilterBar/Filterbar'
import Body from './body/Body'

const Home = () => {
  return (
    <>
    <div className="flex">
      <div className='max-[570px]:hidden'>
        <Filterbar/>
      </div>
        <Body />
    </div>
    </>
  )
}

export default Home