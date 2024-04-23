import React,{useState} from 'react'

import login from '../../../assets/login.png'
import { Link,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { auth } from '../../../Firebase/FirebaseAuth'
import {  signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {

const navigatehome =useNavigate()
  const [userSignUp, SetuserSignUp] = useState({ Email: '', Password: '' })
  const handleChange = (e) => {
    SetuserSignUp({ ...userSignUp, [e.target.name]: e.target.value })
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !userSignUp.Email || !userSignUp.Password) {
      return toast.error("All field are required")
    } else {
      signInWithEmailAndPassword(auth
        , 
        userSignUp.Email,
        userSignUp.Password
      ).then((res) => {   
        navigatehome('/')
      }).catch((err)=>toast.error(err.message))
    }
   }



  return (
    <div>
          
              <div className='relative'><img className='object-cover w-full object-center h-[272px] ' src={login} alt=""  /></div>
          <div className=' w-full h-[289px] bg-[black] absolute top-[75px] left-0 opacity-[.4]'></div>
         <div><h2 className=' absolute top-[22%] left-[10%] z-20 text-white font-semibold text-3xl '>Login</h2></div> 
              <div className=' w-[100%] h-[80vh]'>
                  


         <div className="container px-5 py-24 mx-auto flex items-center ">
    <div className="lg:w-1/3 md:w-1/2 bg-[red] mr-[500px]  rounded-lg p-8 flex flex-col  md:ml-auto w-full mt-15 md:mt-0 relative z-10 shadow-md">
      <h2 className="  mb-1 title-font font-bold text-3xl text-[white]">Login</h2>
      {/* <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
      <div className="relative mb-4">
        <label type='Email' className="leading-7 text-sm bg-[red] text-[white] border-none pr-8"  id='Email'>Email</label>
              <input type="Email" value={userSignUp.Email} id="Email" name="Email" onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                  
      </div>
      <div className="relative mb-4">
        <label type='Password' className="leading-7 text-sm text-black-600 bg-[red] border-none text-[white] " id='Password'>Password</label>
        <input type="Password" value={userSignUp.Password} id="Password" onChange={handleChange} name="Password" className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none mt-6 hover:bg-indigo-600 rounded text-1xl" onClick={handleSubmit}>Login</button>
                        
                              <Link to='/Signup'>  <p className="text-xs text-white  mt-5"> Don't have an account?<button className='cursor-pointer hover:text-blue-300'>Sign Up</button></p></Link>
                              
    </div>
  </div>  





































          </div>
          
          
          
    </div>
  )
}

export default Login
