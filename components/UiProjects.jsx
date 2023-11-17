import React from "react";

function UiProjects() {
  return (
    <div>
      <div className=" grid grid-cols-2 font-biz">
        <h1 className="pl-20 text-[80px] leading-[130px] mt-20">
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
          className=""
        />
        <h1 className="text-[80px] leading-[130px] self-end mb-10">
          PORTFOLIO DESIGN
        </h1>
      </div>
    </div>
  );
}

export default UiProjects;
