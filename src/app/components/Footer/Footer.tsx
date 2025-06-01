"use client";

import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
export default function Footer() {
    const navigationLinks = ['Home', 'About Us', 'Services', 'Gallery', 'Contact']
    const courierLinks = ['Standard', 'Express', 'International', 'Ware Housing', 'Overnight', 'Pallet']
    return (
        <footer className="bg-[rgb(13,13,13)] text-gray-400 p-10 ">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between justify-center items-center text-center md:text-start gap-8 mb-6">
                <aside className="flex flex-col gap-4 items-center md:items-start">
                    <div className="flex gap-4 items-center ">
                        <Image src={'/images/logo-nobg.png'} alt="logo" width={50} height={20} className="h-auto"></Image>
                        <h2 className='text-white font-bold text-xl'>Swifthub</h2>
                    </div>
                    <p className="max-w-xs text-gray-400 text-xs text-center md:text-left">
                        Get a customized shipping quote tailored to your needs. Fast, transparent, and hassle-free pricing for all logistics solutions.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 ">
                        <FiFacebook aria-label="Facebook" className="hover:text-orange-400 cursor-pointer" />
                        <FaXTwitter aria-label="Twitter" className="hover:text-orange-400 cursor-pointer" />
                        <FiLinkedin aria-label="LinkedIn" className="hover:text-orange-400 cursor-pointer" />
                        <FaInstagram aria-label="Instagram" className="hover:text-orange-400 cursor-pointer" />


                    </div>
                </aside>
                <nav className="flex flex-col gap-3" aria-label="Main Navigation">
                    <h3 className="text-center md:text-left text-white font-medium mb-3">Navigation</h3>
                    <ul className="space-y-2 text-xs">
                        {navigationLinks.map((item) => (
                            <li key={item}>
                                <Link
                                    href="#"
                                    className="hover:text-orange-400 hover:underline transition-colors duration-200">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className="flex flex-col gap-3">
                    <h3 className="text-center md:text-left text-white font-medium mb-3">Courier Types</h3>
                    <ul className="space-y-2 text-xs">
                        {courierLinks.map((service) => (
                            <li key={service}>
                                <Link
                                    href="#"
                                    className="hover:text-orange-400 hover:underline transition-colors duration-200">
                                    {service}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-white text-lg mb-3 font-medium">Subscribe to Our Newsletter</h3>
                    <form className="max-w-md w-full">
                        <div className="relative flex items-center ">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email for newsletter subscription"
                                className="w-full py-2 px-5 pr-24 rounded-full border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-2 bg-orange-500 text-white rounded-full px-4 py-1.5 text-sm hover:bg-black hover:border hover:border-orange-500 border border-transparent  cursor-pointer transition-all duration-200"
                            >
                                Subscribe
                            </button>

                        </div>
                    </form>

                    <div className="mt-4 flex flex-col gap-3 text-white items-center md:items-start">
                        <div className="flex gap-3 items-center ">
                            <MdOutlineLocalPhone />
                            <Link href="#" className=" text-xs hover:text-orange-400 transition-colors">(207) 555 - 0119</Link>
                        </div>
                        <div className="flex gap-3 items-center">
                            <MdOutlineEmail />
                            <Link href="mailto:swifthub12@gmail.com" className=" text-xs hover:text-orange-400 transition-colors">swifthub12@gmail.com</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="border-t border-gray-700 w-full py-6"></div>
            <div className="w-full h-[120px] relative overflow-hidden">
                <Image
                    src="/images/swifthub-nobg.png"
                    alt="SwiftHub Logo Background"
                    fill
                    className="object-cover object-center opacity-10"

                />
                <div className=" inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4 z-10">

                        <div className="container mx-auto px-4 text-center text-sm text-white  leading-relaxed ">
                            ©SwiftHub2025. Designed by{' '}
                            <Link href="#" className="text-orange-500 transition-colors">
                                Ognado
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        </footer >
    )
}
