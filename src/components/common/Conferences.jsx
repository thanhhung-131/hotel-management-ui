import React from 'react'
import conferencesImage from '../../assets/images/conferences.jpg'

function Conferences () {
  return (
    <div
      style={{ backgroundImage: `url(${conferencesImage})` }}
      className='bg-cover bg-center rounded-xl h-[480px] flex justify-center items-center text-white text-2xl font-bold shadow-lg cursor-pointer hover:scale-105 transition-transform'
    >
      Conferences & Meetings
    </div>
  )
}

export default Conferences
