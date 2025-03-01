import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import {
  ShareIcon,
  ArrowPathIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

function RoomCard ({ product }) {
  const { addToCart } = useCart()

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden group flex flex-col h-full'>
      <Link to={`/room/${product.id}`}>
        <div className='relative w-full h-64'>
          <img
            src={product.imageUrl}
            alt={product.name}
            className='w-full h-full object-cover'
            onError={e => {
              e.target.src =
                'https://via.placeholder.com/300x400?text=Image+Not+Found'
            }}
          />
          {product.discount && (
            <span className='absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
              -{product.discount}%
            </span>
          )}
          {product.isNew && (
            <span className='absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
              New
            </span>
          )}
        </div>
      </Link>

      <div className='p-4 flex flex-col flex-grow'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2'>
          {product.name}
        </h3>
        <p className='text-sm text-gray-600 mb-2 flex-grow line-clamp-2'>
          {product.description}
        </p>
        <div className='flex justify-between items-center mb-4'>
          <span className='text-xl font-bold text-gray-900'>
            Rp {product.price.toLocaleString()}
          </span>
          <div className='flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity'>
            <button className='p-2 hover:bg-gray-100 rounded-full'>
              <ShareIcon className='h-5 w-5 text-gray-600' />
            </button>
            <button className='p-2 hover:bg-gray-100 rounded-full'>
              <ArrowPathIcon className='h-5 w-5 text-gray-600' />
            </button>
            <button className='p-2 hover:bg-gray-100 rounded-full'>
              <HeartIcon className='h-5 w-5 text-gray-600' />
            </button>
          </div>
        </div>

        <div className='mt-auto'>
          <button
            onClick={() => addToCart(product)}
            className='w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
