"use client";

import Image from "next/image"
export default function BusSection() {
    const accordionItems = [{
        title: '99% On-Time Delivery',
        content: 'With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule, evertyime.'
    },
    {
        title: 'AI-Powered Tracking',
        content: 'With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule, evertyime.'
    },
    {
        title: 'Cost-Effective Solutions',
        content: 'With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule, evertyime.'
    },
    {
        title: '24/7 Customer Support',
        content: 'With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule, evertyime.'
    },
    ]
    return (
        <div className="mx-auto mb-10 px-4 w-full max-w-screen-xl flex flex-col gap-5">

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex flex-col gap-3">
                    <div className="join join-vertical bg-base-100">
                        {
                            accordionItems.map((el, index) => (
                                <div key={index} className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="accordion" defaultChecked={index === 0}></input>
                                    <div className="collapse-title font-semibold text-lg md:text-xl">
                                        <p>{el.title}</p>
                                    </div>
                                    <div className="collapse-content text-sm font-light">
                                        {el.content}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg group h-full min-h-[300px]">
                    <div className='overflow-hidden rounded-3xl h-full'>
                        <Image src={'/images/boat2.jpg'} alt={'Cargo ship with containers'} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover  transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
