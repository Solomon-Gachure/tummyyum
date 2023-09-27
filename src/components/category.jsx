import React from 'react'
import {categories} from"../data/data.js"
const Category = () => {
  return (
    <div className='max-w-[1640px] px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 px-2 gap-6 pt-2'>
            {categories.map((item,index)=>(
                <div className='bg-slate-300 rounded-lg flex justify-between items-center p-4' key={index}>
                    <h2 className=' font-bold sm:text-xl'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.name} />
                </div>
            )
                
            )}
        </div>
    </div>
  )
}

export default Category