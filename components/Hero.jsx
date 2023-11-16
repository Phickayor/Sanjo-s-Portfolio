import React from "react";
import Links from "./Links";

function Hero() {
  return (
    <div className="py-36 text-center font-blowbrush">
      <div>
        <img src="/images/left.png" className="absolute left-0 top-0" />
        <img src="/images/right.png" className="absolute right-0  bottom-28" />
        <div className="mx-auto w-1/2">
          <p className="text-[40px]">Portfolio</p>
          <h1 className="text-[140px] leading-[140px]">Egbewunmi Olusanjo</h1>
        </div>
      </div>
      <div className="py-40">
        <Links />
      </div>
    </div>
  );
}

export default Hero;
