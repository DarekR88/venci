import Image from "next/image";
import Link from "next/link";
import { Services } from "@/components/Services";
import pinkcoastImg from "../../../public/images/pinkcoaster.png";
import breadImg from "../../../public/images/breadflyer.png";
import doughnutImg from "../../../public/images/doughnutFlyer.png";
import nailImg from "../../../public/images/nailFlyer.png";
import hairImg from "../../../public/images/hairFlyer.png";
import flyerImg from "../../../public/images/blueflyer.png";
import shareIcon from "../../../public/icons/share-svgrepo-com.svg";
import pyramidIcon from "../../../public/icons/pyramidA rotated.svg";
import paperIcon from "../../../public/icons/paper-plane-svgrepo-com.svg";

export default function Advertising() {
  return (
    <main className="lg:max-w-[1200px] pt-[120px] lg:pt-[162px] m-auto px-5">
      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[10px]">Build Your Brand</h1>
        <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl">
          Venci&#39;s advertising design services provide affordable solutions
          for your business. Our experts are here to present designs and
          campaigns that can help take your business to the next level.
        </p>
      </div>

      <div className="flex flex-col lg:mb-[100px] mb-[100px]">
        <h1 className="font-bold text-5xl pb-[50px] mb-[20px] px-2 lg:px-0">
          Advertising Services
        </h1>

        <div className="flex flex-col lg:flex-row gap-28 lg:h-[350px] lg:gap-20 w-full m-auto">
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cOne">
            <div className="flex flex-row justify-center mt-[-40px]">

              <Image
                src={pyramidIcon}
                alt="tool"
                width={50}
                className="bg-white"
              />
            </div>
            <h1 className="text-3xl font-bold bg-white w-[190px] text-center m-auto pt-[10px]">
                Advertising Design
              </h1>
            <p className="px-5 pt-[10px] pb-[20px] h-[225px]">
              When it comes to advertisements for your business, Venci
              understands how important it is to look good. Our experts pull
              from the most successful advertising designs to present you with
              top notch advertisements. Hone your brand identity.
            </p>

            <Link
              href={"/contact"}
              className="flex w-fit mb-[-25px] hover:bg-cFive hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cFive rounded-md"
            >
              Free Consultation
            </Link>
          </div>
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cThree">
            <div className="flex flex-row justify-center mt-[-50px]">

              <Image
                src={shareIcon}
                alt="tool"
                width={60}
                className="bg-white"
              />
            </div>
            <h1 className="text-3xl font-bold bg-white w-[100px] text-center m-auto pt-[10px]">
                Social Media
              </h1>
            <p className="px-5 pb-[20px] pt-[10px] h-[225px]">
              Social Media can be an extremely powerful tool for your business.
              At Venci we specialize in the creation of unique content aimed at
              generating buzz around your business. Allow our experts to craft
              videos and graphics that will make your business look good.
            </p>
            <Link
              href={"/contact"}
              className="flex w-fit mb-[-25px] hover:bg-cTwo hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cTwo rounded-md"
            >
              Free Consultation
            </Link>
          </div>
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cFive">
            <div className="flex flex-row justify-center mt-[-40px]">
 
              <Image
                src={paperIcon}
                alt="tool"
                width={70}
                className="bg-white mt-[-20px]"
              />
            </div>
            <h1 className="text-3xl font-bold bg-white text-center m-auto w-[190px] pt-[10px]">
                Advertising Strategy
              </h1>
            <p className="px-5 pt-[10px] pb-[20px] h-[225px]">
              Advertising campaigns can be expensive and complicated. At Venci,
              we simplify the process. Tell us where you are struggling and that
              is where we will focus our efforts. From design to distribution,
              Venci has got your back.
            </p>
            <Link
              href={"/contact"}
              className="flex w-fit mb-[-25px] hover:bg-cThree hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg text-center text-3xl m-auto p-[10px] bg-white shadow-lg border-2 border-cThree rounded-md"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-5xl mb-[10px] font-bold">How it Works</h1>
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:mb-[100px] mb-[50px]">
        <p className="lg:max-w-[850px] lg:pl-[10px] mb-[20px] lg:text-2xl lg:w-1/2 lg:pr-3">
          At Venci, we specialize in placing advertisements for your business in
          strategic locations where they&#39;ll be seen by your target audience.
          Whether it&#39;s targeted mailers delivered directly to potential
          customers&#39; mailboxes or flyer kiosks in busy complimentary businesses,
          we ensure your ads reach the right people at the right time.
        </p>
        <div className="flex flex-row gap-5 lg:w-1/2 h-[350px]">
          <div className="w-[200px] left-[200px] transform rotate-[0deg]">
            <Image src={doughnutImg} alt="photo" />
          </div>
          <div className="w-[200px] left-[100px]">
            <Image src={hairImg} alt="photo" />
          </div>
          <div className="w-[200px] transform rotate-[0deg]">
            <Image src={nailImg} alt="photo" />
          </div>
        </div>
      </div>
    </main>
  );
}
