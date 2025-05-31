"use client";

export default function Quote() {
    return (
        <div className="my-10 mx-auto px-4 w-full max-w-screen-xl">
            <div className="flex flex-col gap-6 items-center text-center">
                <div className="flex flex-col items-center gap-3 max-w-2xl">
                    <h1 className="text-3xl md:text-4xl mona-font font-semibold">Request a Free Quote</h1>
                    <p className="text-gray-600 text-sm md:text-base">
                        Get a customized shipping quote tailored to your needs. Fast, transparent, and hassle-free pricing for all logistics solutions.
                    </p>
                </div>
                
                <form className="w-full max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-end">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                            <div className="form-control text-start">
                                <label className="label">
                                    <span className="label-text text-gray-600 text-xs">Name *</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full text-sm"
                                />
                            </div>
                            
                            <div className="form-control text-start">
                                <label className="label">
                                    <span className="label-text text-gray-600 text-xs">Email *</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full text-sm"
                                />
                            </div>
                            
                            <div className="form-control text-start">
                                <label className="label">
                                    <span className="label-text text-gray-600 text-xs">Phone Number *</span>
                                </label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="Enter your phone number"
                                    className="input input-bordered w-full text-sm"
                                />
                            </div>
                        </div>
                        
                        <button 
                            type="submit"
                            className="bg-orange-500 text-white px-6 py-3 h-12 rounded-full text-sm font-medium shadow hover:bg-black transition whitespace-nowrap w-full md:w-auto cursor-pointer"
                        >
                            Submit Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}