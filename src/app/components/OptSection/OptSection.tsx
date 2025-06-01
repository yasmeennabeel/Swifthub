"use client";

import { BsBoxSeam } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuListTodo, LuNotebookPen } from "react-icons/lu";

export default function OptSection() {
    return (
        <div className="mx-auto px-4 w-full max-w-screen-xl font-sans py-4">
            <div className="text-center flex flex-col items-center gap-3">
                <h2 className="font-sans text-5xl font-semibold">Smart Route Optimization</h2>
                <p className="text-gray-500 w-1/2 text-center mb-5">We analyze traffic patterns and use AI-driven mapping to ensure the fastest, most cost-effective delivery routes</p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 justify-center py-5">
                <div className="card bg-base-100 hover:border hover:border-orange-500  cursor-pointer w-96 shadow-sm group transition-all border border-transparent">
                    <figure className="!w-full !flex !justify-start !px-6 !pt-4 ">
                      <LuListTodo className="size-7 group-hover:text-orange-500" />

                    </figure>
                    <div className="card-body px-5 py-4">
                        <h2 className="card-title text-2xl group-hover:text-orange-500 transition">Apply Online</h2>
                        <p className="text-gray-500 ">We analyze traffic patterns and use AI-driven mapping to ensure the fastest, most cost-effective delivery routes</p>
                        <div className="card-actions">
                            <button className=" flex items-center gap-2 group-hover:text-orange-500 transition">
                                Read More
                              <FaArrowRightLong />

                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 hover:border hover:border-orange-500  cursor-pointer w-96 shadow-sm group transition-all border border-transparent">
                    <figure className="!w-full !flex !justify-start !px-6 !pt-4 ">
                      <LuNotebookPen className="size-7 group-hover:text-orange-500"/>
                    </figure>
                    <div className="card-body px-5 py-4">
                        <h2 className="card-title text-2xl group-hover:text-orange-500 transition">Submit Documents</h2>
                        <p className="text-gray-500 ">We analyze traffic patterns and use AI-driven mapping to ensure the fastest, most cost-effective delivery routes</p>
                        <div className="card-actions">
                            <button className="flex items-center gap-2 group-hover:text-orange-500 transition">
                                Read More
                            <FaArrowRightLong />

                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 hover:border hover:border-orange-500  cursor-pointer w-96 shadow-sm group transition-all border border-transparent">
                    <figure className="!w-full !flex !justify-start !px-6 !pt-4 ">
                      <BsBoxSeam className="size-7 group-hover:text-orange-500"/>


                    </figure>
                    <div className="card-body px-5 py-4">
                        <h2 className="card-title text-2xl group-hover:text-orange-500 transition">Receive Goods</h2>
                        <p className="text-gray-500 ">We analyze traffic patterns and use AI-driven mapping to ensure the fastest, most cost-effective delivery routes</p>
                        <div className="card-actions">
                            <button className="flex items-center gap-2 group-hover:text-orange-500 transition">
                                Read More
                              <FaArrowRightLong />

                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
