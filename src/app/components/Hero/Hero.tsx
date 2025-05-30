
import Image from 'next/image'



export default function Hero() {
    return (
        <div className={`font-sans mx-auto px-4 w-full max-w-screen-xl my-10  flex flex-col gap-4 `}>
            <div className="flex flex-col items-center gap-6">
                <div className="gap-4 flex flex-col items-center text-center">
                    <h1 className="text-7xl font-bold font-sans"> Seamless Logistics, <br></br>Faster <span className="text-teal-700 italic font-sans">Deliveries</span></h1>
                    <p className="m-0 p-0 font-sans text-gray-700">Streamlined freight management with real-time tracking</p>
                </div>

            </div>
            <div className="relative bg-white rounded-[24px] overflow-hidden shadow-md mt-6 max-w-6xl mx-auto">
                <Image
                    src="/images/boat.jpg"
                    alt="Cargo Ship"
                    width={1100}
                    height={100}
                    className="w-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="flex justify-between items-start">

                        <div className="flex items-center gap-2 bg-opacity-80 text-white bg-gray-500 rounded-full px-3 py-1 shadow">
                            <div className="flex -space-x-2 gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>

                            </div>
                            <span className="text-sm font-medium">+10M User</span>
                        </div>

                        <div className="bg-opacity-80 text-white bg-gray-500 rounded-full px-3 py-1 shadow flex items-center gap-1">
                            <span className="text-orange-500">★</span>
                            <span className="text-sm font-medium">845K+ (4.5 Review)</span>
                        </div>
                    </div>

                 
                    <div className='hidden md:flex md:absolute md:top-[-5px] md:left-1/2 transform -translate-x-1/2 pt-4'>
                        <div className='relative flex justify-center items-start'>
                         
                            <div className='bg-white w-[319px] h-[236px] rounded-full hidden md:flex  transform md:absolute md:top-[-190px] md:left-1/2 -translate-x-1/2'></div>
                            <div className="bg-white p-2 pt-0 rounded-3xl rounded-t-none relative flex gap-3 z-10">
                                <button className="bg-orange-500 text-white px-5 py-2 rounded-3xl text-sm shadow hover:bg-orange-600 transition">
                                    Our Services
                                </button>
                                <button className="bg-white text-orange-500 border border-orange-500 px-5 py-2 rounded-2xl text-sm shadow hover:bg-orange-100 transition">
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
