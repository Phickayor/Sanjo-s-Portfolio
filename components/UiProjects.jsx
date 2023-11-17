import React from "react";

function UiProjects() {
  return (
    <div className="md:py-20">
      <div className="grid grid-cols-2 font-biz -mt-14 md:mt-0 ">
        <h1 className="md:pl-20 pl-5 text-[40px] leading-[50px] md:text-[80px] md:leading-[130px] md:mt-20">
          WEDDING LANDING PAGE
        </h1>
        <img
          src="/images/wedding-site.png"
          alt="wedding landing page"
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-2 font-biz">
        <img
          src="/images/portfolio-site.png"
          alt="Portfolio site"
          className="w-full"
        />
        <h1 className="text-[40px] pr-5 leading-[50px] md:text-[80px] md:leading-[130px] self-end md:mb-10">
          PORTFOLIO DESIGN
        </h1>
      </div>
    </div>
  );
}

export default UiProjects;
