import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image src="/Hipal_logo.svg" alt="logo" height={24} width={69} />
    </div>
  );
};

export default Logo;
