"use client";

import Image from "next/image"
export default function BusSection() {
    return (
        <div className="mx-auto px-4 w-full max-w-screen-xl flex gap-5 flex-col">

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="tabsLeft flex flex-col gap-3">
                    <div className="join join-vertical bg-base-100">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title font-semibold text-xl">99% On-Time Delivery</div>
                            <div className="collapse-content text-sm font-light">With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule, evertyime.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold  text-xl">AI-Powered Tracking</div>
                            <div className="collapse-content text-sm font-light">With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule, evertyime.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold  text-xl">Cost-Effective Solutions</div>
                            <div className="collapse-content text-sm font-light">With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule, evertyime.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold  text-xl">24/7 Customer Support</div>
                            <div className="collapse-content text-sm font-light">With advanced logistics planning and real-time tracking, we ensure your shipments reach their destination on schedule, evertyime.
                            </div>
                        </div>
                    </div>
                </div>
           <div className="bg-white rounded-3xl overflow-hidden shadow-lg group">
              <div className='overflow-hidden rounded-3xl'>
                    <Image src={'/images/boat2.jpg'} alt={'cargoboat'} width={500} height={100} className="rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"></Image>
                </div>
           </div>
            </div>
        </div>
    )
}
