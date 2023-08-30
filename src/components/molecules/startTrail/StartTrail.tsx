import Image from "next/image";
import React from "react";

const StartTrail = () => {
  return (
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
  );
};

export default StartTrail;
