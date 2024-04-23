import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Popularproduct = ({Addtocart}) => {
   const [popularproduct,setpopularproduct]= useState([])

   
    useEffect(() => {
        
    const PopularProductFetch  = async () => {
      const res = await axios( 'https://dummyjson.com/carts/1')
        
        setpopularproduct(res.data.products)
        console.log(res.data.products)
    }
    PopularProductFetch()
},[])





  return (
      <div>
          <div>
              <div className='mt-10 text-center'><h2 className=' text-4xl md:text-center text-[black] text-5xl font-serif underline'>Popular Products</h2></div>
              
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
                      <div className="flex flex-wrap -m-4">
                          {
                              popularproduct.filter((item,index)=>index!==1).map((popularitem)=>{
                                 
                                  
                                  return  <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={popularitem.id}>
        <a className="block relative h-48 rounded overflow-hidden">
                                          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={popularitem.thumbnail } />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                          <h2 className="text-gray-900 title-font text-lg font-medium">Title: {popularitem.title}</h2>
                                          <p className="mt-1 text-[20px] font-semibold">Price: {popularitem.price}$</p>
                                          
                                      </div>
                                      <button className=' text-white bg-indigo-900 border-0 py-2 px-1 mt-2 md:px-3 focus:outline-none hover:bg-indigo-600 rounded' onClick={()=>Addtocart(popularitem)}>Add to cart</button>
      </div>
                              })}
    
      
      
      
      
    </div>
  </div>
</section>








          </div> 


    </div>
  )
}

export default Popularproduct