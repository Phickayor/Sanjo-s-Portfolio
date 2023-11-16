import React from "react";

function Links() {
  return (
    <div className="font-poppins grid grid-cols-3 text-4xl gap-5 [&>*]:mr-20 pt-60">
      <div className="bg-black relative ">
        <div className="absolute bg-white w-full right-10 bottom-8 py-10">
          <button>Socials</button>
        </div>
      </div>
      <div className="bg-black relative ">
        <div className="absolute bg-white w-full right-10 bottom-8 py-10">
          <button>Access Cv</button>
        </div>
      </div>
      <div className="relative">
        <div className=" bg-black py-10">
          <button className="absolute bg-white w-full right-10 bottom-8 py-10">
            Behance
          </button>
        </div>
      </div>
    </div>
  );
}

export default Links;
