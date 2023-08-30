import React from "react";
import Image from "next/image";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiGoogleFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
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
            <span className="text-sm">&#169;</span>2001-2023 All Rights
            Reserved. Hipal
            <span className="text-xs">&#174;</span> is a registered trademark of
            Paltribe solutions.
          </p>
        </div>
        <div className="order-0 flex flex-col items-center">
          <div className=" lg:text-2xl">
            <span className="underline decoration-black underline-offset-2">
              Privacy
            </span>
            <span> | </span>
            <span className="underline decoration-black underline-offset-2">
              Terms
            </span>
            <span> | </span>
            <span className="underline decoration-black underline-offset-2">
              Legal
            </span>
            <span> | </span>
            <span className="underline decoration-black underline-offset-2">
              Cookie Preferences
            </span>
          </div>
        </div>
        <div className="hidden lg:inline-flex order-0 lg:flex-row items-center my-10 lg:my-0 mx-8 mb-8 lg:mx-0 lg:place-self-end">
          <p className="my-4 lg:flex lg:items-center lg:text-right">
            ©2001-2023 All Rights Reserved. Hipal® is a registered trademark of
            Paltribe solutions.
          </p>
        </div>
        <br />
      </div>
    </>
  );
};

export default Footer;
