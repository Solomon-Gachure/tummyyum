import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/*Overlay */}
            <div className='absolute max-h-[500px] flex flex-col justify-center bg-black/40 text-gray-200 w-full h-full'>
                  <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-400'>Best</span> </h1>
                  <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-400'>Foods</span> Delivered</h1>
            </div>
              <img className='w-full max-h-[500px]' src="https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fries" />
        </div>
    </div>
  )
}

export default Hero