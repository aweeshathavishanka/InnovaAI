import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className=" lg:max-w-7xl mx-auto flex flex-col z-0 items-center justify-center py-28 sm:pt-32 transistion-all  animate-in">
      <h1 className=" text-7xl text-center max-w-4xl font-medium">
        Empower Your Business with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-violet-300 to-violet-700">
          AI-Driven
        </span>{" "}
        Innovation
      </h1>
      <p className=" text-gray-400 text-xl font-normal max-w-3xl mt-8 text-center">
        Streamline your workflows, create captivating content, and elevate your
        productivity with our all-in-one SaaS and Blog platform powered by
        OpenAI.
      </p>
      <Button className=" rounded-full px-10 mt-6">
        <Link href={"/#pricing"} className=" flex items-center gap-3">
          Try InnovaAI{" "}
          <span>
            <ArrowRight />
          </span>
        </Link>
      </Button>
    </section>
  );
}
