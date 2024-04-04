import Image from "next/image";
import { Services } from "@/components/Services";
import trainerImg from "../../../public/images/ptss.png";
import gardenImg from "../../../public/images/lsss.png";

export default function Websites() {
  return (
    <main className="lg:max-w-[1200px] m-auto lg:pt-[162px]">
      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[10px] px-2 lg:px-0">
          Website Management
        </h1>
        <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl px-2 lg:px-0">
          Say goodbye to large upfront investments with Venci&#39;s website
          design subscription. Our flexible pricing plans allow you to get
          started with professional website design and free SEO services without
          breaking the bank, ensuring your online presence remains up-to-date
          and competitive.
        </p>
      </div>

      <h1 className="text-5xl font-bold mb-[30px]">Plans&Pricing</h1>
      <div className="flex mb-[50px] lg:mb-[100px]"> 
        <div className="hidden text-xl lg:flex flex-col w-full">
          <div className="flex flex-row">
            <div className="w-1/4"></div>
            <div className="w-1/4 flex flex-col border-b-2 border-l-2 border-black pl-[5px] pb-[5px]">
              <h1 className="font-bold mb-[5px]">Basic</h1>
              <p>$19.99/mo</p>
            </div>
            <div className="w-1/4 flex flex-col border-b-2 border-l-2 border-black pl-[5px] pb-[5px]">
              <h1 className="font-bold mb-[5px]">Premium</h1>
              <p>Starts at: $39.99/mo</p>
            </div>
            <div className="w-1/4 flex flex-col border-b-2 border-l-2 border-black pl-[5px] pb-[5px]">
              <h1 className="font-bold mb-[5px]">Custom/E-commerce</h1>
              <p>Starts at: $49.99/mo</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4">
              <p>Down Payment</p>
            </div>
            <div className="w-1/4 border-l-2 border-black pl-[5px] py-[5px]">
              <p>$0</p>
            </div>
            <div className="w-1/4 border-l-2 border-black pl-[5px] py-[5px]">
              <p>Starts at: $500</p>
            </div>
            <div className="w-1/4 border-l-2 border-black pl-[5px] py-[5px]">
              <p>Starts at: $1500</p>
            </div>
          </div>
          <div className="flex flex-row bg-blue-200">
            <div className="w-1/4">
              <p>Number of Pages</p>
            </div>
            <div className="w-1/4">
              <p>2</p>
            </div>
            <div className="w-1/4">
              <p>up to 7</p>
            </div>
            <div className="w-1/4">
              <p>up to 12</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-1/4">
              <p>SEO (Search Engine Optimization)</p>
            </div>
            <div className="w-1/4">
              <p>Included</p>
            </div>
            <div className="w-1/4">
              <p>Included</p>
            </div>
            <div className="w-1/4">
              <p>Included</p>
            </div>
          </div>
          <div className="flex flex-row bg-blue-200">
            <div className="w-1/4">
              <p>Photos and Graphics</p>
            </div>
            <div className="w-1/4">
              <p>Stock</p>
            </div>
            <div className="w-1/4">
              <p>Professional</p>
            </div>
            <div className="w-1/4">
              <p>Professional</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-1/4">
              <p>Premium Website Design Features</p>
            </div>
            <div className="w-1/4">
              <p>Not Available</p>
            </div>
            <div className="w-1/4">
              <p>Included</p>
            </div>
            <div className="w-1/4">
              <p>Included</p>
            </div>
          </div>
          <div className="flex flex-row bg-blue-200">
            <div className="w-1/4">
              <p>User Login</p>
            </div>
            <div className="w-1/4">
              <p>Not Available</p>
            </div>
            <div className="w-1/4">
              <p>Not Available</p>
            </div>
            <div className="w-1/4">
              <p>Options Available</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-1/4">
              <p>Online Payments/ Subscriptions</p>
            </div>
            <div className="w-1/4">
              <p>Not Available</p>
            </div>
            <div className="w-1/4">
              <p>Not Available</p>
            </div>
            <div className="w-1/4">
              <p>Options Available</p>
            </div>
          </div>
          <div className="flex flex-row bg-blue-200">
            <div className="w-1/4">
              <p>Appointment Scheduling</p>
            </div>
            <div className="w-1/4">
              <p>Not Available</p>
            </div>
            <div className="w-1/4">
              <p>Not Available</p>
            </div>
            <div className="w-1/4">
              <p>Options Available</p>
            </div>
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
          <li>Top Notch Security</li>
          <li>$0 Down, $19.99/month</li>
        </ul>
      </div>

      <h1 className="text-5xl mb-[10px] font-bold px-2 lg:px-0">
        How it Works
      </h1>
      <div className="flex flex-col lg:flex-row mb-[50px] lg:mb-0">
        <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl lg:w-2/3 px-2 lg:pr-[50px]">
          At Venci, we&#39;ve simplified the website design process for our
          clients. Upon signing up, you&#39;ll gain access to our team of
          experienced designers who will craft a beautifully designed website
          tailored to your brand. With security handled by our experts, your
          website is safe and protected. Our subscription model ensures
          affordability and includes one free content update each month, keeping
          your website fresh. Plus, we offer complimentary SEO services to
          optimize your website for search engines and boost your online
          visibility.
        </p>
        <div className="flex flex-col lg:gap-5 lg:w-1/3 lg:mb-[100px]">
          <div className="overflow-hidden w-full lg:h-[165px] bg-blue-400">
            <a
              href="https://nextpt.vercel.app/"
              target="_blank"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              <Image src={trainerImg} alt="photo" />
            </a>
          </div>
          <div className="overflow-hidden w-full lg:h-[165px] bg-green-400">
            <a
              href="https://nextlandscaping.vercel.app/"
              target="_blank"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              <Image src={gardenImg} alt="photo" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
