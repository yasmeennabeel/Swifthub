"use client";

import Image from 'next/image'
import { FaStar } from 'react-icons/fa6';
import { FiUsers } from 'react-icons/fi';



export default function Hero() {
    return (
        <div className="mx-auto px-4 w-full max-w-screen-xl my-10 flex flex-col gap-6">
            <div className="flex flex-col items-center gap-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight"> Seamless Logistics, <br></br>Faster <span className="text-teal-700 italic font-sans">Deliveries</span></h1>
                <p className=" text-gray-600 text-lg max-w-2xl ">Streamlined freight management with real-time tracking</p>

            </div>
            <div className="relative w-full max-w-6xl  mx-auto bg-white rounded-3xl overflow-hidden shadow-lg mt-6 group cursor-pointer">
                <div className='overflow-hidden rounded-3xl '>
                    <Image
                        src="/images/boat.jpg"
                        alt="Cargo Ship"
                        width={1200}
                        height={600}
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 "
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex justify-between items-start">

                        <div className="flex items-center gap-2 text-white bg-gray-500 bg-opacity-70 rounded-full px-3 py-2 backdrop-blur-sm">
                            <div className="flex -space-x-2 ">
                                <FiUsers />
                                <FiUsers />

                            </div>
                            <span className="text-sm font-medium">+10M User</span>
                        </div>

                        <div className="bg-opacity-70 text-white bg-gray-500 rounded-full px-4 py-2 shadow flex items-center gap-2 backdrop-blur-sm">
                            <FaStar className='text-orange-400' />
                            <span className="text-sm font-medium">845K+ (4.5 Review)</span>
                        </div>
                    </div>


                    <div className='hidden md:flex md:absolute md:top-[-5px] md:left-1/2 transform -translate-x-1/2 pt-4'>
                        <div className='relative flex justify-center items-start'>

                            <div className='bg-white w-[331px] h-[235px] rounded-full hidden md:flex  transform md:absolute md:top-[-190px] md:left-1/2 -translate-x-1/2'></div>
                            <div className="bg-white p-2 px-2.5 pt-0 rounded-4xl rounded-t-none relative flex gap-3 z-10">
                                <button className="bg-orange-500 text-white px-5 py-2 rounded-3xl text-sm shadow hover:bg-white hover:text-orange-500 hover:border hover:border-1-orange-500 transition-all cursor-pointer">
                                    Our Services
                                </button>
                                <button className="bg-white text-orange-500 border border-orange-500 px-5 py-2 rounded-2xl text-sm shadow hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
