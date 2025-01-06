import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className=" border-t py-10">
        <div className=" max-w-7xl mx-auto">
          <div>
            <h1 className=" text-gray-500">
              Built By{" "}
              <Link
                href={"https://www.awee.me/"}
                className=" underline text-black">
                Aweesha Thavishanka
              </Link>{" "}
              . The Source code is avaliable on{" "}
              <Link href={""} className=" underline text-black">
                Github
              </Link>
            </h1>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
