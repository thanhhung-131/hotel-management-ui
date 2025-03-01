import React from 'react'
import diningImage from '../../assets/images/dining.jpg'

function Dining () {
  return (
    <div
      style={{ backgroundImage: `url(${diningImage})` }}
      className='bg-cover bg-center rounded-xl h-[480px] flex justify-center items-center text-white text-2xl font-bold shadow-lg cursor-pointer hover:scale-105 transition-transform'
    >
      Dining
    </div>
  )
}

export default Dining
