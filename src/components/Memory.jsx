import React from 'react'

const Memory = ({ memory: { title, text, subtitle, img, experience } }) => {
  return (
    <div  id="About" className="sm:my-[9rem]  my-12 sm:mb-5 ">
        <div className="trivago-container flex items-center
                  justify-between mx-[1.7rem] md:mx-[7rem] 
                  sm:mb-[9rem] my-[3rem]  lg:mx-[8rem] sm:flex-row flex-col-reverse
                   gap-8 sm:gap-16 " >
          <div className=" items-center sm:justify-start   justify-center max-w-sm w-full  ">
                  <img src={img}  className="h-full w-full" alt="" />
          </div>

          <div className="grid items-center w-full  text-center ">
          <h1 className=' text-4xl s:text-6xl   font-bold   filter drop-shadow-lg'>{title}</h1>
          <h1 className=' text-3xl ss:text-6xl    py-3  heading font-bold   '>{subtitle}</h1>
          <p className='text-base my-5 sm:text-sm'>{text}</p>

          <div className='grid items-center grid-cols-3  gap-3 sm:gap-5'>
          {experience?.map((val, i) => (
              <div key={i} className="bg-gradient-to-tr from-green-300 via-green-700 to-green-500  
              flex items-center justify-center flex-col py-6 px-5 xl:p-5 rounded-lg text-slate-900 filter cursor-pointer hover:scale-105 transition-all duration-400">
                  <h1 className='text-xl sm:text-2xl md:text-4xl'>{val.number}</h1>
                  <p className=' text-[.7em] sm:text-xl font-light'>{val.title}</p>
              </div>
          ))}
             </div>
          </div>
        </div>    
    </div>
  )
}

export default Memory
