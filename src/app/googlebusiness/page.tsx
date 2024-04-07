import Image from "next/image";
import Link from "next/link";
import diamondIcon from "../../../public/icons/diamondA.svg";
import googleIcon from "../../../public/icons/google-chrome-svgrepo-com.svg";

import gbusinessImg from "../../../public/images/googScreenshot.png";
import businesspImg from "../../../public/images/businessScreenshot.png";

export default function GoogleBusiness() {
  return (
    <main className="lg:max-w-[1200px] m-auto px-2 lg:pt-[162px]">
      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[20px] px-2 lg:px-0">
          Google Business Management
        </h1>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <p className="lg:w-1/2 lg:pl-[10px] mb-[px] lg:text-2xl px-2 lg:px-0">
            Increase your visibility on Google with our Business Management
            service. We ensure your business appears prominently in Google
            searches and can even manage reviews for you. Our goal is to make
            your business stand out positively in the Google Business section.
          </p>
          <div className="overflow-hidden w-full lg:w-1/3 h-[210px] border-2 border-cTwo rounded-lg shadow-lg">
            <Image src={businesspImg} alt="Google business" />
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold mb-[20px]">Plans&Pricing</h1>
      <div className="mb-[50px] lg:pl-10">
        <h1 className="text-4xl font-bold mb-[20px]">Setup</h1>
        <p className="text-xl mb-[20px] w-full lg:w-2/3">
          Optimize your online presence with Venci&#39;s Google Business Setup
          service. We ensure your Google Business account is set up
          professionally for maximum exposure and positive representation.
        </p>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="flex flex-col py-7 items-center shadow-lg w-full lg:w-1/3 border-2 border-cThree rounded-lg">
            <h1 className="text-2xl font-bold">Basic</h1>
            <Image src={googleIcon} alt="icon" height={30} />
            <p className="text-2xl mb-[20px]">$75</p>
            <ul className="list-disc list-inside text-xl">
              <li>Optimized Setup</li>
              <li>Stock Photos</li>
              <li>SEO Copy</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center shadow-lg py-7 w-full lg:w-1/3 border-2 border-cSeven rounded-lg">
            <h1 className="text-2xl font-bold">Premium</h1>
            <Image src={diamondIcon} alt="diamond" height={30} />
            <p className="text-2xl mb-[20px]">Starts at: $400</p>
            <ul className="list-disc list-inside text-xl">
              <li>Premium Setup</li>
              <li>Professional Photos</li>
              <li>Professional Graphics</li>
              <li>SEO Copy</li>
            </ul>
          </div>
        </div>
        <Link
          href={"/contact"}
          className="flex w-fit font-Montserrat shadow-xl text-center text-xl m-auto lg:ml-[250px] p-[10px] bg-white border-2 border-cFive rounded-full mt-[30px] hover:bg-cFive hover:border-transparent hover:shadow-none hover:scale-105 transition-all duration-300"
        >
          Book a Free Consultation Today &#8669;
        </Link>
      </div>

      <div className="lg:pl-10">
        <h1 className="text-4xl font-bold mb-[20px]">Management</h1>
        <p className="text-xl w-full mb-[20px] lg:w-2/3">
          Ensure your business always looks it&#39;s best with Venci&#39;s
          Google Business Management service. Google is the &#35;1 place your
          business will be seen, allow our talented Google Business experts to
          curate and manage your business&#39;s best possible image.
        </p>
        <div className="flex flex-col lg:flex-row mb-[30px] gap-10 lg:gap-12">
          <div className="flex flex-col py-7 items-center shadow-lg w-full lg:w-1/3 border-2 border-cOne rounded-lg">
            <h1 className="text-2xl font-bold">Basic</h1>
            <Image src={googleIcon} alt="icon" height={30} />
            <p className="text-2xl mb-[10px]">$19.99/month</p>
            <ul className="list-disc list-inside text-xl">
              <li>Review Management</li>
              <li>Analytics Reporting</li>
            </ul>
          </div>
          <div className="flex flex-col items-center shadow-lg w-full lg:w-1/3 border-2 border-cThree rounded-lg py-7 px-10">
            <h1 className="text-2xl font-bold">Premium</h1>
            <Image src={diamondIcon} alt="diamond" height={30} />
            <p className="text-2xl mb-[10px]">Starts at: $199/month</p>
            <ul className="lg:pl-[20px] pl-[30px] list-disc list-outside text-xl">
              <li>Premium Review Management</li>
              <li>Analytics Reporting</li>
              <li>1 Professional Content Update/month</li>
            </ul>
          </div>
        </div>
        <Link
          href={"/contact"}
          className="flex w-fit mb-[50px] lg:mb-[100px] font-Montserrat shadow-xl text-center text-xl lg:ml-[250px] m-auto p-[10px] bg-white border-2 border-cSeven rounded-full mt-[20px] hover:bg-cSeven hover:border-transparent hover:shadow-none hover:scale-105 transition-all duration-300"
        >
          Book a Free Consultation Today &#8669;
        </Link>
      </div>
    </main>
  );
}
