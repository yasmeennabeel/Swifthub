"use client";

import { AiOutlineGlobal, AiOutlineThunderbolt } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineDoorFront } from "react-icons/md";

export default function LogiSection() {
    const servicesCards = [{
        title: 'Express Shipping',
        content: 'Get your shipments delivered at lightening speed with our express shipping service. We prioritize fast processing, quick dispatch, and on-time delivieries.',
        icon1: <AiOutlineThunderbolt size={24}  />,
        iconColor: 'text-black',
        hoverIconColor: 'hover:text-black',
        bgColor: 'bg-black',
        textColor: 'text-white',
        hoverBg: 'hover:bg-white',
        hoverText: 'group-hover:text-black'
    },
    {
        title: 'Door-to-Door Delivery',
        content: 'Get your shipments delivered at lightening speed with our express shipping service. We prioritize fast processing, quick dispatch, and on-time delivieries.',
        icon1: <MdOutlineDoorFront size={24} />,
        iconColor: 'text-black',
        hoverIconColor: 'hover:text-black',
        bgColor: 'bg-white',
        textColor: 'text-black',
        hoverBg: 'hover:bg-black',
        hoverText: 'group-hover:text-white'
    },
    {
        title: 'International Shipping',
        content: 'Get your shipments delivered at lightening speed with our express shipping service. We prioritize fast processing, quick dispatch, and on-time delivieries.',
        icon1: <AiOutlineGlobal size={24} />,
        iconColor: 'text-black',
        hoverIconColor: 'hover:text-black',
        bgColor: 'bg-white',
        textColor: 'text-black',
        hoverBg: 'hover:bg-black',
        hoverText: 'group-hover:text-white'
    },
    ]
    return (
        <div className="mx-auto px-4 w-full max-w-screen-xl my-10 ">
            <div className=" grid md:grid-cols-2  grid-cols-1 gap-8 mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl mona-font font-semibold leading-tight md:w-1/2 ">Comprehensive Logistics Services</h2>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-end">
                        <button className="bg-orange-500 text-white border border-transparent px-6 py-3 rounded-full font-medium text-sm shadow hover:bg-black cursor-pointer transition-all duration-300">View all Services</button>

                    </div>
                    <p className="text-gray-600 text-base ">We deliver reliability with cutting-edge technology, real-time tracking, and a commitment to on-time performance, ensuring seamless logistics solutions</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    servicesCards.map((el, index) => (
                        <div key={index} className={`p-6  rounded-2xl shadow-xl transition-all duration-300 cursor-pointer group ${el.bgColor} ${el.textColor} ${el.hoverBg} ${el.hoverText}`}>
                            <div className="flex justify-between items-start mb-6 h-40">
                                <div className={`p-2 rounded-full ${index === 0 ? 'bg-white text-black' : 'bg-gray-100'} ${el.iconColor} ${el.hoverIconColor}`}>
                                    {el.icon1}
                                </div>
                                <GoArrowUpRight size={20} className= {`${index === 0 ? 'text-gray-300 group-hover:text-black' : 'text-black group-hover:text-white'}  mt-1`} />
                            </div>
                            <div className="space-y-3">
                                <h3 className={`text-xl font-semibold ${index === 0 ? 'text-white group-hover:text-black' : 'text-black group-hover:text-white' }`}>{el.title}</h3>
                                <p className={`text-sm ${index === 0 ? 'text-gray-300' : 'text-black'} ${el.hoverText}`}>{el.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
