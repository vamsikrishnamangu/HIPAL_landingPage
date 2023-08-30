import React from "react";
import Logo from "../molecules/logo/logo";
import Image from "next/image";

import MiddleSection from "../molecules/middleSection/MiddleSection";
import CardSection from "../molecules/cardSection/CardSection";
import BusinessThrive from "../molecules/businessThrive/BusinessThrive";
import TitleTransition from "../molecules/TitleTransition/TitleTransition";
import Footer from "../molecules/footer/Footer";
import CeoContainer from "../molecules/ceoContainer/CeoContainer";
import StartTrail from "../molecules/startTrail/StartTrail";
const LandingPage = () => {
  return (
    <>
      <Logo />
      <div className="lg:mb-[2.75rem] lg:ml-[5.75rem] flex flex-col lg:flex-row lg:justify-between">
        <div className="flex lg:my-[4rem] flex-col justify-between items-center lg:justify-center lg:items-start">
          <h1 className="text-[#131540] text-base font-semibold lg:text-[3rem]">
            A Complete
          </h1>
          <div className="flex lg:leading-10 justify-center items-center my-6 lg:my-0 lg:mt-[3rem] relative h-8 lg-h-0 lg:text-[4rem]">
            <TitleTransition />
          </div>
          <div className="lg:mt-[6rem]">
            <p className="text-center lg:leading-[3rem] lg:text-left text-base lg:text-[2.5rem] text-[#131540] opacity-50 mx-8 lg:mx-0 flex flex-col justify-center items-center">
              The only 360 degree Management solution you need to manage and
              grow your business
            </p>
          </div>
          <div className="lg:h-[5.5rem] lg:w-[18.75rem] rounded-3xl my-10 px-[5.625rem] lg:px-0 py-2 bg-[#F2634C] flex flex-row justify-center items-center">
            <div className="">
              <button className="text-white font-semibold lg:text-2xl">
                Get started
              </button>
            </div>
            <div className="lg:hidden">
              <Image
                src="/right_arrow.png"
                alt="rightArrow"
                height={20}
                width={20}
              />
            </div>
            <div className="hidden lg:mx-2 lg:inline-flex">
              <Image
                src="/arrow_line.svg"
                alt="arrow_line"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
        <div
          className="flex justify-center lg:hidden"
          style={{
            backgroundImage: "url(hand.svg)",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <Image
            src="/iphone.svg"
            alt="iphone"
            height={627}
            width={360}
            className="mt-[1.2rem]"
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="hidden lg:flex lg:justify-center lg:ml-[4rem]"
          style={{
            backgroundImage: "url(tilted_hand_lg.png)",
            backgroundSize: "cover",
            backgroundPosition: "left",
            width: "100%",
          }}
        >
          <Image
            src="/iphone_lg.svg"
            alt="iphone"
            height={832}
            width={571}
            className="mt-[2rem]"
          />
        </div>
      </div>
      <MiddleSection />
      <CardSection />
      <BusinessThrive />
      <StartTrail />
      <div className="lg:hidden mx-8 my-4">
        <h1 className="text-2xl my-4">Hipal.life</h1>
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
              className="p-1  bg-[#F2634C] rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden h-1 mx-8 bg-[#D9D9D9] my-4"></div>
      <div className="lg:hidden mx-8">
        <div className="my-4">
          <Image src="pro_hipal.svg" alt="pro_hipal" height={30} width={110} />
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
              height={20}
              width={20}
              className="p-1 lg:p-2 bg-[#F2634C] rounded-2xl"
            />
          </div>
        </div>
      </div>
      <CeoContainer />
      <div className="h-1 bg-[#121212] mb-4"></div>
      <Footer />
    </>
  );
};

export default LandingPage;
