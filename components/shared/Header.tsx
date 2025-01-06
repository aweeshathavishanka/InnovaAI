import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <nav className=" z-50 sticky top-0 border-b bg-white/35 backdrop-blur-lg">
      <div className=" container mx-auto  flex items-center justify-between px-8 py-4">
        <div>
          <Link href={"/"} className=" flex items-center gap-3">
            <Image src={logo} alt="InnovaAI" width={30} height={30} />
            <h1 className=" text-xl font-medium">InnovaAI</h1>
          </Link>
        </div>
        <div>
          <Button
            className=" rounded-full text-black hover:text-primary"
            variant={"link"}>
            <Link href={"/login"}>Pricing</Link>
          </Button>
          <Button
            className=" rounded-full text-black hover:text-primary"
            variant={"link"}>
            <Link href={"/login"}>Your Posts</Link>
          </Button>
          <Button
            className=" rounded-full text-black hover:text-primary"
            variant={"link"}>
            <Link href={"/login"}>Upload a Video</Link>
          </Button>
          <Button className=" rounded-full" variant={"outline"}>
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
