import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  ShareIcon,
  ArrowPathIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import Navbar from '../components/common/Navbar'
import rooms from '../data/mockData'

function RoomDetail () {
  const { roomId } = useParams()
  const room = rooms.find(r => r.id.toString() === roomId.toString())
  const [quantity, setQuantity] = useState(1)

  if (!room)
    return (
      <div>
        <Navbar />
        <div className='text-center py-16'>
          <h2 className='text-4xl font-bold'>Room Not Found</h2>
          <p className='text-gray-500 mt-4'>
            The room you are looking for does not exist
          </p>
          <button
            onClick={() => window.history.back()}
            className='bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors mt-8'
          >
            Go Back
          </button>
        </div>
      </div>
    )

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1))
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8'>
        {/* Hình ảnh phòng */}
        <div className='relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden'>
          <img
            src={room.imageUrl}
            alt={room.name}
            className='w-full h-full object-cover'
            onError={e =>
              (e.target.src =
                'https://via.placeholder.com/500?text=Image+Not+Found')
            }
          />
        </div>

        {/* Thông tin phòng */}
        <div>
          <h1 className='text-3xl font-bold mb-2'>{room.name}</h1>
          <p className='text-gray-600 text-lg mb-4'>{room.description}</p>
          <p className='text-2xl font-bold text-gray-900'>
            Rp {room.price.toLocaleString()}
          </p>

          {/* Nút chức năng */}
          <div className='flex items-center gap-4 my-6'>
            <button
              className='border px-3 py-1 rounded'
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className='text-lg'>{quantity}</span>
            <button
              className='border px-3 py-1 rounded'
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          {/* Hành động: Thêm vào giỏ hàng, So sánh, Yêu thích, Chia sẻ */}
          <div className='flex gap-4'>
            <button className='flex-1 bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700'>
              Add To Cart
            </button>
          </div>

          <div className='flex space-x-3 mt-4'>
            <button className='p-2 border rounded-full hover:bg-gray-100'>
              <ShareIcon className='h-5 w-5 text-gray-600' />
            </button>
            <button className='p-2 border rounded-full hover:bg-gray-100'>
              <ArrowPathIcon className='h-5 w-5 text-gray-600' />
            </button>
            <button className='p-2 border rounded-full hover:bg-gray-100'>
              <HeartIcon className='h-5 w-5 text-gray-600' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RoomDetail
