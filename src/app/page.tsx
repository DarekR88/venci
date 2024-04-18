import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import trainerImg from "../../public/images/ptss.png";
import photoImg from "../../public/images/photosite.png";
import gardenImg from "../../public/images/lsss.png";
import logoIcon from "../../public/icons/pyramidA rotated.svg";
import googleIcon from "../../public/icons/google-chrome-svgrepo-com.svg";
import adIcon from "../../public/icons/advertising-expense-svgrepo-com.svg";
import ionDemoImg from "../../public/images/ionPhotoSS.png";
import insightDemoImg from "../../public/images/insightptSS.png";
import floreoDemoImg from "../../public/images/floreoSS.png";


export default function Home() {
  return (
    <main className="lg:max-w-[1200px] m-auto px-4">
      <div className="flex flex-col lg:pt-[162px] pt-[120px] lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl lg:mb-[20px] px-2 lg:px-0">
          Get More Business
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
          <div className="hidden shadow-lg lg:flex items-center justify-center h-[300px] w-[300px] bg-gradient-to-r from-cOne to-cSeven mt-[-70px] rounded-full">
            <Image
              src={logoIcon}
              alt="pyramid"
              height={200}
              className="mt-[35px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:mb-[100px] mb-[100px]">
        <h1 className="font-bold text-5xl mb-[75px] lg:mb-[80px] px-2 lg:px-0">
          Our Services
        </h1>

        <div className="flex flex-col lg:flex-row gap-24 lg:h-[350px] lg:gap-20 w-full m-auto">
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cOne">
            <div className="flex flex-row justify-center mt-[-40px]">
              <Image
                src={logoIcon}
                alt="tool"
                width={50}
                className="bg-white"
              />
            </div>
            <h1 className="text-3xl text-center m-auto mt-[20px] font-bold bg-white w-[250px]">
              Website Design &Management
            </h1>
            <p className="px-5 h-[222px] pt-[10px] pb-[20px] h-[225px]">
              At Venci, get a professional website for $0 down and $19.99/month.
              Our services include free SEO, ensuring visibility and impact.
              Stand out online with Venci&#39;s website design and management
              expertise.
            </p>

            <Link
              href={"/websites"}
              className="flex w-fit mb-[-25px] hover:bg-cFive hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cFive rounded-md"
            >
              Learn More
            </Link>
          </div>
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cThree">
            <div className="flex flex-row justify-center mt-[-40px]">
              <Image
                src={googleIcon}
                alt="tool"
                width={60}
                className="bg-white"
              />
            </div>
            <h1 className="text-3xl m-auto mt-[10px] font-bold bg-white w-[150px]">
              Google Business
            </h1>
            <p className="px-5 h-[222px] pb-[20px] pt-[10px]">
              Venci&#39;s Google Business Profile management service offers
              professional photo integration and review management. Enhance your
              online presence with expertly curated content. Let us optimize
              your profile for maximum visibility and positive customer
              engagement.
            </p>
            <Link
              href={"/googlebusiness"}
              className="flex w-fit mb-[-25px] hover:bg-cTwo hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cTwo rounded-md"
            >
              Learn More
            </Link>
          </div>
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cFive">
            <div className="flex flex-row justify-center mt-[-20px]">
              <Image
                src={adIcon}
                alt="tool"
                width={70}
                className="bg-white mt-[-20px]"
              />
            </div>
            <h1 className="text-3xl font-bold bg-white m-auto mt-[20px] w-[200px] text-center">
              Advertising
            </h1>

            <p className="px-5 h-[222px] pt-[10px] pb-[20px] h-[225px] mb-[10px]">
              Venci's advertising services encompass brand development and
              social media management. Elevate your brand with our strategic
              approach to marketing. From crafting your identity to engaging
              your audience, trust Venci to amplify your presence.
            </p>
            <Link
              href={"/advertising"}
              className="flex w-fit mb-[-25px] hover:bg-cThree hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cThree rounded-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-5xl mb-[20px] font-bold px-2 lg:px-0">
        Website Demos
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 lg:h-[210px] lg:mb-[100px] mb-[50px]">
        <div className="relative flex items-center overflow-hidden w-full lg:w-1/3 bg-cOne rounded-md border-2 border-cOne shadow-lg">
          <h1 className="absolute z-20 text-3xl ml-[20px]">Sophisticated</h1>
          <a
            href="https://photographernext.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={ionDemoImg} alt="photo" />
          </a>
        </div>
        <div className="relative flex items-center overflow-hidden w-full lg:w-1/3 bg-cThree rounded-md border-2 border-cFour shadow-lg">
          <h1 className="absolute z-20 font-bold text-3xl ml-[20px]">
            Impactful
          </h1>
          <a
            href="https://nextpt.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={insightDemoImg} alt="photo" />
          </a>
        </div>
        <div className="relative flex items-center overflow-hidden w-full lg:w-1/3 bg-cFive rounded-md border-2 border-cSeven shadow-lg">
          <h1 className="absolute z-20 text-3xl ml-[20px]">Warm</h1>
          <a
            href="https://nextlandscaping.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={floreoDemoImg} alt="photo" />
          </a>
        </div>
      </div>
    </main>
  );
}
