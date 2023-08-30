import Image from "next/image";
import React from "react";

const CeoContainer = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center">
        <div
          className="rounded-full lg:mr-[15.8rem]"
          style={{
            background:
              "linear-gradient(180deg, #F2634C 0%, rgba(242, 99, 76, 0.00) 78.47%)",
            backgroundPosition: "left center",
          }}
        >
          <Image
            src="/CEO.svg"
            alt="CEO"
            className="lg:hidden"
            height={254}
            width={216}
          />
          <Image
            src="/CEO.svg"
            alt="CEO"
            className="hidden lg:inline-flex"
            height={641}
            width={546}
          />
        </div>
        <div className="flex flex-col lg:items-start items-end mr-4">
          <p className="text-base lg:text-3xl font-bold my-2 flex justify-end">
            PAL SUPPORT
          </p>
          <p className="text-[#131540] text-right lg:text-left text-base lg:text-2xl opacity-50 w-20 lg:w-full">
            The help you need, when you need it.
          </p>
          <div className="my-4 lg:my-[4rem]">
            <button className="border border-1 border-black px-4 py-2 rounded-3xl">
              Contact us
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:justify-self-end lg:self-end">
          <Image
            src="hand_bottom_lg.svg"
            alt="hand_bottom_lg"
            height={585}
            width={275}
          />
        </div>
      </div>
    </>
  );
};

export default CeoContainer;
