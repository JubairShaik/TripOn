import React from 'react'

const Explore = ({ title, placesAPI }) => {
  return (
   <>
      <div
      id="Explore"
      className='relative my-10 md:mt-3'>

        <div className='travigo-container'>

            <div className='flex items-center gap-3 flex-wrap  justify-center text-center  my-6 md:my-12'>
                <span className="h-[.15rem]  flex-1  bg-green-400" ></span>
                <h1 className='md:text-4xl  sm:text-4xl text-[1rem] font-bold  text-slate-900'>{title}</h1>
                <span className="h-[.15rem] flex-1  bg-green-400" ></span>
            </div>

            <div className='grid items-center justify-items-center grid-cols-2  md:grid-cols-4 gap-3 sm:gap-5'>
                {placesAPI?.map((val, i) => (
                    <div key={i} className="flex items-center gap-3 sm:gap-5 rounded-lg hover:bg-emerald-300 transition-all
                     duration-300 cursor-pointer hover:scale-105">


                        <div className='flex w-20 h-20 sm:w-16 sm:h-16  items-center'>
                            <img src={val.placeImg} alt={val.location} className="   rounded-lg " />
                        </div>

                        <div className='flex items-start flex-col text-slate-900'>
                            <h1 className=' lg:text-[1.3rem]  text-[.8rem] sm:text-[.9rem]'>{val.location}</h1>
                            <p className=' lg:text-[1.02rem]  text-semibold text-green-200 text-[.8rem] sm:text-[.9rem]'>{val.distance}</p>
                        </div>


                    </div>
                ))}
            </div>


        </div>
      </div>
   </>
  )
}

export default Explore