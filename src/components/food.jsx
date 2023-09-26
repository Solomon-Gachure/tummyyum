import React from 'react'
import { data } from "../data/data.js"
const Food = () => {
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
        </div>
    )
}

export default Food