import React from 'react'
import { Link } from 'react-router-dom'
const Cartempty = () => {
  return (
      <div>
          <div className='w-full h-[80vh] mt-[80px] bg-[#f7f6f6] container mx-auto my-4 px-4 py-4 shadow-lg rounded-md
         flex justify-center items-center'>
              <div className='flex justify-center items-center flex-col'>
               
                  <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" className='w-[300px]' />
                  <h3 className='text-center gap-3 text-2xl font-semibold mt-3'>Your Cart is Empty Now</h3>
                <Link to="/"><button className=' text-white bg-indigo-900 border-0 py-2 px-1 mt-6  md:px-3 focus:outline-none  hover:bg-indigo-600 rounded'>Go to home</button></Link> 
              </div>
              
          </div>
      </div>
  )
}

export default Cartempty