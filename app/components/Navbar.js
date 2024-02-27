import React from 'react'
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='flex items-center w-[100vw] px-2 gap-5 overflow-hidden lg:gap-20 lg:pl-[28vw] lg:py-4 md:gap-20 md:py-4 text-white h-16 bg-zinc-800 md:pl-[15vw]'>
            <div className='flex'>
                <div className='px-1 py-1 text-base text-black bg-white lg:text-2xl lg:w-8 lg:h-10 lg:px-2 lg:py-2 rounded-l-md'><LuSearch /></div>
                <input className='text-black outline-none h-7 w-28 lg:w-56 lg:h-10 lg:px-5 rounded-r-md' type='search'></input>
            </div>
            <div className='flex text-[10px] gap-2 md:text-sm lg:text-base lg:gap-10 text-zinc-300'>
                <span>Categories</span>
                <span>Website Builders</span>
                <span className='ml-2 md:ml-5 lg:ml-10'>Today's deals</span>
            </div>
        </div>
    )
}

export default Navbar