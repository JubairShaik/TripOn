import React from 'react'

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  return (
   <>
      <footer className=' pt-4  bg-blue-900 pb-7'>
        

 
        <div className=' w-full '>

        <h1 className="text-center text-[2rem]"  >We are TripOn</h1>
          <div className='h-[0.1vh] bg-black/30 my-7 md:my-5'></div>
          <div className='flex items-center flex-col-reverse justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse'>
            <p className='text-sm mt-3 sm:mt-0 text-center'>Copyright<span className='text-xl  '>&copy;</span> All Reserved Rights 2023 <span className='font-semibold'> | Jubair Ahmed</span></p>
            <div className='flex items-center gap-3'>
              {sociallinks?.map((val, i)=> (
                <img key={i} src={val.icon} alt="social/icons" className='w-5 h-5' />
              ))}                
            </div>
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer