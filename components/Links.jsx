import React from "react";

function Links() {
  return (
    <div className="font-poppins grid grid-cols-3 text-md md:text-3xl gap-8 md:gap-20 lg:text-4xl text-center py-5 md:py-10">
      <div className="relative w-full">
        <div className=" bg-black py-5 md:py-10">
          <a
            href="https://linktr.ee/sanjo.tech"
            target="_blank"
            className="absolute bg-white w-full right-3 md:right-5 lg:right-10 bottom-3 md:bottom-6 lg:bottom-8 py-2 md:py-6 lg:py-10"
          >
            Socials
          </a>
        </div>
      </div>
      <div className="relative w-full">
        <div className=" bg-black py-5 md:py-10">
          <a
            href="https://drive.google.com/file/d/1LcJp3I8v96ygrwdQ__Z0H8h2EfTsjYLK/view?usp=drive_link"
            target="_blank"
            className="absolute bg-white w-full right-3 md:right-5 lg:right-10 bottom-3 md:bottom-6 lg:bottom-8 py-2 md:py-6 lg:py-10"
          >
            Access CV
          </a>
        </div>
      </div>
      <div className="relative w-full">
        <div className=" bg-black py-5 md:py-10">
          <a
            href="https://behance.net/callmesanjo"
            target="_blank"
            className="absolute bg-white w-full right-3 md:right-5 lg:right-10 bottom-3 md:bottom-6 lg:bottom-8 py-2 md:py-6 lg:py-10"
          >
            Behance
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
