"use client";

import React, { useState } from "react";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import trainerImg from "../../public/images/ptss.png";
import photoImg from "../../public/images/photosite.png";
import gardenImg from "../../public/images/lsss.png";
import restaurantImg from "../../public/images/restaurantss.png";
import landscapeImg from "../../public/images/gardeningss.png";
import constructionImg from "../../public/images/constructionss.png";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);
  const [isHoveredFour, setIsHoveredFour] = useState(false);
  const [isHoveredFive, setIsHoveredFive] = useState(false);
  const [isHoveredSix, setIsHoveredSix] = useState(false);

  return (
    <main className="lg:max-w-[1200px] m-auto">
      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
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
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:h-[165px] lg:mb-[20px] mb-[50px]">
        <div className="overflow-hidden w-full lg:w-1/3">
          <a
            href="https://photographernext.vercel.app/"
            target="_blank"
            className={`transition-opacity duration-300 ${
              isHovered ? "opacity-50" : "opacity-100"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image src={photoImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3">
          <a
            href="https://nextpt.vercel.app/"
            target="_blank"
            className={`transition-opacity duration-300 ${
              isHoveredTwo ? "opacity-50" : "opacity-100"
            }`}
            onMouseEnter={() => setIsHoveredTwo(true)}
            onMouseLeave={() => setIsHoveredTwo(false)}
          >
            <Image src={trainerImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3">
          <a
            href="https://nextlandscaping.vercel.app/"
            target="_blank"
            className={`transition-opacity duration-300 ${
              isHoveredThree ? "opacity-50" : "opacity-100"
            }`}
            onMouseEnter={() => setIsHoveredThree(true)}
            onMouseLeave={() => setIsHoveredThree(false)}
          >
            <Image src={gardenImg} alt="photo" />
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-5 lg:h-[165px] lg:mb-[100px] mb-[50px]">
        <div className="overflow-hidden w-full lg:w-1/3">
          <a
            href="https://landscaperdemo.vercel.app/"
            target="_blank"
            className={`transition-opacity duration-300 ${
              isHoveredFour ? "opacity-50" : "opacity-100"
            }`}
            onMouseEnter={() => setIsHoveredFour(true)}
            onMouseLeave={() => setIsHoveredFour(false)}
          >
            <Image src={landscapeImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3">
          <a
            href="https://painterdemo.vercel.app/"
            target="_blank"
            className={`transition-opacity duration-300 ${
              isHoveredFive ? "opacity-50" : "opacity-100"
            }`}
            onMouseEnter={() => setIsHoveredFive(true)}
            onMouseLeave={() => setIsHoveredFive(false)}
          >
            <Image src={constructionImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3">
          <a
            href="https://restaurantnext.vercel.app/"
            target="_blank"
            className={`transition-opacity duration-300 ${
              isHoveredSix ? "opacity-50" : "opacity-100"
            }`}
            onMouseEnter={() => setIsHoveredSix(true)}
            onMouseLeave={() => setIsHoveredSix(false)}
          >
            <Image src={restaurantImg} alt="photo" />
          </a>
        </div>
      </div>

      <h1 className="text-5xl mb-[20px] font-bold px-2 lg:px-0">
        Our Services
      </h1>
      <div className="flex flex-col lg:mb-[100px] lg:flex-row gap-5 lg:gap-8">
        <div className="w-full lg:w-1/4 hover:bg-lime-400 transition-colors duration-500">
          <h1 className="text-5xl lg:ml-1 lg:mb-2 px-2 lg:px-0">
            Website Services
          </h1>
          <p className="lg:px-2 lg:pb-2 px-2 lg:px-0">
            At Venci, we understand the importance of a strong online presence
            for businesses. That&#39;s why we offer custom website design as a
            subscription service, providing you with a professional website that
            evolves with your business needs without the burden of a hefty
            upfront investment.
          </p>
        </div>
        <div className="w-full lg:w-1/4 hover:bg-pink-400 transition-colors duration-500">
          <h1 className="text-5xl lg:ml-1 lg:mb-2 px-2 lg:px-0">Paper Media</h1>
          <p className="lg:px-2 lg:pb-2 px-2 lg:px-0">
            Elevate your marketing efforts with Venci&#39;s paper advertising
            service. Our campaigns include strategically placed QR codes that
            seamlessly integrate with your print materials, driving traffic
            directly to your website and maximizing your return on investment
          </p>
        </div>
        <div className="w-full lg:w-1/4 hover:bg-amber-300 transition-colors duration-500">
          <h1 className="text-5xl lg:ml-1 lg:mb-2 px-2 lg:px-0">
            Social Media
          </h1>
          <p className="lg:px-2 lg:pb-2 px-2 lg:px-0">
            Stay ahead of the curve with Venci&#39;s social media management
            subscription. Our expert team will handle all aspects of your social
            media presence, ensuring consistent engagement across platforms and
            targeted outreach to your desired audience.
          </p>
        </div>
        <div className="w-full lg:w-1/4 hover:bg-cyan-400 transition-colors duration-500">
          <h1 className="text-5xl lg:ml-1 lg:mb-2 px-2 lg:px-0">
            360&deg; Branding
          </h1>
          <p className="lg:px-2 lg:pb-2 px-2 lg:px-0">
            At Venci, we understand that branding is more than just a logo -
            it&#39;s a reflection of your business identity. Our 360&deg;
            branding services encompass logo development, color scheming, and
            comprehensive brand strategy to ensure your brand stands out in a
            crowded market.
          </p>
        </div>
      </div>
    </main>
  );
}
