import React from 'react'

const AllProductShim = () => {
    const array = new Array(12).fill("")
  return (
      <div>
          <div>
                <section className="text-gray-600 body-font">
         <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap gap-20 " >
                          {
                              array.map((el, i) => {
                                  return    <><div className=" lg:w-1/4 md:w-1/2 p-4 w-full border-x-2 border-y-2 h-[360px] rounded-md gap-2" >
                  
                <div className='w-full flex flex-wrap h-[200px] bg-[#ccc] rounded '></div>
        <div className="mt-4">
                    <h3 className=" mb-1 h-[20px] w-[300px] bg-[#ccc]" > </h3>
                    <h2 className=" h-[20px] w-[200px] bg-[#ccc]"> </h2>
                    <p className="mt-1 h-[20px] w-[220px] bg-[#ccc]"> </p>
                    <button className=" h-[20px] w-[100px] bg-[#ccc] font-semibold mt-2">
                  
                </button>
        </div>
      </div></>
                              })
          }
            
               
               
             
           
          
          </div>
          </div>
          </section>
          </div>
    </div>
  )
}

export default AllProductShim