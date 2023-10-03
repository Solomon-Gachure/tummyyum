import React , {useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] flex items-center justify-between mx-auto p-4'>
        {/* side left */}
        <div className='flex items-center'>
            <div onClick={()=> setNav(!nav)}className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span></h1>
            <div className='hidden lg:flex items-center rounded-full bg-gray-200 p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/*search input part */}
        <div className='flex bg-gray-200 rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent focus:outline-none p-2 w-full'type="text" placeholder='Search Food' />
        </div>
          {/*Cart icon part */}
          <button className='bg-black text-white items-center hidden md:flex py-2 rounded-full'>
              <BsFillCartFill className='mr-2'size={20}/>Cart
          </button>
          {/*Mobile menu */}
          {/*Overlay */}
      
{/*Side drawer menu */}
      <div className={nav ? 'bg-white fixed top-0 left-0 w-[300px] h-screen z-10 duration-300' : 'bg-white fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300'}>
    <AiOutlineClose 
    onClick={()=>setNav(!nav)}
    className='absolute right-4 top-4 cursor-pointer'size={30}/>
              <h1 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h1>
              <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex'><TbTruckDelivery className='mr-2'size={25}/>Orders</li>
                      <li className='text-xl py-4 flex'><MdFavorite className='mr-2'size={25} />Favorites</li>
                      <li className='text-xl py-4 flex'><FaWallet className='mr-2'size={25} />Wallet</li>
                      <li className='text-xl py-4 flex'><MdHelp className='mr-2'size={25} />Help</li>
                      <li className='text-xl py-4 flex'><AiFillTag className='mr-2'size={25} />Promos</li>
                      <li className='text-xl py-4 flex'><BsFillSaveFill className='mr-2'size={25} />Best ones</li>
                      <li className='text-xl py-4 flex'><FaUserFriends className='mr-2'size={25} />Invite friends</li>

                </ul>
              </nav>
</div>
    </div>
  )
}

export default Navbar