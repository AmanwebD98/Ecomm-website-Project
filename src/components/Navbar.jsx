import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { auth } from '../Firebase/FirebaseAuth';
import toast from 'react-hot-toast';
const Navbar = ({cart,userName}) => {
  const [isopen, setIsopen] = useState(false)
  const ToggleChange = () => {
    isopen===false?setIsopen(true):setIsopen(false)
      
  }
  
  const handleLogout = () => {
    auth.signOut().then(() => {
      toast.success("Logout Successfully")
    }).catch((err) => {
      toast.error(err)
      
    })
  }
  return (
    
    <>
      <div>
        <header className='bg-white border-b border-gray-200  z-20  w-full'>
          <div className='container mx-auto flex justify-between p-5 items-center'>
            <div>
              <Link to='/'><h3 className='font-bold text-2xl'>
                Amaze<span className='text-[red]'>Shop</span>
              </h3></Link>
              
            </div>
            <div className='hidden md:block mt-0'>
            <ul className='flex items-center text-lg justify-center font-semibold'>
              <Link to='/' ><li  className='mr-5 hover:text-gray-900 cursor-pointer'>Home</li></Link>
              <Link to='/AllProducts' ><li className='mr-5 hover:text-gray-900 cursor-pointer'  >All Products</li></Link>
              <Link to='/about' ><li className='mr-5 hover:text-gray-900 cursor-pointer'  >About</li></Link>
             <Link to='/contact' ><li className='mr-5 hover:text-gray-900 cursor-pointer'  >Contact </li></Link>
              
              </ul>
              </div>
            

            {
              isopen?<div className=''>

             <button className='absolute top-[90px] z-30 right-10 text-white py-4 px-2 cursor-pointer ' onClick={ToggleChange}><RxCross1 size={30}/></button>
            <ul className='flex  flex-col z-10 bg-[red] h-screen w-full gap-10 text-white text-center top-[73px] items-center text-lg justify-center font-semibold absolute left-0'>
              <Link to='/'><li className='mr-5 hover:text-gray-900 cursor-pointer'>Home</li></Link>
              
             <Link to='/AllProducts'> <li className='mr-5 mt-5 hover:text-gray-900 cursor-pointer'>All Products</li></Link>
             <Link to='/about'><li className='mr-5 mt-5 hover:text-gray-900 cursor-pointer'>About</li></Link> 
              <Link to='/contact'><li className='mr-5 mt-5 hover:text-gray-900 cursor-pointer'>Contact</li></Link>
              </ul>
              </div>:""
            }



            










            <div className='flex justify-center items-center gap-3'>
              {
                userName?(<> <Link to='/login'><button className=' items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rouded text-base mt-4 md:mt-0 mb-4 font-bold'  onClick={handleLogout}>Logout</button></Link>
              <span>{userName }</span></>):(<> <Link to='/login'><button className=' items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rouded text-base mt-4 md:mt-0 mb-4 font-bold' onClick={handleLogout}>login</button></Link>
              </>)
              }
             
              <Link to='/cart'><button className='relative'><FaShoppingCart size={30} /><span
                className='absolute top-[-5px] bg-[red] right-0 text-white px-1 rounded-full text-xs'>{cart.length}</span>
              </button></Link>

              {
                isopen?'':<button className='md:hidden'  onClick={ToggleChange}><GiHamburgerMenu size={30} /></button>
            }

             
               
            </div>
          </div>
          </header>
      </div>
      
    </>
  )
}

export default Navbar
