import React from 'react'
import { FaSearch } from "react-icons/fa";
import Products from './Products';

const Home = () => {
  return (
    <div className='bg-white'>
      <div className='flex align-middle justify-center items-center gap-1 h-[42px]'>
        <input placeholder='Search Product' className='border border-black px-4 py-2 w-[700px] rounded-xl outline-0 mt-5' />
        <div className='bg-orange-600 h-full flex align-middle items-center justify-center w-[45px] rounded-xl text-white mt-5 '>
          <FaSearch className='hover:scale-110'/>
        </div>
      </div>
      <Products/>
    </div>
  )
}

export default Home
