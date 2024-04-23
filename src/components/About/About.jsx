import React from 'react'
import login from ".././../assets/login.png"
const About = () => {
  return (
    <>
      <div>
                  <div className='relative'><img className='object-cover w-full object-center h-[272px] ' src={login} alt=""  /></div>
          <div className=' w-full h-[200px] bg-[black] absolute top-[75px] left-0 opacity-[.4] bg-fixed'></div>
        <div><h2 className=' absolute top-[22%] left-[10%] z-20 text-white font-semibold text-3xl '>About Us</h2></div>
        

        <div>
          <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://clipground.com/images/about-us-png-10.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">Who We Are
        <br className="hidden lg:inline-block"></br>
      </h1>
      <p className="mb-8 leading-relaxed text-[22px]">
The AmazeShop Group is one of India’s leading digital commerce entities and includes group companies Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+, and Cleartrip.

Started in 2007, Flipkart has enabled millions of sellers, merchants, and small businesses to participate in India's digital commerce revolution. With a registered customer base of more than 500 million, Flipkart's marketplace offers over 150 million products across 80+ categories. Today, there are over 14 lakh sellers on the platform, including Shopsy sellers. With a focus on empowering and delighting every Indian by delivering value through technology and innovation, Flipkart has created lakhs of jobs in the ecosystem while empowering generations of entrepreneurs and MSMEs. Flipkart is known for pioneering services such as Cash on Delivery, No Cost EMI and easy returns, which are customer-centric innovations that have made online shopping more accessible and affordable for millions of Indians.</p>
      
    </div>
  </div>
</section>
        
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
   
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt--8">TECHNOLOGY AT Amaze<span className='text-[red]'>Shop</span>
        <br className="hidden lg:inline-block"></br>INNOVATION
      </h1>
      <p className="mb-8 leading-relaxed text-[22px]">
 <br></br> AmazeShop technology drives path-breaking,  customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.</p>
      
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://corporate.flipkart.net/assets/images/technology-image.png"/>
    </div>
  </div>
</section>
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
      </div>
    </>
  )
}

export default About
