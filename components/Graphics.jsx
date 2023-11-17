import React from "react";

function Graphics() {
  const designs = [
    "graphics-1",
    "graphics-2",
    "graphics-3",
    "graphics-4",
    "graphics-5",
    "graphics-6",
    "graphics-7",
    "graphics-8",
    "graphics-9"
  ];
  return (
    <div className="py-10 space-y-8">
      <div className="mx-auto w-9/12">
        <h1 className="font-blowbrush text-center text-[130px] leading-[130px]">
          Instagram Post Design
        </h1>
      </div>
      <div className="grid grid-cols-3 w-full">
        {designs.map((design) => (
          <img
            src={`/images/${design}.png`}
            className="w-full h-full object-cover"
            alt="Instagram Post Designs"
          />
        ))}
      </div>
    </div>
  );
}

export default Graphics;
