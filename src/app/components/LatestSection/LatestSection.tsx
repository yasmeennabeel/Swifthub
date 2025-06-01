"use client";

import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go";

export default function LatestSection() {
    const articles = [
        {
            title: 'Smart Logistics Trends',
            date: '12 Feburary, 2025',
            image: '/images/containers.jpg',
            alt: 'shipping containers'
        },
        {
            title: 'Reliable Shipping Strategies',
            date: '14 January, 2025',
            image: '/images/unbox.jpg',
            alt: 'packages unboxed'
        }
    ]
    return (
        <div className="my-16 mx-auto px-4 w-full max-w-screen-xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div className="space-y-3 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl mona-font font-semibold">Latest Logistics Insights</h2>
                    <p className="text-gray-600 text-sm ">Stay updated with industry trends, innovative solutions, and expert tips to optimize your supply chain and enhance efficiency</p>
                </div>

                <button className="bg-orange-500 text-white px-6 py-2 h-10 rounded-full text-sm font-medium shadow hover:bg-black transition whitespace-nowrap cursor-pointer">View all</button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
        
                {
                    articles.map((el, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <div className="overflow-hidden aspect-video">
                                <Image src={el.image} alt={el.alt} width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                            </div>
                            <div className="p-5 flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold mb-1">{el.title}</h3>
                                    <span className="text-gray-500 text-xs"> {el.date}</span>
                                </div>
                                <GoArrowUpRight className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
