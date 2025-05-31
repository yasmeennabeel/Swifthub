"use client";

export default function LogiSection() {
    return (
        <div className="mx-auto px-4 w-full max-w-screen-xl my-10 flex flex-col gap-5">
            <div className=" grid md:grid-cols-2  grid-cols-1 gap-5 mb-8">
                <div>
                    <h1 className="text-3xl mona-font font-semibold leading-normal md:w-1/2 ">Comprehensive Logistics Services</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-end">
                        <button className="bg-orange-500 text-white px-5 py-2 rounded-3xl text-sm shadow hover:bg-orange-600 transition">View all Services</button>

                    </div>
                    <p className="text-gray-600 text-sm ">We deliver reliability with cutting-edge technology, real-time tracking, and a commitment to on-time performance, ensuring seamless logistics solutions</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 md:justify-between">
                <div className="card bg-black text-white group hover:bg-white hover:text-black transition cursor-pointer w-[250px] h-auto md:h-[230px] shadow-2xl rounded-2xl pt-3 px-4 pb-5 flex flex-col justify-between">
                    <div className="flex justify-between  p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-7 bg-white text-black p-1 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-md text-center md:text-start md:text-lg font-semibold">Express Shipping</h1>
                        <p className="text-[8px] text-center md:text-start md:text-xs text-gray-300 group-hover:text-black">Get your shipments delivered at lightening speed with our express shipping service. We prioritize fast processing, quick dispatch, and on-time delivieries. </p>

                    </div>
                </div>
                <div className="card  w-[250px]  h-auto md:h-[230px] shadow-2xl rounded-2xl pt-3 px-4 pb-5 flex flex-col justify-between group hover:bg-black hover:text-white transition cursor-pointer ">
                    <div className="flex justify-between  p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-md text-center md:text-start md:text-lg font-semibold">Door-to-Door Delivery</h1>
                        <p className="text-[8px] text-center md:text-start md:text-xs text-gray-600 group-hover:text-gray-300">Get your shipments delivered at lightening speed with our express shipping service. We prioritize fast processing, quick dispatch, and on-time delivieries. </p>

                    </div>
                </div>
                <div className="card  w-[250px]  h-auto md:h-[230px] shadow-2xl rounded-2xl pt-3 px-4 pb-5 flex flex-col justify-between group hover:bg-black hover:text-white transition cursor-pointer ">
                    <div className="flex justify-between  p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-md text-center md:text-start md:text-lg font-semibold">International Shipping</h1>
                        <p className="text-[8px] text-center md:text-start md:text-xs text-gray-600 group-hover:text-gray-300">Get your shipments delivered at lightening speed with our express shipping service. We prioritize fast processing, quick dispatch, and on-time delivieries. </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
