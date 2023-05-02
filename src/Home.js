import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
     <img   
     className='home__image'
     src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
      alt=''
      />
   
      {/*product id ,title, price, rating, image */}
      <div className="home__row">
      <Product      
         id="12321341"
         title="The Lean Startup: How Constnt Innovation creates Radically Successful Businesses Paperback"
         price={11.96}
         rating={5}
         image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UF1000,1000_QL80_.jpg"
         />
      <Product      
         id="12321341"
         title="Chicago Skates Chicago Men's Premium Leather Lined Rink Roller Skate"
         price={4378}
         rating={3}
         image="https://m.media-amazon.com/images/I/81YPAeBR9bL._AC_SL1500_.jpg"
         />      
      
         </div>
      

       <div className="home__row">
       <Product      
         id="12321341"
         title="New Apple iPhone 14 (128 GB)"
         price={4790}
         rating={5}
         image="https://media.wired.com/photos/6332360740fe1e8870aa3bc0/191:100/w_1280,c_limit/iPhone-14-Review-Gear.jpg"
         />
         <Product      
       id="12321341"
       title="TILLREDA Microwave oven, white"
       price={5400}
       rating={5}
         image="https://www.ikea.com/eg/en/images/products/tillreda-microwave-oven-white__1076734_pe856842_s5.jpg"
         />
         <Product      
         id="12321341"
         title="Samsung UA32T5300 - 32-inch HD Smart TV with Built-in Receiver"
         price={5299}
         rating={5}
         image="https://cdnprod.mafretailproxy.com/sys-master-root/h0e/h60/17582783266846/529433_main.jpg_480Wx480H"
         />
       </div>
       <div className="home__row">
       <Product      
         id="12321341"
         title="Table and 6 chairs, white/Orrsta light grey/white, 180/240 cm"
         price={45265}
         rating={4}
         image="https://www.ikea.com/eg/en/images/products/ekedalen-bergmund-table-and-6-chairs-white-orrsta-light-grey-white__0951050_pe800882_s5.jpg?f=l"
         />
        </div>
    </div>
  )
}

export default Home 