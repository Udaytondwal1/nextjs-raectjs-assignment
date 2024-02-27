import React from 'react'
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='flex items-center w-full gap-20 pl-[28vw] py-4 text-white h-16 bg-zinc-800'>
            <div className='flex'>
                <div className='w-8 h-10 px-2 py-2 text-2xl text-black bg-white rounded-l-md'><LuSearch /></div>
                <input className='w-56 h-10 px-5 text-black outline-none rounded-r-md' type='search'></input>
            </div>
            <div className='flex gap-10 text-zinc-300'>
                <span>Categories</span>
                <span>Website Builders</span>
                <span className='ml-10'>Today's deals</span>
            </div>
        </div>
    )
}

export default Navbar