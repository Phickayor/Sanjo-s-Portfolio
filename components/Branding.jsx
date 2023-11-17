import React from "react";

function Branding() {
  const designs = [
    "branding-1",
    "branding-2",
    "branding-3",
    "branding-4",
    "branding-5",
    "branding-6",
    "branding-7",
    "branding-8",
    "branding-9"
  ];
  return (
    <div className="py-10 space-y-8">
      <div className="mx-auto w-9/12">
        <h1 className="font-blowbrush text-center text-[130px] leading-[130px]">
          Branding
        </h1>
      </div>
      <div className="grid grid-cols-3 w-full">
        {designs.map((design) => (
          <img
            src={`/images/${design}.png`}
            className="w-full h-full object-cover"
            alt="Branding Designs"
          />
        ))}
      </div>
    </div>
  );
}

export default Branding;
