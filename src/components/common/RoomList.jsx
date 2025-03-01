import React from 'react'
import { useNavigate } from 'react-router-dom'
import RoomCard from './RoomCard'
import rooms from '../../data/mockData'

function ProductList () {
  const navigate = useNavigate()

  const handleShowMore = () => {
    navigate('/rooms')
  }

  return (
    <div className='w-full py-8'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold'>Our Rooms</h2>
        <p className='text-gray-500'>
          We provide the best rooms for our customers
        </p>
      </div>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {rooms.map(room => (
            <RoomCard key={room.id} product={room} />
          ))}
        </div>
      </div>
      <div className='text-center mt-6'>
        <button
          onClick={handleShowMore}
          className='bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors'
        >
          Show More
        </button>
      </div>
    </div>
  )
}

export default ProductList
