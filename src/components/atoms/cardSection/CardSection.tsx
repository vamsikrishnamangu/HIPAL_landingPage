import Image from "next/image";
import React from "react";

const CardSection = () => {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-center lg:mb-[11.313rem]">
        <div className="ml-8 lg:mx-[5.75rem] lg:mt-[6.25rem] flex flex-row flex-nowrap overflow-x-auto w-[20rem] lg:w-[100rem] items-center">
          <div className="h-[25rem] w-[10rem] lg:h-[24.057rem] lg:w-[24.842rem] px-4 bg-[#E7EEEA] flex flex-col items-center lg:justify-between rounded-xl">
            <div className="flex self-start my-4">
              <Image
                src="/hikitchen.svg"
                alt="hikitchen"
                height={16.5}
                width={67.3}
                className="lg:hidden"
              />
              <Image
                src="/hikitchen.svg"
                alt="hikitchen"
                height={36.009}
                width={148.035}
                className="hidden lg:inline-flex"
              />
            </div>
            <div className="lg:hidden">
              <Image
                src="/hikitchen_dish.png"
                alt="hikitchen"
                height={103}
                width={136}
              />
            </div>
            <div className="hidden lg:inline-flex">
              <Image
                src="/hikitchen_dish_lg.png"
                alt="hikitchen"
                height={107}
                width={372.345}
              />
            </div>
            <div className="mt-3 mb-3 mr-[0.125rem]">
              <p className="text-[#131540] text-base font-normal opacity-50 lg:text-lg">
                The only 360 degree management solution you need to manage and
                grow your business.
              </p>
            </div>
            <div className="mx-4 mb-3 flex self-start">
              <button className="bg-[#455F50] rounded-2xl p-1">
                <Image
                  src="/right_arrow.png"
                  alt="right_arrow"
                  height={20}
                  width={20}
                />
              </button>
            </div>
          </div>
          <div className="h-[25rem] w-[10rem] bg-[#E7EDFD] lg:h-[24.057rem] lg:w-[24.842rem] mx-2 lg:mx-10 px-4 flex flex-col items-center lg:justify-between rounded-xl">
            <div className="flex self-start my-4">
              <Image
                src="/hitable.svg"
                alt="hitable"
                height={16.5}
                width={67.3}
                className="lg:hidden"
              />
              <Image
                src="/hitable.svg"
                alt="hitable"
                height={36.009}
                width={148.035}
                className="hidden lg:inline-flex"
              />
            </div>
            <div className="lg:hidden">
              <Image
                src="/hitable_dish.png"
                alt="hitable"
                height={103}
                width={136}
              />
            </div>
            <div className="hidden lg:inline-flex">
              <Image
                src="/hitable_dish_lg.png"
                alt="hitable"
                height={107}
                width={372.345}
              />
            </div>
            <div className="mt-3 mb-3 mr-[0.125rem]">
              <p className="text-[#131540] text-base font-normal opacity-50 lg:text-lg">
                The only 360 degree management solution you need to manage and
                grow your business.
              </p>
            </div>
            <div className="mx-4 mb-3 flex self-start">
              <button className="bg-[#2C62F0] rounded-2xl p-1">
                <Image
                  src="/right_arrow.png"
                  alt="right_arrow"
                  height={20}
                  width={20}
                />
              </button>
            </div>
          </div>
          <div className="h-[25rem] w-[10rem] lg:h-[24.057rem] lg:w-[24.842rem] px-4 bg-[#D6F2FF] flex flex-col items-center lg:justify-between rounded-xl">
            <div className="flex self-start my-4">
              <Image
                src="/hipeople.svg"
                alt="hipeople"
                height={16.5}
                width={67.3}
                className="lg:hidden"
              />
              <Image
                src="/hipeople.svg"
                alt="hipeople"
                height={36.009}
                width={148.035}
                className="hidden lg:inline-flex"
              />
            </div>
            <div className="lg:hidden">
              <Image
                src="/hipeople_dish.png"
                alt="hipeople"
                height={103}
                width={136}
              />
            </div>
            <div className="hidden lg:inline-flex">
              <Image
                src="/hipeople_dish_lg.png"
                alt="hipeople"
                height={107}
                width={372.345}
              />
            </div>
            <div className="mt-3 mb-3 mr-[0.125rem]">
              <p className="text-[#131540] text-base font-normal opacity-50 lg:text-lg">
                The only 360 degree management solution you need to manage and
                grow your business.
              </p>
            </div>
            <div className="mx-4 mb-3 flex self-start">
              <button className="bg-[#006494] rounded-2xl p-1">
                <Image
                  src="/right_arrow.png"
                  alt="right_arrow"
                  height={20}
                  width={20}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[22.18rem] lg:h-[9rem] rounded-3xl mx-4 my-10 px-[3.25rem] py-2 bg-[#F2634C] flex flex-row justify-center items-center">
          <button className="text-white font-semibold">
            Get full managment suite
          </button>
          <div>
            <Image
              src="/right_arrow.png"
              alt="rightArrow"
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
