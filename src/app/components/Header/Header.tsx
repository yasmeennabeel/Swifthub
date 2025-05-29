
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  return (
    <div className="w-full font-sans container  h-[60px] sticky top-0 z-[99] bg-white  ">
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden flex">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          <Image src="/images/logo.png" alt='swiftHubLogo' width={50} height={20}></Image>
          <h3 className='font-bold text-2xl font-sans'>Swifthub</h3>
        </div>

        <div className='hidden md:flex '>


          <ul className='flex gap-7'>
            <li><Link href='#'>Home</Link></li>
            <li><Link href='#'>About Us</Link></li>
            <li><Link href='#'>Services</Link></li>
            <li><Link href='#'>Gallery</Link></li>
            <li><Link href='#'>Contact</Link></li>
          </ul>
        </div>
        <div>
          <button className='btn bg-black text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-amber-600 cursor-pointer transition'>Track</button>
        </div>
      </div>
    </div>
  )
}
