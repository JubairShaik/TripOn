import React from 'react'
import { motion } from "framer-motion";
import { slideIn , staggerContainer , textVariant } from '../utils/motion';

const Hero = ({ hero: { title, subtitle, btn1, btn2, text, img } }) => {
  return (
    
    <>
    <div id="home" className="flex  flex-col ">

            <div className="trivago-container grid items-start justify-center ">

                <motion.div 
                
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once:false , amount :0.25}}
                className="grid items-center justify-items-center   mt-[9rem] mb-3  sm:mt-[14rem] sm:mb-5">
                
                    
                   <motion.h1
                    variants={textVariant(1.1)}                    
                    className="text-4xl font-bold sm:text-7xl text-white   filter drop-shadow-lg"
                     
                >
                    {title}
                  </motion.h1>

                    <motion.h1
                    variants={textVariant(1.1)}                    
                    className="text-4xl font-bold sm:text-7xl mt-1 sm:mt-3 heading filter">Explore The World
                    </motion.h1>

                </motion.div>
                     <p className=' text-bold text-sm mx-auto  my-3 sm:my-5 font text-center sm:text-lg'>{text}</p>

                     <div className="flex items-center justify-center gap-3  py-4 sm:gap-10 flex-col w-full sm:flex-row  " >
                            <button className="button-light1  ">{btn1}</button>
                            <button className="button-light2  ">{btn2}</button>
                     </div>
               

                <div className="flex items-center justify-center mt-10 mb-10" >


                <img src={img} className="h-[30vh]  md:h-[90vh] w-full object-contain drop-shadow-white " alt="image" />
  
                </div>

            </div>

    </div>

    </>
      
    
  )
}

export default Hero
