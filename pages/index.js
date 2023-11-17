import AboutMe from "@/components/AboutMe";
import Graphics from "@/components/Graphics";
import Hero from "@/components/Hero";
import ProductDesigner from "@/components/ProductDesigner";
import UiProjects from "@/components/UiProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto w-9/12">
        <ProductDesigner />
        <AboutMe />
      </div>
      <UiProjects />
      <Graphics />
    </>
  );
}
