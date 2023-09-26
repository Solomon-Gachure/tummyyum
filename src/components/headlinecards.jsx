import React from 'react'

const Headlinecards = () => {
  return (
    <div className='max-w-[1640px] mx-auto py-12 grid md:grid-cols-3 gap-6 p-4'>
        {/*cards */}
        <div className='rounded-xl relative'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/20 text-white rounded-xl '>
<p className='pt-2 px-2 text-2xl'>Sun is out get your snack</p>
<p className='px-2 text-xl'>Driveby</p>
<button className='bg-green-500 mx-2 absolute bottom-4 font-bold border-green-500'>Order Now</button>
            </div>
              <img 
              className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
              src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600" alt="driveby snack"  />
        </div>
          {/*cards */}
          <div className='rounded-xl relative'>
              {/*overlay */}
              <div className='absolute w-full h-full bg-black/20 text-white rounded-xl '>
                  <p className='pt-2 px-2 text-2xl'>Get your drink + Burger</p>
                  <p className='px-2 text-xl'>Online order</p>
                  <button className='bg-green-500 mx-2 absolute bottom-4 font-bold border-green-500'>Order Now</button>
              </div>
              <img
                  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                  src="https://images.pexels.com/photos/2433981/pexels-photo-2433981.jpeg?auto=compress&cs=tinysrgb&w=600" alt="driveby snack" />
          </div>
          {/*cards */}
          <div className='rounded-xl relative'>
              {/*overlay */}
              <div className='absolute w-full h-full bg-black/20 text-white rounded-xl '>
                  <p className='pt-2 px-2 text-2xl'>Dessert is here to stay</p>
                  <p className='px-2 text-xl'>Online snack orders</p>
                  <button className='bg-green-500 mx-2 absolute bottom-4 font-bold border-green-500'>Order Now</button>
              </div>
              <img
                  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                  src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=600" alt="driveby snack" />
          </div>
    </div>
  )
}

export default Headlinecards