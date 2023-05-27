import React from 'react'
import { Button } from "@material-tailwind/react";
import { Navigation, Hero , Memory , Explore , Advertise , Pricings , NewsLetter , Footer } from './components'
import { hero,memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/travigodata';



const App = () => {
  return (
    <> 
<div className="bg-primary-black text-white overflow-hidden">
<div className="gradient-02 z-0" />
<Navigation/>
<Hero  hero={hero} />
   <div className="relative">
     <Memory memory={memory} />
     <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
     <div className="gradient-06  z-0" />
     <Advertise brands={brands} />
     </div>
     <div className="relative">
     <Pricings pricingapi={pricingapi} />
     <div className="gradient-04 z-0" />
     <NewsLetter />
     <div className="gradient-03  z-0" />
     </div>
     <div className="gradient-06  z-0" />
   <Footer footerAPI={footerAPI} />
   
     
</div>
     

    </>
  )
}

export default App