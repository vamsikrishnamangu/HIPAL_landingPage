import Image from "next/image";
import React from "react";

const MiddleSection = () => {
  return (
    <>
      <div className="lg:text-[3rem] mx-8 lg:mx-[5.75rem] mt-[2rem] flex items-center text-black text-2xl font-bold">
        <span>Trusted by</span>
        <div className="mx-2 lg:hidden">
          <Image src="/tick.png" alt="tick" height={24} width={24} />
        </div>
        <span className="lg:text-[3rem] mx-8 lg:mx-3 lg:inline-flex hidden text-black text-2xl font-bold">
          top rated restaurants
        </span>
        <div className="mx-2 lg:mx-0 hidden lg:inline-flex">
          <Image src="/tick.png" alt="tick" height={24} width={24} />
        </div>
      </div>
      <span className="mx-8 lg:hidden lg:mx-[5.75rem] text-black text-2xl font-bold lg:text-[3rem] ">
        Top rated restaurants
      </span>
      <div className="my-10 h-[4.75rem] w-full lg:h-[7.68rem] border border-1 lg:my-[12.5rem]"></div>
      <div className="mx-8 lg:mx-[5.75rem] flex items-center lg:justify-start justify-center">
        <span className="text-2xl font-bold lg:text-[3rem] leading-8">
          Managing your business has never been so {""}
          <span className="inline-flex lg:my-6 items-center text-center">
            cool
            <Image
              src="/glasses.svg"
              alt="glasses"
              height={10}
              width={20}
              className="mx-2 lg:hidden"
            />
            <Image
              src="/glasses.svg"
              alt="glasses"
              height={29}
              width={64}
              className="mx-2 hidden lg:inline-flex"
            />
          </span>
        </span>
      </div>
      <div className="my-7">
        <h1 className="text-sm lg:text-[2rem] mx-8 lg:mx-[5.75rem] font-bold text-[#F2634C]">
          Here&apos;s what all you get:
        </h1>
      </div>
    </>
  );
};

export default MiddleSection;
