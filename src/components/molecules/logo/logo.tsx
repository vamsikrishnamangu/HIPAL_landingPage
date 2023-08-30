import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="mx-8 lg:mx-[5.75rem] py-[2rem] lg:py-[2.75rem]">
      <div className="block lg:hidden">
        <Image src="/Hipal_logo.svg" alt="logo" height={24} width={69} />
      </div>
      <div className="hidden lg:flex lg:justify-between">
        <div>
          <Image src="/Hipal_logo.svg" alt="logo" height={54} width={150} />
        </div>
        <div className="flex justify-around items-center text-2xl font-bold">
          <h6 className="mx-4">Hitable</h6>
          <h6 className="mx-4">Hikitchen</h6>
          <h6 className="mx-4">Hipeople</h6>
          <div className="bg-[#F2634C] text-white rounded-lg font-semibold px-4 py-2">
            <button>Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
