"use client";

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={`sticky top-0 z-50 bg-white py-3 shadow-sm w-full `}>
      <div className='container mx-auto px-7 h-16 flex items-center justify-between'>
        <div className='flex items-center gap-4 group'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden flex  cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          <Image src="/images/logo.png" alt='swiftHubLogo' width={50} height={30}></Image>
          <h3 className='font-bold text-2xl font-sans group-hover:text-orange-500 cursor-pointer'>Swifthub</h3>
        </div>

        <div className='hidden md:flex '>


          <ul className='flex gap-7'>
            <li><Link href='#' className='hover:text-orange-500 cursor-pointer hover:font-semibold transition'>Home</Link></li>
            <li><Link href='#' className='hover:text-orange-500 cursor-pointer hover:font-semibold transition'>About Us</Link></li>
            <li><Link href='#' className='hover:text-orange-500 cursor-pointer hover:font-semibold transition'>Services</Link></li>
            <li><Link href='#' className='hover:text-orange-500 cursor-pointer hover:font-semibold transition'>Gallery</Link></li>
            <li><Link href='#' className='hover:text-orange-500 cursor-pointer hover:font-semibold transition'>Contact</Link></li>
          </ul>
        </div>
        <div>
          <button className='btn bg-black text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-orange-500 cursor-pointer transition'>Track</button>
        </div>
      </div>
    </div>
  )
}
