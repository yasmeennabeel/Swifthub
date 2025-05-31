import Image from "next/image"

export default function Numbers() {
    return (
        <div className="w-full">
            <div className="relative w-full h-[50vh] min-h-[300px]">
                <Image src={'/images/cargoquote.jpg'} alt={'cargo boat'} fill className="object-fill w-full"></Image>
                <div className="flex justify-end">
                    <p className="absolute right-0 top-[100px] w-[30%] p-2 text-2xl text-amber-900 font-semibold">Revolutionizing supply chains with accuracy, our logistics company provides flawless solutions, enhancing efficiency and dependability to drive business sucess with assurance</p>

                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex flex-col">
                    <h2 className="text-4xl font-semibold text-black">10M+</h2>
                    <span className="text-gray-400 text-sm">User</span>
                </div>
            </div>
        </div>
    )
}
