import React from 'react'
import banner from '../../assets/banner.jpg'
const Hero = () => {
  return (
      <div>
          <div className='relative  '> <img src={banner} alt="" className='w-full object-cover object-center' /></div>
          <div className='absolute top-[40%] left-[50%]'>
              <h1 className=' text-5xl font-bold text-[red]'>Discover Your Next Adventure</h1>
              <p className='text-center text-2xl mt-5 font-semibold'>
                  Shop Our Latest Arrival & Unleash Your Style
              </p>
              
          </div>
          
      </div>
      
  )
}

export default Hero
