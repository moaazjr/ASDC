import Image from "next/image";
import React from "react";
import icon1 from "@/images/Group 2.svg";
import {Open_Sans} from "next/font/google";
const openSans = Open_Sans({weight:['400','700'],subsets:["latin"]});
export default function Cards() {
  return (
    <section className="relative min-h-[50vh]">
    <div className="absolute -top-1/4  left-1/2 -translate-x-1/2 -translate-y-1/2">
           <div className="  w-[1120px] mx-auto text-white text-center">
        <h1 className="  text-[56px] font-bold mb-6">Software Consulting And Development</h1>
        <p className={`text-[24px] ${openSans.className} opacity-70`}>
          a cutting-edge software development company, where innovation meets
          excellence in software solutions.
        </p>
        
      </div>
      <div >
        <p className="w-[1200px] h-[19px] opacity-[50%] text-[14px] text-[#212121]">Why us</p>
        <h1 className=" w-[1200px] h-[80px] text-[32px] text-black ">
          Here’s why people choose to <br />
          work with ASDC
        </h1>
      </div>

      <section className="flex  gap-6 items-center snap-x w-[1200px] mt-5">
        <div className="bg-white w-[330px] p-6 rounded-[6px] snap-center ">
          <Image className="" src={icon1} alt="icon1" width={40} height={40} />
          <h1 className="text-black font-bold text-[24px]">
            Expertise You Can <br />
            Trust
          </h1>
          <p className="opacity-[70%] text-[12px]">
            Our team boasts expertise in a diverse range of programming
            languages, development frameworks, and industry best practices. We
            stay ahead of the curve, ensuring that your projects benefit from
            the latest technological advancements.
          </p>
        </div>
        <div className="bg-white w-[330px] p-6 rounded-[6px] snap-center">
          <Image className="" src={icon1} alt="icon1" width={40} height={40} />
          <h1 className="text-black font-bold text-[24px]">
            Expertise You Can <br />
            Trust
          </h1>
          <p className="opacity-[70%] text-[12px]">
            Our team boasts expertise in a diverse range of programming
            languages, development frameworks, and industry best practices. We
            stay ahead of the curve, ensuring that your projects benefit from
            the latest technological advancements.
          </p>
        </div>
        <div className="bg-white w-[330px] p-6 rounded-[6px] snap-center">
          <Image className="" src={icon1} alt="icon1" width={40} height={40} />
          <h1 className="text-black font-bold text-[24px]">
            Expertise You Can <br />
            Trust
          </h1>
          <p className="opacity-[70%] text-[12px]">
            Our team boasts expertise in a diverse range of programming
            languages, development frameworks, and industry best practices. We
            stay ahead of the curve, ensuring that your projects benefit from
            the latest technological advancements.
          </p>
        </div>
        <div className="bg-white w-[330px] p-6 rounded-[6px] snap-center">
          <Image className="" src={icon1} alt="icon1" width={40} height={40} />
          <h1 className="text-black font-bold text-[24px]">
            Expertise You Can <br />
            Trust
          </h1>
          <p className="opacity-[70%] text-[12px]">
            Our team boasts expertise in a diverse range of programming
            languages, development frameworks, and industry best practices. We
            stay ahead of the curve, ensuring that your projects benefit from
            the latest technological advancements.
          </p>
        </div>
      </section>
    </div>
    </section>
  );
}
