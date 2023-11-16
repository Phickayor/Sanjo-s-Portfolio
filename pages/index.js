import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import ProductDesigner from "@/components/ProductDesigner";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto w-9/12">
        <ProductDesigner />
        <AboutMe />
      </div>
    </>
  );
}
