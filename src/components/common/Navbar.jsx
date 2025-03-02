import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext' // Import CartContext
import {
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon as SearchIcon
} from '@heroicons/react/24/outline'

function Navbar () {
  const { isAuthenticated, user, logout } = useAuth()
  const { cart = [] } = useCart() // Provide a default value for cart
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    logout()
    setIsDropdownOpen(false) // Đóng dropdown sau khi logout
    window.location.href = '/login' // Chuyển hướng về trang login
  }

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className='bg-white border-b border-gray-200 py-4'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        {/* Logo */}
        <Link to='/' className='flex items-center space-x-2'>
          <span className='text-yellow-500 text-2xl font-bold'>▲</span>{' '}
          <span className='text-2xl font-bold text-black'>Furniro</span>
        </Link>

        {/* Navigation Links */}
        <div className='space-x-6'>
          <Link
            to='/'
            className='text-black text-base font-medium hover:text-gray-600'
          >
            Home
          </Link>
          <Link
            to='/rooms'
            className='text-black text-base font-medium hover:text-gray-600'
          >
            Shop
          </Link>
          <Link
            to='/about'
            className='text-black text-base font-medium hover:text-gray-600'
          >
            About
          </Link>
          <Link
            to='/contact'
            className='text-black text-base font-medium hover:text-gray-600'
          >
            Contact
          </Link>
        </div>

        {/* Icons/Avatar */}
        <div className='flex items-center space-x-4'>
          {isAuthenticated && user ? (
            <div className='relative'>
              <button
                onClick={toggleDropdown}
                className='flex items-center space-x-2 hover:text-gray-600 focus:outline-none'
              >
                <UserIcon className='h-6 w-6 text-black' /> {/* Avatar icon */}
              </button>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200'>
                  <button
                    onClick={handleLogout}
                    className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900'
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to='/login' className='text-black hover:text-gray-600'>
              <UserIcon className='h-6 w-6' />
            </Link>
          )}
          <Link to='/search' className='text-black hover:text-gray-600'>
            <SearchIcon className='h-6 w-6' />
          </Link>
          <Link to='/wishlist' className='text-black hover:text-gray-600'>
            <HeartIcon className='h-6 w-6' />
          </Link>

          {/* Giỏ hàng với Badge */}
          <Link to='/cart' className='relative text-black hover:text-gray-600'>
            <ShoppingCartIcon className='h-6 w-6' />
            {totalItems > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 py-1/2 rounded-full'>
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
