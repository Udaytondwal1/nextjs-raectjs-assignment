import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className='w-full lg:h-[60vh] h-[35vh] overflow-hidden bg-zinc-800 text-white flex lg:gap-[15vw] lg:px-0 px-5 gap-8 py-14 justify-center'>
        <div className='flex flex-col gap-4 text-sm text-zinc-300'>
            <span className='text-lg'>CATEGORIES</span>
            <span>Web Builder</span>
            <span>Hosting</span>
            <span>Data Center</span>
            <span>Robotic-Automation</span>
        </div>
        <div className='flex flex-col gap-4 text-sm text-zinc-300'>
            <span className='text-lg'>CONTACT</span>
            <span>Contact</span>
            <span>Privacy Policy</span>
            <span>Terms Of Service</span>
            <span>Categories</span>
            <span>About</span>
        </div>
        <div className='flex items-center lg:gap-2 gap-0 text-sm text-center h-44 py-14 text-zinc-300'>
            <span>United States</span><IoIosArrowDown />
        </div>
    </div>
  )
}

export default Footer