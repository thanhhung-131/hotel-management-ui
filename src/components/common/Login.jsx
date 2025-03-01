import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Login () {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Kiểm tra dữ liệu mẫu (bạn có thể thay bằng API thực tế)
    if (
      formData.email === 'user@example.com' &&
      formData.password === 'password123'
    ) {
      setError('')
      login({ email: formData.email, name: 'User' }) // Lưu thông tin người dùng vào context
      navigate('/') // Chuyển hướng về trang Home
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className='mt-20 bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
        Login
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
        <button
          type='submit'
          className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors'
        >
          Login
        </button>
      </form>
      <p className='text-center text-gray-600 mt-4'>
        Don’t have an account?{' '}
        <Link to='/register' className='text-blue-600 hover:underline'>
          Register here
        </Link>
      </p>
    </div>
  )
}

export default Login
