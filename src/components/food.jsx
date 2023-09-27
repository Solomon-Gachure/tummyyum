import React, { useState } from 'react'
import { data } from "../data/data.js"
const Food = () => {
    const [foods, setFoods] = useState(data)
    return (
        <div className='max-w-[1640px] m-auto py-2 px-4 '>
            <h1 className='text-orange-600 font-bold text-center text-4xl'>Top Rated Menu</h1>
            {/*filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/*filter type */}
                <div>
                    <p className='font-bold text-xl'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button className='m-1 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button className='m-1 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button className='m-1 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button className='m-1 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
                        <button className='m-1 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>

                    </div>
                </div>
                {/*filter price */}
                <div>
                    <p className='font-bold text-xl'>Filter Price</p>
                    <div>
                        <button className='m-1 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button className='m-1 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button className='m-1 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button className='m-1 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>

                </div>

            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((items, index) => (
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                        <img src={items.image} alt={items.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='px-2 py-2'>
                            <p className='font-bold'>{items.name}</p>
                            <p>
                                <span className='font-bold text-green-500'>{items.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food