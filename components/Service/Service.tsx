import Image from "next/image";
import React from "react";
import svpic1 from "@/images/pic (1).svg";
import svpic2 from '@/images/svpic2.svg'
import '@/components/Service/Service.css'


export default function Service() {
  return (
    <div >
      <div 
      className="container bg-[#121212] gap-[32px] h-[1000px] text-center ">
        <div className="py-6 ">
        <h1 className="text-2xl font-bold text-white capitalize p-">
          our Services
        </h1>
        <p>
          Empower your facility with our smart solutions & Elevate efficiency
        </p>
        </div>

            <div className=" bg-white mx-auto rounded-[6px] w-[1200px] ">

        <div 
        className="bg-white mx-auto rounded-[6px] w-[1200px]    flex justify-between items-center">
          <div className=" ">
            <Image src={svpic1} alt="pic" width={545} height={364} />
          </div>
          
          <div className="w-[559px] text-left  gap-[24px] space-y-6  ">
            <h1 className="capitalize text-[#212121] text-3xl ">
                Innovative Facility Management <br/>Solutions
            </h1>
            <h2 className="text-[#212121]">Custom Solutions for Unique Needs</h2>
            <p className="w-[511px]  opacity-[70%] text-[#212121] leading-[25px] ">
            At ASDC , we specialize in delivering cutting-edge software systems designed to streamline facility management processes. Our tailored solutions are crafted to meet the unique needs of your facility, providing a seamless and efficient experience. team boasts expertise in a diverse range of programming languages, development frameworks, and industry best practices. 
            </p>
          </div>
        </div>

        <div className="bg-white mx-auto rounded-[6px] w-[1200px] p-8  flex flex-row-reverse justify-between items-center">
          <div className=" ">
            <Image src={svpic2} alt="pic" width={545} height={364} />
          </div>
          
          <div className="w-[559px] text-left  gap-[24px] space-y-6  ">
            <h1 className="capitalize  text-[#212121] text-3xl ">
                Innovative Facility Management <br/>Solutions
            </h1>
            <h2 className="text-[#212121]">Custom Solutions for Unique Needs</h2>
            <p className="w-[511px]  opacity-[70%] text-[#212121] leading-[25px] ">
            At ASDC , we specialize in delivering cutting-edge software systems designed to streamline facility management processes. Our tailored solutions are crafted to meet the unique needs of your facility, providing a seamless and efficient experience. team boasts expertise in a diverse range of programming languages, development frameworks, and industry best practices. 
            </p>
          </div>
        </div>
        
            </div>
      </div>
    </div>
  );
}
