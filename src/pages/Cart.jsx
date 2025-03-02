import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navbar from '../components/common/Navbar'

function CartPage () {
  const { cart, updateQuantity, removeFromCart } = useCart()

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='container mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-6'>Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>
            Your cart is empty.{' '}
            <Link to='/' className='text-blue-500'>
              Browse rooms
            </Link>
          </p>
        ) : (
          <div className='space-y-6'>
            {cart.map(item => (
              <div
                key={item.id}
                className='flex items-center justify-between p-4 border rounded-lg shadow-md'
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className='w-20 h-20 rounded-md object-cover'
                />
                <div className='flex-1 ml-4'>
                  <h2 className='text-lg font-semibold'>{item.name}</h2>
                  <p className='text-gray-500'>${item.price} / night</p>
                </div>

                <div className='flex items-center'>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className='px-3 py-1 border rounded-lg'
                  >
                    -
                  </button>
                  <span className='mx-3'>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className='px-3 py-1 border rounded-lg'
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className='ml-4 px-3 py-1 bg-red-500 text-white rounded-lg'
                >
                  Remove
                </button>
              </div>
            ))}
            <div className='text-right'>
              <h2 className='text-xl font-bold'>
                Total: ${totalPrice.toLocaleString()}
              </h2>
              <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded-lg'>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartPage
