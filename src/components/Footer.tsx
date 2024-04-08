"use client";

import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="border-black relative bottom-0 flex flex-col-reverse justify-center items-center w-screen py-6 lg:flex-row lg:px-32 lg:justify-between lg:h-24">
        <p>
          <span>&copy;</span> 2023 Venci
        </p>
        <Link href={"/"} className="text-2xl text-center">
          <span className="text-4xl font-Orbitron">VENCI</span> Websites&Advertising
        </Link>
        <Link href={"/contact"} className="text-xl lg:pb-0 pb-3">
          Reach your Audience
        </Link>
      </div>
    </>
  );
}
