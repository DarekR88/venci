import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import trainerImg from "../../public/images/ptss.png";
import photoImg from "../../public/images/photosite.png";
import gardenImg from "../../public/images/lsss.png";
import restaurantImg from "../../public/images/restaurantss.png";
import landscapeImg from "../../public/images/growgreen.png";
import constructionImg from "../../public/images/constructionss.png";

export default function Home() {

  return (
    <main className="lg:max-w-[1200px] m-auto">
      <div className="flex flex-col lg:pt-[162px] lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl lg:mb-[10px] px-2 lg:px-0">
          Get More Business Now
        </h1>
        <p className="lg:max-w-[850px] lg:text-2xl px-3 lg:px-0 lg:pl-[10px]">
          Welcome to Venci, where we specialize in empowering small to medium
          businesses with comprehensive marketing solutions tailored to their
          needs. From custom websites to targeted advertising campaigns, social
          media management, and 360-degree branding services, we&#39;re here to
          help you elevate your online presence and reach your target audience
          effectively.
        </p>
      </div>

      <h1 className="text-5xl mb-[20px] font-bold px-2 lg:px-0">Our Work</h1>
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:h-[165px] lg:mb-[20px] mb-[0px]">
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a href="https://photographernext.vercel.app/" target="_blank" className='hover:opacity-50 transition-opacity duration-300'>
            <Image src={photoImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a href="https://nextpt.vercel.app/" target="_blank" className='hover:opacity-50 transition-opacity duration-300'>
            <Image src={trainerImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a href="https://nextlandscaping.vercel.app/" target="_blank" className='hover:opacity-50 transition-opacity duration-300'>
            <Image src={gardenImg} alt="photo" />
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-5 lg:h-[165px] lg:mb-[100px] mb-[50px]">
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a href="https://landscaperdemo.vercel.app/" target="_blank" className='hover:opacity-50 transition-opacity duration-300'>
            <Image src={landscapeImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a href="https://painterdemo.vercel.app/" target="_blank" className='hover:opacity-50 transition-opacity duration-300'>
            <Image src={constructionImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a href="https://restaurantnext.vercel.app/" target="_blank" className='hover:opacity-50 transition-opacity duration-300'>
            <Image src={restaurantImg} alt="photo" />
          </a>
        </div>
      </div>
      
    </main>
  );
}
