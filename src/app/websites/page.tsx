import Image from "next/image";
import { FreeConsult } from "@/components/FreeConsult";
import trainerImg from "../../../public/images/ptss.png";
import photoImg from "../../../public/images/photosite.png";
import gardenImg from "../../../public/images/lsss.png";
import restaurantImg from "../../../public/images/restaurantss.png";
import landscapeImg from "../../../public/images/growgreen.png";
import constructionImg from "../../../public/images/constructionss.png";

export default function Websites() {
  return (
    <main className="lg:max-w-[1200px] m-auto lg:pt-[162px]">
      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[10px] px-2 lg:px-0">
          Website Management
        </h1>
        <p className="lg:max-w-[850px] pb-[20px] lg:pl-[10px] lg:text-2xl px-2 lg:px-0">
          Say goodbye to large upfront investments with Venci&#39;s website
          design subscription. Venci aims to make high-end website design,
          hosting, and management accessible to any type of small business.
        </p>
        <ul className="flex flex-col gap-[10px] m-auto text-left text-3xl list-disc">
          <li>Professional Design</li>
          <li>Search Engine Optimization (be Googleable)</li>
          <li>Hosting and Security</li>
          <li>$0 Down, $19.99/month</li>
        </ul>
      </div>

      <h1 className="text-5xl font-bold mb-[30px]">Plans&Pricing</h1>
      <div className="flex mb-[50px] lg:mb-[100px]">
        <div className="hidden text-xl lg:flex flex-col w-full">
          <div className="flex flex-row">
            <div className="flex flex-col gap-2 w-1/4 border-b-2 border-black">
              <h1 className="text-3xl font-bold w-full text-right pr-[10px]">
                Plans&#8594;
              </h1>
              <h1 className="text-3xl font-bold pb-[10px]">Features&#8595;</h1>
            </div>
            <div className="w-1/4 justify-center flex flex-col border-b-2 border-l-2 border-black p-[10px] bg-gradient-to-r from-cOne to-cThree">
              <h1 className="font-bold mb-[5px]">Basic</h1>
              <p>$19.99/mo</p>
            </div>
            <div className="w-1/4 justify-center flex flex-col border-b-2 border-l-2 border-black p-[10px] bg-gradient-to-r from-cThree to-cFour">
              <h1 className="font-bold mb-[5px]">Premium</h1>
              <p>Starts at: $19.99/mo</p>
            </div>
            <div className="w-1/4 justify-center flex flex-col border-b-2 border-l-2 border-black p-[10px] bg-gradient-to-r from-cFour to-cFive">
              <h1 className="font-bold mb-[5px]">Custom/E-commerce</h1>
              <p>Starts at: $49.99/mo</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4 flex items-center p-[10px] h-full">
              <p>Down Payment</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>$0</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Starts at: $300</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Starts at: $1500</p>
            </div>
          </div>
          <div className="flex flex-row bg-gray-100">
            <div className="w-1/4 flex items-center p-[10px] h-full">
              <p>Number of Pages</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>2</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>up to 7</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>up to 12</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-1/4 p-[10px]">
              <p>SEO (Search Engine Optimization)</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Included</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Included</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Included</p>
            </div>
          </div>
          <div className="flex flex-row items-center bg-gray-100">
            <div className="w-1/4 p-[10px]">
              <p>Website Hosting</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Included</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Included</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Included</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4 p-[10px] flex items-center h-full">
              <p>Photos and Graphics</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Stock/Provided</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Professional/Provided</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Professional/Provided</p>
            </div>
          </div>
          <div className="flex flex-row items-center bg-gray-100">
            <div className="w-1/4 p-[10px]">
              <p>Premium Website Design Features</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Not Available</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Included</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Included</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4 p-[10px] flex items-center h-full">
              <p>User Login</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Not Available</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Add on</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Options Available</p>
            </div>
          </div>
          <div className="flex flex-row items-center bg-gray-100">
            <div className="w-1/4 p-[10px]">
              <p>Online Payments/ Subscriptions</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Not Available</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Add on</p>
            </div>
            <div className="w-1/4 border-l-2 border-black h-full flex items-center pl-[10px]">
              <p>Options Available</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4 p-[10px] flex items-center h-full">
              <p>Appointment Scheduling</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Not Available</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Add on</p>
            </div>
            <div className="w-1/4 border-l-2 border-black p-[10px]">
              <p>Options Available</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-5xl mb-[20px] font-bold px-2 lg:px-0">Demo Gallery</h1>
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:h-[165px] lg:mb-[20px] mb-[0px]">
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a
            href="https://photographernext.vercel.app/"
            target="_blank"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <Image src={photoImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a
            href="https://nextpt.vercel.app/"
            target="_blank"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <Image src={trainerImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a
            href="https://nextlandscaping.vercel.app/"
            target="_blank"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <Image src={gardenImg} alt="photo" />
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-5 lg:h-[165px] lg:mb-[100px] mb-[50px]">
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a
            href="https://landscaperdemo.vercel.app/"
            target="_blank"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <Image src={landscapeImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a
            href="https://painterdemo.vercel.app/"
            target="_blank"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <Image src={constructionImg} alt="photo" />
          </a>
        </div>
        <div className="overflow-hidden w-full lg:w-1/3 bg-[#FFD700]">
          <a
            href="https://restaurantnext.vercel.app/"
            target="_blank"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <Image src={restaurantImg} alt="photo" />
          </a>
        </div>
      </div>
    </main>
  );
}
