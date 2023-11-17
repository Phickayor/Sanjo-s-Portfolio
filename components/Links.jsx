import React from "react";

function Links() {
  return (
    <div className="font-poppins grid grid-cols-3 text-lg md:text-3xl lg:text-4xl text-center [&>*]:mr-5 md:[&>*]:mr-10 lg:[&>*]:mr-20 py-5 md:py-10">
      <div className="bg-black relative ">
        <div className="absolute bg-white w-full right-3 md:right-5 lg:right-10 bottom-3 md:bottom-6 lg:bottom-8 py-4 md:py-6 lg:py-10">
          <button>Socials</button>
        </div>
      </div>
      <div className="bg-black relative ">
        <div className="absolute bg-white w-full right-3 md:right-5 lg:right-10 bottom-3 md:bottom-6 lg:bottom-8 py-4 md:py-6 lg:py-10">
          <button>Access Cv</button>
        </div>
      </div>
      <div className="relative">
        <div className=" bg-black py-5 md:py-10">
          <button className="absolute bg-white w-full right-3 md:right-5 lg:right-10 bottom-3 md:bottom-6 lg:bottom-8 py-4 md:py-6 lg:py-10">
            Behance
          </button>
        </div>
      </div>
    </div>
  );
}

export default Links;
