import React from 'react'
import Room from '../components/common/Room'
import Dining from '../components/common/Dining'
import Conferences from '../components/common/Conferences'

function Facilities () {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center min-h-screen p-5'>
      <div className='flex flex-col items-center mb-10'>
        <h1 className='text-4xl font-bold'>Our Facilities</h1>
        <p className='text-gray-500'>
          We provide the best services for our customers
        </p>
      </div>
      <div className='grid grid-cols-3 gap-5 max-w-5xl w-full'>
        <Room />
        <Dining />
        <Conferences />
      </div>
    </div>
  )
}

export default Facilities
