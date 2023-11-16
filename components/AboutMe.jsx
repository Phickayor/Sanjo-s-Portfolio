import React from "react";
import Keywords from "./Keywords";
import Definition from "./Definition";
function AboutMe() {
  return (
    <div className="py-20 space-y-8">
      <div className="mx-auto w-fit">
        <img src="/images/sanjo.png" className="self-center" />
      </div>
      <p className="text-2xl text-center">
        Hi 👌 , I'm Egbewunmi olusanjo, a dynamic product designer at the
        intersection of creativity and functionality. I specialize in crafting
        user-centric designs that transcend the ordinary. My passion lies in
        pushing boundaries, seamlessly blending aesthetics with brand identity.
        From ideation to prototype, I thrive on transforming concepts into
        captivating user experiences. Let's redefine possibilities together!
      </p>
      <div className=" text-[40px] font-blowbrush grid grid-cols-2 gap-12 [&>*]:py-3 [&>*]:border-black">
        <div className="flex justify-center gap-4 border dashed-border">
          <img src="/images/adobe.png" />
          <h4 className="self-center">Photoshop</h4>
        </div>
        <div className="flex justify-center gap-4 dashed-border">
          <img src="/images/figma.png" />
          <h4 className="self-center">Figma</h4>
        </div>
      </div>
      <Keywords />
      <Definition />
    </div>
  );
}

export default AboutMe;
