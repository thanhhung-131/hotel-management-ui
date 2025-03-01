import React from 'react'
import weddingImage from '../../assets/images/wedding.jpg'

function Wedding () {
  return (
    <div
      style={{ backgroundImage: `url(${weddingImage})` }}
      className='bg-cover bg-center rounded-xl h-64 flex justify-center items-center text-white text-2xl font-bold shadow-lg cursor-pointer hover:scale-105 transition-transform'
    >
      Wedding Package
    </div>
  )
}

export default Wedding
