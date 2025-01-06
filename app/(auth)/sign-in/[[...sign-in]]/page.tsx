import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white max-w-7xl mx-auto">
      <div className="lg:grid lg:h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6 p-10">
          <Image
            alt=""
            src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?t=st=1736156963~exp=1736160563~hmac=9dec1e1f12b9df08a5e2a78d4e25c748bd273cfff94fbdd995b0909cbaf5e114&w=1800"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            width={1000}
            height={1000}
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <SignIn />
        </main>
      </div>
    </section>
  );
}
