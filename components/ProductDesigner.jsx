import React from "react";

function ProductDesigner() {
  return (
    <div className="space-y-8">
      <h1 className="font-blowbrush text-[40px] md:text-[70px] lg:text-[90px]">
        ProducT Designer ✌️
      </h1>
      <p className="text-xl md:text-2xl text-center">
        As a Product Designer, I exist at the dynamic crossroads of imagination
        and pragmatism, sculpting the very essence of products throughout their
        evolutionary journey. I'm not just shaping designs; I'm crafting
        experiences, injecting innovation into the heartbeat of every product's
        lifecycle. 🚀
      </p>
      <div className="grid md:grid-cols-2 gap-10 text-2xl lg:text-3xl xl:text-4xl text-center text-white">
        <div className="bg-black py-8 lg:py-10 self-center">
          🎨 Graphics designer
        </div>
        <div className="bg-[#330036] py-8 lg:py-10 self-center ">
          🎨 Ui/Ux designer
        </div>
      </div>
    </div>
  );
}

export default ProductDesigner;
