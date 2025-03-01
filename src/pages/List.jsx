import React from 'react'
import ProductFilter from '../components/common/Filter'
import rooms from '../data/mockData'
import RoomCard from '../components/common/RoomCard'
import { Link } from 'react-router-dom'
import Navbar from '../components/common/Navbar'

const List = () => {
  console.log(rooms)
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='w-full py-8'>
        <ProductFilter /> {/* Thêm ProductFilter ở đầu danh sách */}
        <div className='max-w-6xl mx-auto px-4 mt-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {rooms.map(room => (
              <RoomCard key={room.id} product={room} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default List
