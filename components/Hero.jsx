import React from "react";

function Hero() {
  return (
    <div className="relative py-16 xl:py-32 text-center font-blowbrush">
      <div>
        <img src="/images/left.png" className="absolute left-0 top-0 w-24 md:w-36 lg:w-44 xl:w-fit " />
        <img src="/images/right.png" className="absolute right-0  w-24 md:w-36 lg:w-44 xl:w-fit bottom-0" />
        <div className="p-4 mx-auto xl:w-1/2 ">
          <p className="text-[20px] md:text-[30px] lg:text-[40px]">Portfolio</p>
          <h1 className="text-[70px] leading-[80px] md:text-[105px] md:leading-[110px] lg:text-[140px] lg:leading-[140px]">
            Egbewunmi Olusanjo
          </h1>
        </div>
      </div>
    
    </div>
  );
}

export default Hero;
