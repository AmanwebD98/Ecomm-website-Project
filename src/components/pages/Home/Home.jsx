import React from 'react'

import Hero from '../../Hero/Hero'
import Service from '../../service/Service'
import Gallery from '../../Gallery/Gallery'
import Popularproduct from '../../Popularproduct/Popularproduct'
import Testinomial from '../../Testinomial/Testinomial'


const Home = ({Addtocart}) => {
  return (
    <div className=''>

      
        <Hero />
      <Service />
      <Popularproduct Addtocart={Addtocart} />
      <Gallery />
      <Testinomial/>
        
      
    </div>
  )
}

export default Home
