import React from 'react'
import servicesImage from '../../assets/images/services.jpg'

function Services () {
  return (
    <div
      style={{ backgroundImage: `url(${servicesImage})` }}
      className='bg-cover bg-center rounded-xl h-64 flex justify-center items-center text-white text-2xl font-bold shadow-lg cursor-pointer hover:scale-105 transition-transform'
    >
      Service & Facilities
    </div>
  )
}

export default Services
