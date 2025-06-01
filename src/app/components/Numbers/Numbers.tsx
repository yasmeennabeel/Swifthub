import Image from "next/image"

export default function Numbers() {
    const statistics = [
        { value: "10M+", label: "User" },
        { value: "845k+", label: "Happy Customer" },
        { value: "100", label: "Office Worldwide" },
        { value: "600+", label: "Complete Projects" }
    ]
    return (
        <div className="w-full flex flex-col gap-4 my-10  ">
            <div className="bg-white  overflow-hidden shadow-lg group relative">
                <div className="relative w-full h-[50vh] min-h-[300px] overflow-hidden">
                    <Image src={'/images/cargoquote.jpg'} alt={'cargo boat'} fill className="object-fill w-full transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"></Image>
                </div>

                <div className="w-full md:absolute md:right-0  md:bottom-[100px] md:w-[30%] p-4 md:p-2  bg-white/90 md:bg-transparent">
                    <p className="text-lg md:text-2xl text-amber-900 font-semibold p-4 md:p-0 text-center md:text-start">Revolutionizing supply chains with accuracy, our logistics company provides flawless solutions, enhancing efficiency and dependability to drive business sucess with assurance</p>

                </div>


            </div>

            <div className="flex flex-wrap gap-4 justify-around mx-auto px-4 w-full max-w-screen-xl">
                {statistics.map((el, index) => (
                    <div key={index} className="flex flex-col text-center min-w-[120px]">
                        <h2 className="text-4xl font-semibold text-black">{el.value}</h2>
                        <span className="text-gray-500 text-sm">{el.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
