import React from 'react'
import g1 from '../../assets/g1.jpg'
import g2 from '../../assets/g2.jpg'
import g3 from '../../assets/g3.jpg'
import g4 from '../../assets/g4.jpg'
import g5 from '../../assets/g5.jpg'
import g6 from '../../assets/g6.jpg'
const Gallery = () => {
  return (
      <>
      <div>
         <div className='mt-1 text-center'><h2 className=' text-4xl, md:text-center text-[black] text-5xl font-serif underline'>Gallery</h2></div> 
              <section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto flex flex-wrap">
   
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2  hover:scale-75 translate-x-3 skew-x-3 duration-500">
                                  <img alt="gallery" className="w-full object-cover h-full object-center block" src={g1 } />
        </div>
        <div className="md:p-2 p-1 w-1/2  hover:scale-75 translate-x-3 skew-x-3 duration-500">
                                  <img alt="gallery" className="w-full object-cover h-full object-center block" src={g2 } />
        </div>
        <div className="md:p-2 p-1 w-full hover:scale-75 translate-x-3  duration-500  ">
                                  <img alt="gallery" className="w-full h-full object-cover object-center block" src={ g3} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full  hover:scale-75 translate-x-3 skew-x-3 duration-500">
                                  <img alt="gallery" className="w-full h-full object-cover object-center block" src={ g4} />
        </div>
        <div className="md:p-2 p-1 w-1/2  hover:scale-75 translate-x-3 skew-x-3 duration-500">
                                  <img alt="gallery" className="w-full object-cover h-full object-center block" src={ g5} />
        </div>
        <div className="md:p-2 p-1 w-1/2  hover:scale-75 translate-x-3 skew-x-3 duration-500">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={g6} />
        </div>
      </div>
    </div>
  </div>
</section>
          </div>
      
    </>
  )
}

export default Gallery
