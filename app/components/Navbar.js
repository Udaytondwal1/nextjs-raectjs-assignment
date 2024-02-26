import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center w-full gap-28 px-[21vw] py-4 text-white h-14 bg-zinc-800'>
            <div className='flex'>
                <div className='w-8 h-8 bg-white rounded-l-md'></div>
                <input className='h-8 px-5 text-black outline-none w-52 rounded-r-md' type='search'></input>
            </div>
            <div className='flex gap-16'>
                <span>Categories</span>
                <span>Website Builders</span>
                <span className='ml-10'>Today's deals</span>
            </div>
        </div>
    )
}

export default Navbar