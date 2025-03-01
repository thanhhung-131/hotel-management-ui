import React from 'react'
import Navbar from './../components/common/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-4xl font-bold'>About Us</h2>
              <p className='text-gray-500 mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quos, voluptatum, fugit, quod voluptate eum doloremque
                perspiciatis quae dolorem quas quibusdam. Quisquam, quod
                voluptatem! Quod, quibusdam. Quisquam, quod voluptatem! Quod,
                quibusdam.
              </p>
            </div>
            <div>
              <img
                src='https://i.pinimg.com/474x/61/f9/79/61f979c5b85b086d374c1c13883769d5.jpg'
                alt='About Us'
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
