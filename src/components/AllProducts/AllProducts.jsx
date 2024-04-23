import React, { useEffect, useState } from 'react'

import axios, { Axios } from 'axios'
import login from '../../assets/login.png'
import { Link } from 'react-router-dom'
import AllProductShim from '../AllProductShim/AllProductShim'




const AllProducts = ({Addtocart}) => {
  const [Allitems,Setallitems] = useState([])
  const [Allcategory, SetAllcategory] = useState([])
  const [Products, SetProducts] = useState([])
  const [SelectProduct, SetSelectProduct] = useState("")
  const [Showproduct, SetShowproduct] = useState(false)
  const [searchitem, Setsearchitem] =useState("")
  

  
  
  useEffect(() => {
    
    const getAllproductsCategory = async () => {
      const res = await axios('https://dummyjson.com/products/categories')
      SetAllcategory(res.data)

      
    }
   getAllproductsCategory();
  }, [])
    
  const filterProducts = (prod) => {
    SetSelectProduct(prod)
    SetShowproduct(true)
  }
  useEffect(() => {
    const Allproducts = async () => {
      const res = await axios('https://dummyjson.com/products')
     Setallitems(res.data.products)
    }
    Allproducts()
},[])
  
    
  useEffect(() => {
     
    const getAllproducts = async () => {
      if (SelectProduct) {
       const res = await axios(`https://dummyjson.com/products/category/${SelectProduct}`)
        SetProducts(res.data.products)
     }
      
     
    }
    getAllproducts();
  }, [SelectProduct]);


//search item
  const handleSearchitem = (e) => {
    const query = e.target.value;
    Setsearchitem(query)
    


    const searchProduct = Allitems.filter((searchFilter) => {
      searchFilter.title.includes(searchitem)
      
    })

    Setallitems(searchProduct)
}

  

  //https://dummyjson.com/products/categories
  return (
    <div>
      
         <div className='relative '><img className='object-cover w-full object-center h-[282px] bg-fixed ' src={login} alt=""  /></div>
          <div className=' w-full h-[200px] bg-[black] absolute top-[85px] left-0 opacity-[.4]'></div>
         <div><h2 className=' absolute top-[22%] left-[10%] z-20 text-white font-semibold text-3xl '>All Products</h2></div> 

        <div className='flex gap-3 flex-wrap mt-2'>
          <select onChange={(e)=>filterProducts(e.target.value)} className='ml-[42%]  px-3 py-2 pb-2 rounded-s-3xl rounded-r-3xl border-spacing-1 to-blue-500 text-black'  >
            <option >Filter by Category</option>
           
            {
              Allcategory.filter((filterItem) => ["smartphones",
                "laptops",
                "fragrances",
                "skincare",
                "groceries",
                "furniture",
                "tops",
                "womens-dresses",
                "womens-shoes",
                "mens-shirts",
                "mens-shoes",
                "mens-watches",
                "womens-watches",
                "womens-bags",
                "womens-jewellery",
                "sunglasses"].includes(filterItem)).map((prod,index) => {
                  return  <>
                    
                    <option value={prod} >
                      <div key={index}>{prod}</div>
                      </option>
                      
                  </>
                  
                })}
         </select >
           
       {/* search item */}
      </div>
      
      <div className='text-center mt-3 text-2xl'>
        <input placeholder='Search item' className='border-4 px-2 py-2' onChange={handleSearchitem} value={searchitem}/>
       </div>

      {
        !Allitems.length?(<AllProductShim/>):(<section className="text-gray-600 body-font">
         <div className="container px-5 py-24 mx-auto">
        <div className="flex gap-4 " >
          {
            Products.map((item) => {
              return (
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-x-2 border-y-2 h-[360px] rounded gap-2" key={item.id}>
                  <Link className="block relative h-48 rounded overflow-hidden" to={`/singlepage/${item.id}`}>
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.thumbnail}   /> 
        </Link>
        <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Title: { item.title}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium"> Rating: ⭐{item.rating}</h2>
                    <p className="mt-1"> Price: ${item.price}</p>
                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={Addtocart}>
                  Add to cart
                </button>
        </div>
      </div>
             )
           })
          }
          </div>
          </div>
          </section>)
}

       





          
        {   //show single product with ternary operator
          Showproduct? <section className="text-gray-600 body-font">
         <div className="container px-5 py-24 mx-auto">
        <div className="flex gap-4 " >
          {
            Products.map((item) => {
              return (
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-x-2 border-y-2 h-[360px] rounded gap-2" key={item.id}>
                  <Link className="block relative h-48 rounded overflow-hidden" to={`/singlepage/${item.id}`}>
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.thumbnail}   /> 
        </Link>
        <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Title: { item.title}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium"> Rating: ⭐{item.rating}</h2>
                    <p className="mt-1"> Price: ${item.price}</p>
                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={Addtocart}>
                  Add to cart
                </button>
        </div>
      </div>
             )
           })
          }
          </div>
          </div>
          </section> 
            // show all product
            :
        <div className='flex gap-[13px] items-center justify-around m-auto flex-wrap '>
          {
            
            Allitems.filter((filterP)=>!["smartphones",
                "laptops",
                "fragrances",
                "skincare",
                "groceries",
                "furniture",
                "tops",
                "womens-dresses",
                "womens-shoes",
                "mens-shirts",
                "mens-shoes",
                "mens-watches",
                "womens-watches",
                "womens-bags",
                "womens-jewellery",
                "sunglasses"].includes(filterP)).map((allitems) => {
              return <div key={allitems.id} className='lg:w-1/4 md:w-1/2 p-4 w-full border-x-2 border-y-2 h-[400px] rounded gap-2'>
                <Link to={`/singlepage/${allitems.id}`}>
                  <img src={allitems.thumbnail} className='object-cover object-center block w-[300px] text-center ' />
                </Link> 
                <div className=' mt-4' >
                  <h3 className=' text-gray-500 text-xs tracking-widest title-font mb-1'>
                    Title: {allitems.title}
                  </h3>
                  <h2 className='text-gray-900 title-font text-lg font-medium'>Rating: {allitems.rating}</h2>
                  <p className='mt-1 '>Price: {allitems.price } Rs.</p> 
                  <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={()=>Addtocart(allitems)}>
                 add to cart
                </button>
                </div>
                  
              </div>  })
             }
             
            </div>
        }
     
      
    </div>
  )
}

export default AllProducts