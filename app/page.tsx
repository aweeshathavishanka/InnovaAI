import Divider from "@/components/sections/home/Divider";
import Footer from "@/components/sections/home/Footer";
import Hero from "@/components/sections/home/hero";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Pricing from "@/components/sections/home/Pricing";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" mx-auto w-full inset-0 h-full bg-[radial-gradient( #282c34_1px, transparent 1px )] [background-size: 20px 20px;]">
      <Hero />
      <Divider />
      <HowItWorks />
      <Divider />
      <Pricing />
      <Divider />
      <Footer />
    </main>
  );
}
