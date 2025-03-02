import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register () {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Kiểm tra dữ liệu mẫu (bạn có thể thay bằng API hoặc logic thực tế)
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required')
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }
    setError('')
    alert('Registration successful! Please login with your new account.')
    // Ở đây, bạn có thể chuyển hướng đến trang login bằng history.push hoặc useHistory
  }

  return (
    <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
        Register
      </h2>
      {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your email'
            required
          />
        </div>
        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your password'
            required
          />
        </div>
        <div>
          <label
            htmlFor='confirmPassword'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Confirm Password
          </label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Confirm your password'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors'
        >
          Register
        </button>
      </form>
      <p className='text-center text-gray-600 mt-4'>
        Already have an account?{' '}
        <Link to='/login' className='text-blue-600 hover:underline'>
          Login here
        </Link>
      </p>
    </div>
  )
}

export default Register
