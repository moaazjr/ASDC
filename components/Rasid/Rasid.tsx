import Image from "next/image";
import rasid from '@/images/app pic.svg'
import ad from '@/images/ad.svg'
export default function Rasid() {
  return (
    <div className="bg-[#212121] flex  items-center justify-around" >
        <div>
        <Image src={rasid} alt="rasid-mobile-app" width={407} height={330} />
        </div>
            <div className="w-[600px] ">
                <h1 className="text-3xl">Our latest work</h1>
                <div className="flex items-center justify-between">
                <h2 className="text-bold text-[40px]">RASID</h2>
                    <Image src={ad} alt="download-pic" width={66} height={25}/>
                </div>
                <p className="w-[475px]  opacity-[70%]  gap-[13px]"> 
                All-in-one app, revolutionizing the way teams operate,
                    providing a centralized platform for communication, 
                    taskmanagement, and data collection. With intuitive
                    interfaces and cloud-based accessibility. these tools
                    empower workers and streamline operations, ultimately 
                    leading to a more productive and efficient work environment.</p>
                <button className="mt-14 border-b-[1px]">learn more</button>
            </div>





    </div>
  )
}
