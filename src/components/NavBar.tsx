"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";
import FacebookIcon from "../../public/icons/facebook-svgrepo-com.svg";
import InstaIcon from "../../public/icons/instagram-svgrepo-com.svg";
import TiktokIcon from "../../public/icons/tiktok-logo-4512.svg";
import PhoneSvg from "../../public/icons/phone-svgrepo-com.svg";
import logoIcon from "../../public/icons/pyramidA rotated.svg";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY !== 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set a timeout to update the state after a delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 0); // Adjust the delay as needed

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run only on component mount

  return (
    <main>
      <button
        onClick={handleClick}
        className={`fixed right-0 z-40 flex flex-col justify-center items-center z-30 lg:hidden ml-auto mr-[30px] transition-all duration-300 ${
          isTop ? " top-[40px]" : "top-[30px]"
        }`}
      >
        <span
          className={`z-40 bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
                    }`}
        ></span>
        <span
          className={`z-40 bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`z-40 bg-black block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
                    }`}
        ></span>
      </button>
      <div
        className={`fixed flex flex-col w-screen h-screen z-30 bg-white text-center pt-20 gap-8 ${
          isOpen
            ? "transition ease-in-out translate-y-0 duration-500 z-10"
            : "transition ease-in-out -translate-y-full duration-500"
        }`}
      >
        <Link onClick={handleClick} className="text-3xl" href="/">
          Home
        </Link>
        {/* <Link onClick={handleClick} className="text-3xl" href="/howitworks">
          How it Works
        </Link> */}
        <Link onClick={handleClick} className="text-3xl" href="/websites">
          Websites
        </Link>
        {/* <Link onClick={handleClick} className="text-3xl" href="/social">
          Social Media
        </Link> */}
        <Link onClick={handleClick} className="text-3xl" href="/googlebusiness">
          Google Business
        </Link>
        <Link onClick={handleClick} className="text-3xl" href="/advertising">
          Advertising
        </Link>
        <Link onClick={handleClick} className="text-3xl" href="/contact">
          Contact
        </Link>
        <Link onClick={handleClick} className="text-3xl" href="/about">
          About
        </Link>
      </div>
      <header
        className={`bg-white fixed bg-white flex flex-wrap z-20 gap-5 py-4 items-center w-screen lg:flex-row lg:justify-between lg:px-20 lg:h-${
          isTop ? "28" : "20"
        } lg:mb-${isTop ? "[75px]" : "[25px]"} ${
          !isTop
            ? "shadow-md transition-all duration-300 lg:transition-height"
            : "transition-all duration-300"
        }`}
      >
        <a href="/app/api/auth/auth0/login" className="hidden lg:absolute lg:flex right-[50px]">Login/Sign Up</a>
        <Link
          href={"/"}
          className={`rounded-full hidden lg:flex justify-center items-center text-5xl ml-[20px] bg-gradient-to-r from-cOne to-cSeven ${
            isTop
              ? "h-[100px] w-[100px] transition-all duration-300"
              : "h-[50px] w-[50px] transition-all duration-300"
          }`}
        >
          <Image
            src={logoIcon}
            alt="logo"
            height={isTop ? 65 : 35}
            width={isTop ? 65 : 35}
            className={`mt-[10px] ${
              isTop
                ? "transition-all duration-300"
                : "transition-all duration-300"
            }`}
          />
        </Link>
        <Link
          href={"/"}
          className={`rounded-full flex lg:hidden justify-center items-center text-5xl ml-[20px] bg-gradient-to-r from-cOne to-cSeven ${
            isTop
              ? "h-[70px] w-[70px] transition-all duration-300"
              : "h-[50px] w-[50px] transition-all duration-300"
          }`}
        >
          <Image
            src={logoIcon}
            alt="logo"
            height={isTop ? 50 : 35}
            width={isTop ? 50 : 35}
            className={`mt-[10px] ${
              isTop
                ? "transition-all duration-300"
                : "transition-all duration-300"
            }`}
          />
        </Link>

        <h1
          className={`font-Orbitron ${
            isTop
              ? "ml-[20px] text-4xl lg:text-5xl transition-all duration-300"
              : "ml-[40px] text-3xl transition-all duration-300"
          }`}
        >
          <Link href={"/"}>VENCI</Link>
        </h1>

        <div className="hidden lg:flex gap-6">
          <Link
            className="text-l relative w-fit block transition-colors duration-300 after:block after:content-[''] after:px-1 after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-l relative w-fit block transition-colors duration-300 after:block after:content-[''] after:px-1 after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/websites"
          >
            Websites
          </Link>
          {/* <Link
            className="text-l relative w-fit block px-1 focus:bg-red-400 hover:bg-red-400 transition-colors duration-300 after:block after:content-[''] after:px-1 after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/social"
          >
            Social Media
          </Link> */}
          <Link
            className="text-l relative w-fit block after:block after:content-[''] after:px-1 after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/googlebusiness"
          >
            Google Business
          </Link>
          <Link
            className="text-l relative w-fit block duration-300 after:block after:content-[''] after:px-1 after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/advertising"
          >
            Advertising
          </Link>
          <Link
            className="text-l relative w-fit block after:block after:content-[''] after:px-1 after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-l relative w-fit block after:block after:content-[''] after:px-1 after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:focus:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/about"
          >
            About
          </Link>
        </div>
        <div className="flex gap-4 px-2 z-0">
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={InstaIcon} alt="pfp" width={27} />
          </a> */}
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={FacebookIcon} alt="pfp" width={25} />
          </a> */}
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={XIcon} alt="pfp" width={23} />
          </a> */}
          {/* <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={TiktokIcon} alt="pfp" width={25} />
          </a> */}
        </div>
      </header>
    </main>
  );
}
