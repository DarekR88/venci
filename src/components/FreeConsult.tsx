"use client";

import Link from "next/link";

export function FreeConsult() {
  return (
    <>
      <div className="flex lg:my-9 w-full justify-center items-center">
        <div className="flex lg:w-[300px] m-auto h-[100px] lg:h-[85px] text-center align-center items-center rounded-md bg-cTwo hover:scale-110 transition-transform duration-500 ease-in-out">
          <Link
            href={"/contact"}
            className="text-xl lg:text-xl tracking-widest"
          >
            Schedule a Free Consultation Today
          </Link>
        </div>
      </div>
    </>
  );
}
