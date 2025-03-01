import React from 'react'
import roomImage from '../../assets/images/room.jpg' // Import hình ảnh

function Room () {
  return (
    <div
      style={{ backgroundImage: `url(${roomImage})` }}
      className='bg-cover bg-center rounded-xl h-[480px] flex justify-center items-center text-white text-2xl font-bold shadow-lg cursor-pointer hover:scale-105 transition-transform'
    >
      Rooms
    </div>
  )
}

export default Room
