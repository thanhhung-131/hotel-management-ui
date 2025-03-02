import React, { createContext, useState, useContext } from 'react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/solid'

// Tạo Context
const CartContext = createContext()

// Provider để lưu trạng thái giỏ hàng
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState('success') // 'success' or 'error'

  // Hàm thêm vào giỏ hàng
  const addToCart = product => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
    showToastMessage('Item added to cart successfully', 'success')
  }

  // Hàm cập nhật số lượng
  const updateQuantity = (id, amount) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    )
  }

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = id => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
    showToastMessage('Item removed from cart', 'error')
  }

  const showToastMessage = (message, type) => {
    setToastMessage(message)
    setToastType(type)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000) // Hide toast after 3 seconds
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
      {showToast && (
        <div
          className={`fixed top-16 right-4 px-4 py-2 rounded shadow-lg flex items-center space-x-2 ${
            toastType === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          {toastType === 'success' ? (
            <CheckCircleIcon className='h-6 w-6' />
          ) : (
            <ExclamationCircleIcon className='h-6 w-6' />
          )}
          <span>{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  )
}

// Custom hook để sử dụng giỏ hàng
export const useCart = () => {
  return useContext(CartContext)
}
