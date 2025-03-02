import React, { useState, useEffect } from 'react'

const Slider = () => {
  const images = [
    'https://i.pinimg.com/736x/24/50/aa/2450aa8df8db49a26a56d1e237c9744b.jpg',
    'https://i.pinimg.com/736x/6c/db/77/6cdb77e1993fc59597797c31bb42d760.jpg',
    'https://i.pinimg.com/736x/0d/51/23/0d5123d37ad54c65937ec82380ae8655.jpg'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = index => {
    setCurrentIndex(index)
  }

  return (
    <div className='container mx-auto relative w-full'>
      <div className='overflow-hidden h-96 relative'>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#65AEF247] via-[#00346500] to-transparent'></div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 flex justify-center p-4'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
