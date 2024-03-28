import Image from "next/image";
import { Services } from "@/components/Services";
import trainerImg from "../../../public/images/ptss.png";
import gardenImg from "../../../public/images/lsss.png";

export default function Websites() {
  return (
    <main className="lg:max-w-[1200px] m-auto">
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

      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[10px] px-2 lg:px-0">
          Professional Design and SEO for $19.99/month
        </h1>
        <p className="text-2xl px-2 lg:px-0">
          At Venci, we pride ourselves on offering high-end search engine
          optimized (SEO) websites at an unbeatable price. For just $19.99 a
          month, our clients can enjoy the benefits of a professionally designed
          website that ranks well on search engines, helping them attract more
          visitors and grow their online presence.
        </p>
      </div>

      <h1 className="text-5xl mb-[10px] font-bold px-2 lg:px-0">
        How it Works
      </h1>
      <div className="flex flex-col lg:flex-row mb-[50px] lg:mb-0">
        <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl lg:w-2/3 px-2 lg:pr-3">
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
            <a href="https://nextpt.vercel.app/" target="_blank" className='hover:opacity-50 transition-opacity duration-300'>
              <Image src={trainerImg} alt="photo" />
            </a>
          </div>
          <div className="overflow-hidden w-full lg:h-[165px] bg-green-400">
            <a href="https://nextlandscaping.vercel.app/" target="_blank" className='hover:opacity-50 transition-opacity duration-300'>
              <Image src={gardenImg} alt="photo" />
            </a>
          </div>
        </div>
      </div>

      <Services />
    </main>
  );
}
