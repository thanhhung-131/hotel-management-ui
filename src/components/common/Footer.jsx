import React, { useState } from 'react'

function Footer () {
  const [email, setEmail] = useState('')

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleSubscribe = e => {
    e.preventDefault()
    if (email) {
      alert(`Subscribed with email: ${email}`)
      setEmail('') // Reset form sau khi submit
    }
  }

  return (
    <footer className='bg-white py-12 border-t border-gray-200'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {/* Furniro Column */}
          <div>
            <h3 className='text-2xl font-bold text-black mb-4'>Furniro.</h3>
            <p className='text-gray-600 text-sm'>
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className='text-lg font-semibold text-gray-500 mb-4'>Links</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/'
                  className='text-gray-600 hover:text-gray-800 text-sm'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/shop'
                  className='text-gray-600 hover:text-gray-800 text-sm'
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href='/about'
                  className='text-gray-600 hover:text-gray-800 text-sm'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-gray-600 hover:text-gray-800 text-sm'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className='text-lg font-semibold text-gray-500 mb-4'>Help</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/payment'
                  className='text-gray-600 hover:text-gray-800 text-sm'
                >
                  Payment Options
                </a>
              </li>
              <li>
                <a
                  href='/returns'
                  className='text-gray-600 hover:text-gray-800 text-sm'
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href='/privacy'
                  className='text-gray-600 hover:text-gray-800 text-sm'
                >
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className='text-lg font-semibold text-gray-500 mb-4'>
              Newsletter
            </h3>
            <form
              onSubmit={handleSubscribe}
              className='flex flex-col space-y-2'
            >
              <input
                type='email'
                value={email}
                onChange={handleEmailChange}
                placeholder='Enter Your Email Address'
                className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
              />
              <button
                type='submit'
                className='w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors text-sm'
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 text-center text-gray-600 text-sm'>
          2023 Furniro. All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
