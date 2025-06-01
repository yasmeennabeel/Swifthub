"use client";

import Image from 'next/image'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi';

export default function Header() {
  const links = ['Home', 'About Us', 'Sevices', 'Gallery', 'Contact']
  return (
    <div className={`sticky top-0 z-50 bg-white py-3 shadow-sm w-full `}>
      <div className='container mx-auto px-7 h-16 flex items-center justify-between'>
        <div className='flex items-center gap-4 group'>
          <FiMenu className='md:hidden flex  cursor-pointer'/>
          <Image src="/images/logo.png" alt='swiftHubLogo' width={50} height={30}></Image>
          <h3 className='font-bold text-2xl font-sans group-hover:text-orange-500 cursor-pointer'>Swifthub</h3>
        </div>

        <div className='hidden md:flex '>


          <ul className='flex gap-7'>
            {
              links.map((el, index) => (
                <li key={index}>
                  <Link href='#' className='hover:text-orange-500 cursor-pointer font-medium hover:font-semibold transition-all'>{el}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <button className='btn bg-black text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-orange-500 cursor-pointer transition'>Track</button>
        </div>
      </div>
    </div>
  )
}
