import Image from "next/image";
import React from "react";

const BusinessThrive = () => {
  return (
    <>
      <div
        className="lg:hidden"
        style={{
          backgroundImage: "url(business_thrive.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "350px",
          background: `url(business_thrive.png), lightgray -126.218px 0px / 146.232% 100.286% no-repeat`,
        }}
      >
        <h1 className="text-2xl mx-8 pt-[1rem] font-bold text-[#201C44]">
          Let your business thrive with us...
        </h1>
      </div>
      <div className="lg:flex lg:mb-[5.63rem] hidden">
        <Image
          src="/business_thrive_lg.png"
          alt="bThrive"
          height={597}
          width={864}
          className="lg:mr-[3.9rem]"
        />
        <div className="lg:pt-[2rem] lg:mr-[5.75rem]">
          <h1 className="text-2xl font-bold text-[#201C44]">
            Let your business thrive with us...
          </h1>
          <div>
            <h1 className="lg:mt-[4rem] text-2xl my-4">Hipal.life</h1>
            <p className="text-base text-[#131540] opacity-50">
              Digital menu, Content management system, POS, Customize themes.
            </p>
            <div className="flex my-4 items-center">
              <p className="text-2xl">Check it out </p>
              <div className="mx-2">
                <Image
                  src="/arrow_line.svg"
                  alt="arrow_line"
                  height={18}
                  width={18}
                  className="p-1 bg-[#F2634C] rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="h-1 bg-[#D9D9D9] my-4"></div>
          <div className="">
            <div className="my-4">
              <Image
                src="pro_hipal.svg"
                alt="pro_hipal"
                height={30}
                width={110}
              />
            </div>
            <p className="text-base text-[#131540] opacity-50">
              All hipal.life features + hipeople, hitable, hikitches,
            </p>
            <div className="flex my-4 items-center">
              <p className="text-2xl">Check it out </p>
              <div className="mx-2">
                <Image
                  src="/arrow_line.svg"
                  alt="arrow_line"
                  height={18}
                  width={18}
                  className="p-1 bg-[#F2634C] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessThrive;
