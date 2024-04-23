import React, { useState } from 'react'

import login from '../../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../../Firebase/FirebaseAuth'

const SignUp = () => {
  const navigatelogin =useNavigate()
  const [userSignUp, SetuserSignUp] = useState({ username: '', Email: '', Password: '' })
  const handleChange = (e) => {
    SetuserSignUp({ ...userSignUp, [e.target.name]: e.target.value })
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userSignUp.username || !userSignUp.Email || !userSignUp.Password) {
      return toast.error("All field are required")
    } else {
      createUserWithEmailAndPassword(auth
        , 
        userSignUp.Email,
        userSignUp.Password
      ).then( async(res) => {
        const user = res.user
        await updateProfile(user, {
          displayName:userSignUp.username
        })
        navigatelogin('/login')
      }).catch((err)=>toast.error(err.message))
    }
   }

  return (
    <div>
          
              <div className='relative'><img className='object-cover w-full object-center h-[277px] ' src={login} alt=""  /></div>
          <div className=' w-full h-[280px] bg-[black] absolute top-[111px] left-0 opacity-[.4]'></div>
         <div><h2 className=' absolute top-[25%] left-[10%] z-20 text-white font-semibold text-3xl '>Sign up</h2></div> 
              <div className=' w-[100%] h-[80vh]'>
                  


         <div className="container px-5 py-24 mx-auto flex items-center ">
    <div className="lg:w-1/3 md:w-1/2 bg-[red] mr-[500px]  rounded-lg p-8 flex flex-col  md:ml-auto w-full mt-15 md:mt-0 relative z-10 shadow-md">
      <h2 className="  mb-1 title-font font-bold text-3xl text-[white]">Sign up</h2>
      {/* <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
                          <div className="relative mb-4">
                              <label type='username' className="leading-7 text-sm mt-[50px] bg-[red]  text-[white]" id='username'>Full Name</label>
              <input type="username" id="username" autoComplete='false' onChange={handleChange}   value={userSignUp.username} name="username" className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              </div>
         {/* <div className='mb--8'>
        <label type='Email' className="leading-7 text-sm bg-[red] mr-20 border-none mt-[50px] text-[white]  " id='Email'>Email</label>
                <input type="Email" id="Email"    autoComplete='false' onChange={handleChange} value={userSignUp.Email} name="Email" className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               />
        </div> */}
            
            <div className="relative mb-4">
                              <label type='Email' className="leading-7 text-sm mt-[50px] border-none bg-[red]  text-[white]" id='Email'>Email</label>
              <input type="Email" id="Email" autoComplete='false' onChange={handleChange}   value={userSignUp.Email} name="Email" className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              </div>

      
          <div className='mb--8' >
        <label type='Password' className="leading-7   text-sm  bg-[red] border-none mt-[50px] text-[white]" id='Password'>Password</label>
              <input type="Password" id="Password" autoComplete='false' value={userSignUp.Password} onChange={handleChange} name="Password" className="w-full   bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
      </div>
                          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none mt-6 hover:bg-indigo-600 rounded text-1xl" onClick={handleSubmit}  >Sign Up</button>
                          <Link to='/login'><p className="text-xs text-white  mt-5">Do you have an account?<button className='cursor-pointer hover:text-blue-300'>Login</button></p></Link>
      
    </div>
  </div>  







        
        
        





























          </div>
          
          
        
    </div>
  )
}

export default SignUp
