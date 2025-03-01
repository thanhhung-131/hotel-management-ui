import React, { useState } from 'react'
import {
  AdjustmentsHorizontalIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/outline'

function ProductFilter () {
  const [showCount, setShowCount] = useState(16) // Số sản phẩm hiển thị trên trang
  const [sortBy, setSortBy] = useState('Default') // Lựa chọn sắp xếp

  const handleShowChange = e => {
    setShowCount(parseInt(e.target.value))
  }

  const handleSortChange = e => {
    setSortBy(e.target.value)
  }

  return (
    <div className='bg-orange-200 py-4 px-6 flex justify-between items-center'>
      {/* Left Section: Filter and Menu */}
      <div className='flex space-x-4 items-center'>
        <button className='flex items-center space-x-2 text-gray-800 hover:text-gray-600'>
          <AdjustmentsHorizontalIcon className='h-5 w-5' />
          <span className='text-sm font-medium'>Filter</span>
        </button>
        <button className='text-gray-800 hover:text-gray-600'>
          <EllipsisVerticalIcon className='h-5 w-5' />
        </button>
      </div>

      {/* Center Section: Showing Results */}
      <div className='text-gray-800 text-sm font-medium'>
        Showing 1-16 of 32 results
      </div>

      {/* Right Section: Show and Sort */}
      <div className='flex space-x-4 items-center'>
        <div className='flex items-center space-x-2'>
          <span className='text-gray-600 text-sm'>Show</span>
          <select
            value={showCount}
            onChange={handleShowChange}
            className='w-16 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
          >
            <option value='16'>16</option>
            <option value='32'>32</option>
            <option value='48'>48</option>
          </select>
        </div>
        <div className='flex items-center space-x-2'>
          <span className='text-gray-600 text-sm'>Sort by</span>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className='w-32 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
          >
            <option value='Default'>Default</option>
            <option value='PriceLowToHigh'>Price: Low to High</option>
            <option value='PriceHighToLow'>Price: High to Low</option>
            <option value='Newest'>Newest</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter
