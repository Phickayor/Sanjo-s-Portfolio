import React from "react";
import Keywords from "./Keywords";
import Definition from "./Definition";
function AboutMe() {
  return (
    <div className="py-20 space-y-8">
      <div className="mx-auto w-fit">
        <img src="/images/sanjo.png" className="self-center" />
      </div>
      <p className="text-xl md:text-2xl text-center">
        Hi 👌 , I'm Egbewunmi olusanjo, a dynamic product designer at the
        intersection of creativity and functionality. I specialize in crafting
        user-centric designs that transcend the ordinary. My passion lies in
        pushing boundaries, seamlessly blending aesthetics with brand identity.
        From ideation to prototype, I thrive on transforming concepts into
        captivating user experiences. Let's redefine possibilities together!
      </p>
      <div className="text-[20px] md:text-[40px] font-blowbrush grid grid-cols-2 gap-4 md:gap-12 md:[&>*]:py-3 [&>*]:py-1 [&>*]:border-black">
        <div className="flex justify-center md:gap-4 gap-2 border dashed-border">
          <img src="/images/adobe.png" className="md:w-fit w-12" />
          <h4 className="self-center">Photoshop</h4>
        </div>
        <div className="flex justify-center md:gap-4 gap-2 dashed-border">
          <img src="/images/figma.png" className="md:w-fit w-12 md:h-fit h-10 self-center" />
          <h4 className="self-center">Figma</h4>
        </div>
      </div>
      <Keywords />
      <Definition />
    </div>
  );
}

export default AboutMe;
