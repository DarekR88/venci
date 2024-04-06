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
import googleIcon from "../../public/icons/google-chrome-svgrepo-com.svg";
import adIcon from "../../public/icons/advertising-expense-svgrepo-com.svg";

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
            <Image
              src={logoIcon}
              alt="pyramid"
              height={200}
              className="mt-[-50px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl pb-[50px] mb-[20px] px-2 lg:px-0">
          Our Services
        </h1>

        <Link href={"/websites"}></Link>

        <div className="flex flex-col lg:flex-row gap-20 lg:h-[290px] lg:gap-20 w-full m-auto">
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cOne">
            <Link href={"/websites"} className="">
              <div className="flex flex-row justify-center mt-[-40px]">
                <h1 className="text-3xl font-bold bg-white w-[250px]">
                  Website Design &Management
                </h1>
                <Image
                  src={logoIcon}
                  alt="tool"
                  width={50}
                  className="bg-white"
                />
              </div>
              <p className="px-5 pt-[10px] pb-[20px] h-[225px]">
                With Google being the top platform for discovering new
                businesses, our FREE SEO (Search Engine Optimization) services
                guarantee your presence in relevant searches, maximizing your
                visibility and attracting potential customers.
              </p>
            </Link>
            <Link
              href={"/websites"}
              className="flex w-fit mb-[-10px] hover:bg-cFive hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg italic text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cFive rounded-md"
            >
              Learn More
            </Link>
          </div>
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cThree">
            <div className="flex flex-row justify-center mt-[-40px]">
              <h1 className="text-3xl font-bold bg-white w-[150px]">
                Google Business
              </h1>
              <Image
                src={googleIcon}
                alt="tool"
                width={60}
                className="bg-white"
              />
            </div>
            <p className="px-5 pb-[20px] pt-[10px]">
              Standing out online is key to staying ahead of the competition.
              With our affordable plan of $0 down and just $19.99 a month,
              you'll get a uniquely designed website that sets your company
              apart from the crowd, ensuring visibility and making a lasting
              impression.
            </p>
            <Link
              href={"/googlebusiness"}
              className="flex w-fit mb-[-10px] hover:bg-cTwo hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg italic text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cTwo rounded-md"
            >
              Learn More
            </Link>
          </div>
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cFive">
            <div className="flex flex-row justify-center mt-[-20px]">
              <h1 className="text-3xl font-bold bg-white">Advertising</h1>
              <Image
                src={adIcon}
                alt="tool"
                width={70}
                className="bg-white mt-[-20px]"
              />
            </div>
            <p className="px-5 pt-[10px] pb-[20px] h-[225px]">
              Our comprehensive hosting and security services streamline website
              management. For just $19.99 a month, we handle maintenance,
              monitoring, and analytics, ensuring your site remains secure,
              accessible, and optimized for performance at all times.
            </p>
            <Link
              href={"/websites"}
              className="flex w-fit mb-[-10px] hover:bg-cThree hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg italic text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cThree rounded-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-5xl mb-[20px] font-bold px-2 lg:px-0">
        Website Demos
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:h-[165px] lg:mb-[20px] mb-[0px]">
        <div className="relative flex items-center overflow-hidden w-full lg:w-1/3 bg-cOne rounded-md shadow-lg">
          <h1 className="absolute z-20 text-3xl ml-[20px]">Sophisticated</h1>
          <a
            href="https://photographernext.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={photoImg} alt="photo" />
          </a>
        </div>
        <div className="relative flex items-center overflow-hidden w-full lg:w-1/3 bg-cThree rounded-md shadow-lg">
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
        <div className="relative flex items-center overflow-hidden w-full lg:w-1/3 bg-cFive rounded-md shadow-lg">
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
