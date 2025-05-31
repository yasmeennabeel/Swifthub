"use client";

import Image from "next/image"

export default function LatestSection() {
    return (
        <div className="my-10 mx-auto px-4 w-full max-w-screen-xl">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl md:text-4xl mona-font font-semibold">Latest Logistics Insights</h1>
                        <p className="text-gray-600 text-sm w-full md:w-1/2">Stay updated with industry trends, innovative solutions, and expert tips to optimize your supply chain and enhance efficiency</p>
                    </div>
                    <button className="bg-orange-500 text-white px-6 py-2 h-10 rounded-full text-sm font-medium shadow hover:bg-orange-600 transition whitespace-nowrap cursor-pointer">View all</button>

                </div>
                <div className="flex flex-col md:flex-row gap-5  justify-between">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg group gap-4 flex flex-col">
                            <div className="overflow-hidden rounded-3xl">
                                <Image src={'/images/containers.jpg'} alt={'containers'} width={600} height={300} className="rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"></Image>

                            </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg md:text-xl mona-font font-semibold">Smart Logistics Trends</h3>
                                <p className="text-gray-600 text-xs">12 Feburary 2025</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>


                    </div>
                    <div className="flex flex-col gap-4 group">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg group gap-4 flex flex-col">
                            <div className="overflow-hidden rounded-3xl">
                                <Image src={'/images/unbox.jpg'} alt={'containers'} width={600} height={300} className="rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"></Image>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg md:text-xl mona-font font-semibold">Reliable Shipping Strategies</h3>
                                <p className="text-gray-600 text-xs">14 January 2025</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
