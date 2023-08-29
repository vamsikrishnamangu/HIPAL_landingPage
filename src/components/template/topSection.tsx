import React, { useEffect, useState } from "react";
import Logo from "../atoms/logo/logo";
import Image from "next/image";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiGoogleFill } from "react-icons/ri";
import MiddleSection from "../atoms/middleSection/MiddleSection";
import CardSection from "../atoms/cardSection/CardSection";
import BusinessThrive from "../atoms/businessThrive/BusinessThrive";
import FadeEffect from "../atoms/FadeEffect/FadeEffect";
const TopSection = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    "Restaurant Management System",
    "Waiter Management System",
    "Kitchen Management System",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <div className="">
        <Logo />
      </div>
      <div className="lg:mb-[2.75rem] lg:ml-[5.75rem] flex flex-col lg:flex-row lg:justify-between">
        <div className="flex lg:my-[4rem] flex-col justify-between items-center lg:justify-center lg:items-start">
          <h1 className="text-[#131540] text-base font-semibold lg:text-[3rem]">
            A Complete
          </h1>
          <div className="flex justify-center my-6 lg:mb-[2rem] relative h-8 lg-h-0 lg:text-[4rem]">
            <FadeEffect />
          </div>
          <div className="lg:mt-[4rem]">
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
      <div className="flex justify-center items-center mb-11 overflow-hidden bg-gradient-to-r from-purple-300 via-green-300 to-red-300 h-24 lg:h-16">
        <div className="flex marquee" style={{ display: "flex" }}>
          <div className="flex items-center mx-4">
            <p className="text-base font-bold">START YOUR FREE TRIAL</p>
            <Image src="/arrow.svg" alt="arrow" height={24} width={24} />
          </div>
          <div className="flex items-center mx-4">
            <p className="text-base font-bold">START YOUR FREE TRIAL</p>
            <Image src="/arrow.svg" alt="arrow" height={24} width={24} />
          </div>
        </div>
      </div>
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
              style={{
                background:
                  "linear-gradient(to bottom right, #F2B54C 8%, #E0563C 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #F2B54C 8%, #E0563C 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #F2B54C 8%, #E0563C 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #F2B54C 8%, #E0563C 50%) top right / 50% 50% no-repeat",
              }}
              src="/arrow_line.svg"
              alt="arrow_line"
              height={18}
              width={18}
              className="p-1 rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div
          className="rounded-full lg:mr-[15.8rem]"
          style={{
            background:
              "linear-gradient(180deg, #F2634C 0%, rgba(242, 99, 76, 0.00) 78.47%)",
          }}
        >
          <Image
            src="/CEO.svg"
            alt="CEO"
            className="mx-4 lg:hidden"
            height={254}
            width={216}
          />
          <Image
            src="/CEO.svg"
            alt="CEO"
            className="mx-4 hidden lg:inline-flex"
            height={641}
            width={546}
          />
        </div>
        <div className="flex flex-col lg:items-start items-end mr-4">
          <p className="text-base lg:text-3xl font-bold my-2 flex justify-end">
            PAL SUPPORT
          </p>
          <p className="text-[#131540] lg:text-2xl opacity-50 text-base w-20 lg:w-full">
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
      <div className="h-1 bg-[#121212] mb-4"></div>
      <div className="lg:grid lg:grid-cols-2 lg:place-items-start lg:gap-y-5 lg:items-center lg:mx-[5.75rem]">
        <div className="order-0 my-10 lg:my-5 flex justify-center">
          <Image
            src="/Hipal_logo.svg"
            alt="hipal"
            height={36}
            width={108}
            className="lg:hidden"
          />
          <Image
            src="/Hipal_logo.svg"
            alt="hipal"
            height={84}
            width={234}
            className="hidden lg:inline-flex"
          />
        </div>
        <div className="flex justify-around lg:justify-center my-10 lg:my-5 lg:place-self-end">
          <div className="lg:mx-4">
            <AiFillFacebook size={24} />
          </div>
          <div className="lg:mx-4">
            <Image src="/twitter.svg" alt="twitter" height={24} width={24} />
          </div>
          <div className="lg:mx-4">
            <AiOutlineInstagram size={24} />
          </div>
          <div className="lg:mx-4">
            <AiFillLinkedin size={24} />
          </div>
          <div className="lg:mx-4">
            <RiGoogleFill size={24} />
          </div>
        </div>
        <div className="lg:hidden order-0 flex flex-col lg:flex-row items-center lg:my-0 my-10 mx-8 mb-8 lg:mx-0 lg:place-self-end">
          <p className="my-4">
            ©2001-2023 All Rights Reserved. Hipal® is a registered trademark of
            Paltribe solutions.
          </p>
        </div>
        <div className="order-0 flex flex-col items-center">
          <p className="underline decoration-black lg:text-2xl">
            Privacy | Terms | Legal | Cookie Preferences
          </p>
        </div>
        <div className="hidden lg:inline-flex order-0 lg:flex-row items-center my-10 lg:my-0 mx-8 mb-8 lg:mx-0 lg:place-self-end">
          <p className="my-4 lg:flex lg:items-center lg:text-right">
            ©2001-2023 All Rights Reserved. Hipal® is a registered trademark of
            Paltribe solutions.
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default TopSection;
