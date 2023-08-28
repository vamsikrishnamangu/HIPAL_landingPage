import React from "react";
import Logo from "../atoms/logo/logo";
import Image from "next/image";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiGoogleFill } from "react-icons/ri";
const TopSection = () => {
  return (
    <>
      <div className="mx-8 py-[2rem]">
        <Logo />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[#131540] text-base font-semibold">A Complete</h1>
        <div className="my-6">
          <span className="text-[#F2634C] font-bold">
            Restaurant Management System
          </span>
        </div>
        <p className="text-center text-base text-[#131540] opacity-50 mx-8 flex flex-col justify-center items-center">
          The only 360 degree Management solution you need to manage and grow
          your business
        </p>
        <div className="rounded-3xl my-10 px-[5.625rem] py-2 bg-[#F2634C] flex flex-row justify-center items-center">
          <button className="text-white font-semibold">Get started</button>
          <div>
            <Image
              src="/right_arrow.png"
              alt="rightArrow"
              height={20}
              width={20}
            />
          </div>
        </div>
        <div
          className="flex justify-center"
          style={{
            backgroundImage: "url(hand.svg)",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <Image src="/iphone.png" alt="iphone" height={627} width={360} />
        </div>
      </div>
      <div className="mx-8 flex items-center text-black text-2xl font-bold">
        <span>Trusted by</span>
        <div className="mx-2">
          <Image src="/tick.png" alt="tick" height={24} width={24} />
        </div>
      </div>
      <span className="mx-8 text-black text-2xl font-bold">
        Top rated restaurants
      </span>
      <div className="my-10" style={{ width: "300px", height: "76px" }}></div>
      <div className="mx-8 flex items-center justify-center">
        <span className="text-2xl font-bold">
          Managing your business has never been so
          <span className="inline-flex items-center mx-2 text-center">
            cool
            <Image
              src="/glasses.png"
              alt="glasses"
              height={10}
              width={20}
              className="mx-2"
            />
          </span>
        </span>
      </div>

      <div className="my-7">
        <h1 className="text-sm mx-8 font-bold text-[#F2634C]">
          Here&apos;s what all you get:
        </h1>
      </div>
      <div className="ml-8 flex flex-row flex-nowrap overflow-x-auto w-[20rem] items-center">
        <div className="h-[25rem] w-[10rem] px-4 bg-[#E7EEEA] flex flex-col items-center rounded-xl">
          <div className="flex self-start my-4">
            <Image
              src="/hikitchen.svg"
              alt="hikitchen"
              height={16.5}
              width={67.3}
            />
          </div>
          <div>
            <Image
              src="/hikitchen_dish.png"
              alt="hikitchen"
              height={103}
              width={136}
            />
          </div>
          <div className="mt-3 mb-3 ml-3 mr-[0.125rem]">
            <p className="text-[#131540] text-base font-normal opacity-50">
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
        <div className="h-[25rem] w-[10rem] px-4 mx-2 bg-[#E7EDFD] flex flex-col items-center rounded-xl">
          <div className="flex self-start my-4">
            <Image
              src="/hitable.svg"
              alt="hitable"
              height={16.5}
              width={67.3}
            />
          </div>
          <div>
            <Image
              src="/hitable_dish.png"
              alt="hitable"
              height={103}
              width={136}
            />
          </div>
          <div className="mt-3 mb-3 ml-3 mr-[0.125rem]">
            <p className="text-[#131540] text-base font-normal opacity-50">
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
        <div className="h-[25rem] w-[10rem] px-4 bg-[#D6F2FF] flex flex-col items-center rounded-xl">
          <div className="flex self-start my-4">
            <Image
              src="/hipeople.svg"
              alt="hipeople"
              height={16.5}
              width={67.3}
            />
          </div>
          <div>
            <Image
              src="/hipeople_dish.png"
              alt="hipeople"
              height={103}
              width={136}
            />
          </div>
          <div className="mt-3 mb-3 ml-3 mr-[0.125rem]">
            <p className="text-[#131540] text-base font-normal opacity-50">
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
      <div className="rounded-3xl mx-4 my-10 px-[3.25rem] py-2 bg-[#F2634C] flex flex-row justify-center items-center">
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
      <div
        style={{
          backgroundImage: "url(business_thrive.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "350px",
          background: `url(business_thrive.png), lightgray -126.218px 0px / 146.232% 100.286% no-repeat`,
        }}
      >
        <h1 className="text-2xl mx-8 font-bold text-[#201C44]">
          Let your business thrive with us...
        </h1>
      </div>
      <div className="flex justify-center items-center mb-11 overflow-hidden bg-gradient-to-r from-purple-300 via-green-300 to-red-300 h-24">
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

      <div className="mx-8 my-4">
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
      <div className="h-1 mx-8 bg-[#D9D9D9] my-4"></div>
      <div className="mx-8">
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
      <div className="w-full flex flex-row items-center mr-4 border-b-1 border-b-black">
        <div
          className="rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #F2634C 0%, rgba(242, 99, 76, 0.00) 78.47%)",
          }}
        >
          <Image
            src="/CEO.png"
            alt="CEO"
            className="mx-4"
            height={254}
            width={216}
          />
        </div>
        <div className="flex flex-col justify-end items-end w-1/2">
          <p className="text-base font-bold my-3">PAL SUPPORT</p>
          <p className="text-[#131540] opacity-50">
            The help you need, when you need it.
          </p>
          <div className="my-4">
            <button className="border border-1 border-black px-4 py-2 rounded-3xl">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="h-1 bg-[#121212] mb-4"></div>
      <div>
        <div className="my-10 flex justify-center">
          <Image src="/Hipal_logo.svg" alt="hipal" height={36} width={108} />
        </div>
      </div>
      <div className="flex justify-around">
        <div>
          <AiFillFacebook size={24} />
        </div>
        <div>
          <Image src="/twitter.svg" alt="twitter" height={24} width={24} />
        </div>
        <div>
          <AiOutlineInstagram size={24} />
        </div>
        <div>
          <AiFillLinkedin size={24} />
        </div>
        <div>
          <RiGoogleFill size={24} />
        </div>
      </div>
      <div className="flex flex-col items-center my-10 mx-8 mb-8">
        <p className="my-4">
          ©2001-2023 All Rights Reserved. Hipal® is a registered trademark of
          Paltribe solutions.
        </p>
        <p className="underline decoration-black">
          Privacy | Terms | Legal | Cookie Preferences
        </p>
        <br />
      </div>
    </>
  );
};

export default TopSection;
