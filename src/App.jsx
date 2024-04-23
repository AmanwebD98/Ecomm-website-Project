import React, { useEffect, useState } from 'react'
import Home from './components/pages/Home/Home.jsx'
import Cart from './components/pages/Cart/Cart.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AllProducts from './components/AllProducts/AllProducts.jsx'
import Login from './components/pages/Login/Login.jsx'
import SignUp from './components/pages/Signup/Signup.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import toast, {  Toaster } from 'react-hot-toast'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase/FirebaseAuth.js'
import SinglePage from './components/pages/SinglePage/SinglePage.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'

function App() {
  
  const [cart, Setcart] = useState([])
   const [promocode, SetPromoCode] = useState("")
  const [discount, Setdiscount] = useState(0)
  const [invalid, Setinvalid] = useState("")
  const [userName, SetuserName] = useState('')
  
  const Addtocart = (allitems) => {
    const isProductExist = cart.find((findItem) => findItem.id === allitems.id)
    if (isProductExist) {
      const updateCart = cart.map((item) => {
        item.id === allitems.id?{...item,quantity:item.quantity+1}:item
      })

      Setcart(updateCart)
      
    }
    else {
      Setcart([...cart, { ...allitems, quantity: 1 }])
      toast.success('Product is added to cart')
    }
    
    //  Addtocart()
    console.log(cart)
    
  }
  const handleInc = (id) => {
  
    const incQuantity = cart.map((item) => {
      item.id === id ? { ...item, quantity: item.quantity + 1 }:item
    }) 
    Setcart(incQuantity)


  }

  const handleDec = (id) => {
     const decQuantity = cart.map((item) => {
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 }:item
    }) 
    Setcart(decQuantity)
  }
  const handleRemove = (id) => {
    const updateByfilter = cart.filter((filterItem) => filterItem.id !== id)
    Setcart(updateByfilter)
  }
  const getTotalPrice = () => {
     const totalPrice =cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price* cartReduceItem.quantity
     }, 0)
    return totalPrice - discount;
  }
  //Promocode
  
  
  const applyPromoCode = () => {
    if (promocode === "DISCOUNT10") {
      Setdiscount(getTotalPrice() * 0.1)
      SetPromoCode('')
    }
    else {
      Setinvalid(toast.error('invalid code'))
    }
  }
  useEffect(() => {
    auth.onAuthStateChanged(( user) => {
      if (user) {
        SetuserName(user.displayName)
      }
      else {
        SetuserName("")
      }
    })
},[])


  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar cart={cart} userName={userName} />
          <Routes>
            <Route path='/' element={<Home Addtocart={Addtocart} />} />
            
            <Route path='/cart' element={<Cart cart={cart} handleInc={handleInc} handleDec={handleDec} handleRemove={handleRemove} getTotalPrice={getTotalPrice } applyPromoCode={applyPromoCode} promocode={promocode} SetPromoCode={SetPromoCode} invalid={invalid}/>} />
            <Route path='/cart' element={<Cart cart={cart}  handleInc={handleInc}  handleDec={handleDec}  handleRemove={handleRemove}  getTotalPrice={getTotalPrice } applyPromoCode={applyPromoCode} promocode={promocode} SetPromoCode={SetPromoCode} invalid={invalid} />} />
            <Route path='/AllProducts' element={<AllProducts Addtocart={Addtocart} />} />
            <Route path='/singlepage/:id' element={<SinglePage Addtocart={Addtocart } />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<SignUp />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element ={<About/>} />
            
            
          </Routes>
          <Toaster/>
          <Footer/>
         </BrowserRouter>
      </div>
    </>
  )
}

export default App
