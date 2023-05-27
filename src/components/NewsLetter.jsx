import React from 'react'

const NewsLetter = () => {
  return (
   <>
    <div className="flex items-center justify-center m-4 z-20   " >
      <div className='flex items-center   p-4 sm:w-[50%] rounded-xl  bg-green-700 flex-col justify-center  lg:gap-2'>

          <div className='grid items-center sm:mx-6  sm:my-3 text-center'>
              <h1 className='text-xl md:text-3xl sm:text-2xl filter drop-shadow-lg font-bold text-slate-900
              '>Get In Touch With Us</h1>
              <p className='text-[1rem]'>Questions and Feedback? We would love to hear for you.</p>
          </div>
          
          <form className='flex items-center flex-col  sm:flex-row  gap-3   justify-center relative'>
              <input
                  placeholder='Your E-mail Address'
                  name='email'
                  type={'email'}
                  className="py-2 px-5 ring-1 text-green-400 ring-slate-300 flex items-center shadow-md 
                  shadow-slate-200  w-full text-base rounded-full
                   relative placeholder:text-slate-500 focus:outline-emerald-500"
              />
              <button className=" py-2 px-5 rounded-full bg-green-300" >Submit </button>
               
          </form>
      </div>
   </div>

 
   </>
  );
};

export default NewsLetter ;
