import AboutMe from "@/components/AboutMe";
import Branding from "@/components/Branding";
import Footer from "@/components/Footer";
import Graphics from "@/components/Graphics";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import ProductDesigner from "@/components/ProductDesigner";
import UiProjects from "@/components/UiProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <Links/>
      <div className="mx-auto lg:w-9/12 w-11/12">
        <ProductDesigner />
        <AboutMe />
      </div>
      <UiProjects />
      <Graphics />
      <Branding />
      <Footer />
    </>
  );
}
