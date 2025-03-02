import React from 'react'
import Slider from '../components/common/Slider'
import Facilities from '../layouts/Facilities'
import RoomList from '../components/common/RoomList'
import Navbar from './../components/common/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Facilities />
      <RoomList />
    </div>
  )
}

export default Home
