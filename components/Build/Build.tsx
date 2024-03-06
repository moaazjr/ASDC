import Image from "next/image";
import build from '@/images/pic.svg'

export default function Build() {
  return (
    <div className="flex  justify-center items-center">
        <div className="bg-white">
            <div className="w-[576px] space-y-6">
            <h1 className="w-[576px]  text-black text-3xl font-bold ">Let's Build Something <br/>Extraordinary Together</h1>
            <p className="w-[576px]  opacity-[70%] text-[#212121] leading-[25px] ">Embark on a journey of digital transformation with ASDC. Whether you have a specific project in mind or need guidance on where to start, we're here to help. Let's collaborate, innovate, and bring your ideas to life. Welcome to a world of limitless possibilities. Welcome to ASDC.</p>
            </div>
            <div className="flex gap-4 mt-[50px]">
            <button className="bg-white border-[#212121] rounded-md border-2 text-[#212121] px-3  font-sans ">Contact Us</button>
            <button className="bg-black text-white rounded-md p-2 capitalize font-sans px-3">get a qoute Now</button>
            </div>
        </div>
        <div>
            <Image className="rounded-[6px]" src={build} alt="build" width={600} height={368} />
        </div>
    </div>
  )
}
