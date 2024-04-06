import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import trainerImg from "../../public/images/ptss.png";
import photoImg from "../../public/images/photosite.png";
import gardenImg from "../../public/images/lsss.png";
import restaurantImg from "../../public/images/restaurantss.png";
import landscapeImg from "../../public/images/growgreen.png";
import constructionImg from "../../public/images/constructionss.png";
import logoIcon from "../../public/icons/pyramidA rotated.svg";

export default function Home() {
  return (
    <main className="lg:max-w-[1200px] m-auto">
      <div className="flex flex-col lg:pt-[162px] lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl lg:mb-[10px] px-2 lg:px-0">
          Get More Business Now
        </h1>
        <div className="flex lg:flex-row">
          <p className="lg:max-w-[800px] lg:mr-[50px] lg:text-2xl px-3 lg:px-0 lg:pl-[10px]">
            Welcome to Venci, where we specialize in empowering small to medium
            businesses with comprehensive marketing solutions tailored to their
            needs. From custom websites to targeted advertising campaigns,
            social media management, and 360-degree branding services, we&#39;re
            here to help you elevate your online presence and reach your target
            audience effectively.
          </p>
          <div className="hidden lg:flex">
            <Image src={logoIcon} alt="pyramid" height={200} />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[10px] px-2 lg:px-0">
          Professional Design and SEO for $19.99/month
        </h1>
        <p className="text-2xl px-2 lg:px-0 pb-5">
          At Venci, we pride ourselves on offering high-end search engine
          optimized (SEO) websites at an unbeatable price. For just $19.99 a
          month, our clients can enjoy the benefits of a professionally designed
          website that ranks well on search engines, helping them attract more
          visitors and grow their online presence.
        </p>
        <ul className="flex flex-col gap-[10px] m-auto text-left text-3xl list-disc">
          <li>Professional Design</li>
          <li>Search Engine Optimization (be Googleable)</li>
          <li>Hosting and Security</li>
          <li>$0 Down, $19.99/month</li>
        </ul>
      </div>

      <h1 className="text-5xl mb-[20px] font-bold px-2 lg:px-0">
        Website Demos
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:h-[165px] lg:mb-[20px] mb-[0px]">
        <div className="relative flex items-center overflow-hidden w-full lg:w-1/3 bg-cOne rounded-md shadow-md">
          <h1 className="absolute z-20 text-3xl ml-[20px]">Sophisticated</h1>
          <a
            href="https://photographernext.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={photoImg} alt="photo" />
          </a>
        </div>
        <div className="relative flex items-center overflow-hidden w-full lg:w-1/3 bg-cThree rounded-md shadow-md">
          <h1 className="absolute z-20 font-bold text-3xl ml-[20px]">
            Impactful
          </h1>
          <a
            href="https://nextpt.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={trainerImg} alt="photo" />
          </a>
        </div>
        <div className="relative flex items-center overflow-hidden w-full lg:w-1/3 bg-cFive rounded-md shadow-md">
          <h1 className="absolute z-20 text-3xl ml-[20px]">Warm</h1>
          <a
            href="https://nextlandscaping.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={gardenImg} alt="photo" />
          </a>
        </div>
      </div>
    </main>
  );
}
