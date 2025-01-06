import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white max-w-7xl mx-auto">
      <div className="lg:grid lg:h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=""
            src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?t=st=1736156694~exp=1736160294~hmac=dca2623768624f1a1f416b8212d3c1bc7dfd6d59c310aaaab6976182fcfe0e9d&w=1380"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            width={1000}
            height={1000}
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <SignUp />
        </main>
      </div>
    </section>
  );
}
