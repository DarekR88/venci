import Image from "next/image";
import Link from "next/link";
import { Services } from "@/components/Services";
import pinkcoastImg from "../../../public/images/pinkcoaster.png";
import breadImg from "../../../public/images/breadflyer.png";
import flyerImg from "../../../public/images/blueflyer.png";
import shareIcon from "../../../public/icons/share-svgrepo-com.svg";
import pyramidIcon from "../../../public/icons/pyramidA rotated.svg";
import paperIcon from "../../../public/icons/paper-plane-svgrepo-com.svg";

export default function Advertising() {
  return (
    <main className="lg:max-w-[1200px] pt-[125px] lg:pt-[162px] m-auto px-2">
      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[10px]">Build Your Identity</h1>
        <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl">
          Venci&#39;s advertising design services provide affordable solutions
          for your small business. Our experts are here to present designs and
          campaigns that can help take your business to the next level.
        </p>
      </div>

      <div className="flex flex-col lg:mb-[100px] mb-[100px]">
        <h1 className="font-bold text-5xl pb-[50px] mb-[20px] px-2 lg:px-0">
          Our Services
        </h1>

        <div className="flex flex-col lg:flex-row gap-20 lg:h-[290px] lg:gap-20 w-full m-auto">
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cOne">
            <div className="flex flex-row justify-center mt-[-40px]">
              <h1 className="text-3xl font-bold bg-white w-[190px]">
                Advertising Design
              </h1>
              <Image
                src={pyramidIcon}
                alt="tool"
                width={50}
                className="bg-white"
              />
            </div>
            <p className="px-5 pt-[10px] pb-[20px] h-[225px]">
              When it comes to advertisements for your business, Venci
              understands how important it is to look good. Our experts pull
              from the most successful advertising designs to present you with
              top notch advertisements.
            </p>

            <Link
              href={"/contact"}
              className="flex w-fit mb-[-25px] hover:bg-cFive hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg italic text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cFive rounded-full"
            >
              Free Consultation
            </Link>
          </div>
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cThree">
            <div className="flex flex-row justify-center mt-[-40px]">
              <h1 className="text-3xl font-bold bg-white w-[100px]">
                Social Media
              </h1>
              <Image
                src={shareIcon}
                alt="tool"
                width={60}
                className="bg-white"
              />
            </div>
            <p className="px-5 pb-[20px] pt-[10px] h-[225px]">
              Social Media can be an extremely powerful tool for your business.
              At Venci we specialize in the creation of unique content aimed at
              generating buzz around your business. Allow our experts to craft
              videos and graphics that will make your business look good.
            </p>
            <Link
              href={"/contact"}
              className="flex w-fit mb-[-25px] hover:bg-cTwo hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg italic text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cTwo rounded-full"
            >
              Free Consultation
            </Link>
          </div>
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cFive">
            <div className="flex flex-row justify-center mt-[-40px]">
              <h1 className="text-3xl font-bold bg-white w-[190px]">
                Advertising Strategy
              </h1>{" "}
              <Image
                src={paperIcon}
                alt="tool"
                width={70}
                className="bg-white mt-[-20px]"
              />
            </div>
            <p className="px-5 pt-[10px] pb-[20px] h-[225px]">
              Advertising campaigns can be expensive and complicated. At Venci,
              we simplify the process. Tell us where you are struggling and that
              is where we will focus our efforts. From design to distribution,
              Venci has got your back.
            </p>
            <Link
              href={"/contact"}
              className="flex w-fit mb-[-25px] hover:bg-cThree hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg italic text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cThree rounded-full"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-5xl mb-[10px] font-bold">How it Works</h1>
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:mb-[100px] mb-[50px]">
        <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl lg:w-2/3 lg:pr-3">
          At Venci, we specialize in placing advertisements for your business in
          strategic locations where they&#39;ll be seen by your target audience.
          From coasters at local cafes to flyer kiosks in busy complimentary
          businesses, and targeted mailers delivered directly to potential
          customers&#39; mailboxes, we ensure that your advertisements reach the
          right people at the right time. Our approach is tailored to each
          client&#39;s business, ensuring that every dollar of their valuable
          advertising budget is maximized and never wasted. With Venci, you can
          trust that your advertisements will make a significant impact and
          drive results for your business.
        </p>
        <div className="relative lg:w-1/3 h-[350px]">
          <div className="absolute bottom-0 w-[200px] left-[150px] transform rotate-[0deg]">
            <Image src={breadImg} alt="photo" />
          </div>
          <div className="absolute bottom-0 w-[200px] left-[100px]">
            <Image src={pinkcoastImg} alt="photo" />
          </div>
          <div className="absolute bottom-0 w-[200px] transform rotate-[0deg]">
            <Image src={flyerImg} alt="photo" />
          </div>
        </div>
      </div>
    </main>
  );
}
