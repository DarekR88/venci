import Image from "next/image";
import Link from "next/link";
import trainerImg from "../../../public/images/ptss.png";
import photoImg from "../../../public/images/photosite.png";
import gardenImg from "../../../public/images/lsss.png";
import restaurantImg from "../../../public/images/restaurantss.png";
import landscapeImg from "../../../public/images/growgreen.png";
import constructionImg from "../../../public/images/constructionss.png";
import toolIcon from "../../../public/icons/tool-svgrepo-com.svg";
import SEOIcon from "../../../public/icons/seo-svgrepo-com.svg";
import pyramidIcon from "../../../public/icons/pyramidA rotated.svg";
import shieldIcon from "../../../public/icons/shield-alt-svgrepo-com.svg";
import mobileIcon from "../../../public/icons/mobile-svgrepo-com.svg";
import diamondIcon from "../../../public/icons/diamondA.svg";
import toolsIcon from "../../../public/icons/tools-alt-svgrepo-com.svg";
import checkIcon from "../../../public/icons/check-box-svgrepo-com.svg";

export default function Websites() {
  return (
    <main className="lg:max-w-[1200px] m-auto pt-[120px] lg:pt-[162px] px-4">
      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[15px] px-2 lg:px-0">
          Website Management
        </h1>
        <p className="lg:max-w-[850px] mb-[75px] lg:mb-[100px] lg:pl-[10px] lg:text-2xl px-2 lg:px-0">
          Say goodbye to large upfront investments with Venci&#39;s website
          design subscription. Venci aims to make high-end website design,
          hosting, and management accessible to any type of small business.
        </p>
        <div className="flex flex-col mb-[50px] lg:flex-row gap-24 lg:gap-20 lg:gap-7 w-full m-auto">
          <div className="w-full lg:w-1/4 shadow-xl rounded-md border-2 border-cOne">
            <div className="flex flex-row justify-center mt-[-40px]">
              <Image src={SEOIcon} alt="tool" width={50} className="bg-white" />
            </div>
            <h1 className="text-3xl font-bold pb-[20px] w-[200px] text-center m-auto pt-[20px] bg-white pr-[10px]">
              Free SEO
            </h1>
            <p className="px-5 pb-[20px]">
              With Google being the top platform for discovering new businesses,
              our FREE SEO (Search Engine Optimization) services guarantee your
              presence in relevant searches, maximizing your visibility and
              attracting potential customers.
            </p>
          </div>
          <div className="w-full lg:w-1/4 shadow-xl rounded-md border-2 border-cThree">
            <div className="flex flex-row justify-center mt-[-30px]">
              <Image
                src={pyramidIcon}
                alt="tool"
                width={40}
                className="bg-white"
              />
            </div>
            <h1 className="text-3xl font-bold pb-[20px] pt-[20px] w-[200] text-center">
              $0 Down
            </h1>
            <p className="px-5 pb-[20px]">
              Standing out online is key to staying ahead of the competition.
              With our affordable plan of $0 down and just $19.99 a month,
              you&#39;ll get a uniquely designed website that sets your company
              apart from the crowd, ensuring visibility and making a lasting
              impression.
            </p>
          </div>
          <div className="w-full lg:w-1/4 shadow-xl rounded-md border-2 border-cFive">
            <div className="flex flex-row justify-center mt-[-40px]">
              <Image
                src={shieldIcon}
                alt="tool"
                width={50}
                className="bg-white"
              />
            </div>
            <h1 className="text-3xl font-bold text-center m-auto bg-white w-[150px]">
              Hosting &Security
            </h1>
            <p className="px-5 pt-[10px] pb-[20px]">
              Our comprehensive hosting and security services streamline website
              management. For just $19.99 a month, we handle maintenance,
              monitoring, and analytics, ensuring your site remains secure,
              accessible, and optimized for performance at all times.
            </p>
          </div>
          <div className="w-full lg:w-1/4 shadow-xl rounded-md border-2 border-cSeven">
            <div className="flex flex-row justify-center mt-[-40px]">
              <Image
                src={mobileIcon}
                alt="tool"
                width={50}
                className="bg-white"
              />
            </div>
            <h1 className="text-3xl font-bold bg-white text-center m-auto w-[180px]">
              Mobile Responsive
            </h1>
            <p className="px-5 pt-[10px] pb-[20px]">
              With over 60&#37; of internet traffic originating from mobile
              devices, it&#39;s crucial that your website is optimized for
              mobile viewing. Our experts specialize in mobile responsiveness,
              guaranteeing that your site will look exceptional on any device,
              ensuring a seamless experience for your visitors.
            </p>
          </div>
        </div>
        <Link
          href={"/contact"}
          className="flex w-fit text-l lg:text-xl font-Montserrat shadow-xl text-center m-auto p-[10px] bg-white border-2 border-cSeven rounded-full lg:mt-[30px] hover:bg-cSeven hover:border-transparent hover:shadow-none hover:scale-105 transition-all duration-300"
        >
          Book a Free Consultation Today
        </Link>
      </div>

      <h1 className="text-5xl font-bold mb-[30px]">Plans&Pricing</h1>
      <div className="flex lg:hidden mb-[70px]">
        <div className="flex flex-col lg:flex-row gap-20 lg:h-[290px] lg:gap-20 w-full m-auto">
          <div className="w-full lg:w-1/3 rounded-md mt-[30px] shadow-lg border-2 border-cOne">
            <div className="flex flex-row justify-center mt-[-20px] mb-[20px]">
              <h1 className="text-3xl font-bold bg-white">Basic</h1>
              <Image
                src={pyramidIcon}
                alt="tool"
                width={50}
                className="bg-white mt-[-10px]"
              />
            </div>
            <div className="flex flex-col text-xl mb-[20px] font-bold w-fit m-auto">
              <p className="mb-[7px]">$0 Down | $19.99/mo</p>
              <ul className="list-inside list-disc">
                <li>3 pages</li>
                <li>SEO</li>
                <li>Website Hosting</li>
                <li>Stock Photos</li>
              </ul>
            </div>

            <Link
              href={"/contact"}
              className="flex w-fit mb-[-20px] hover:bg-cFive hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg text-center text-l m-auto p-[10px] bg-white shadow-lg border-2 border-cFive rounded-full"
            >
              Book a Free Consultation Today
            </Link>
          </div>
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cThree">
            <div className="flex flex-row justify-center mt-[-20px]">
              <h1 className="text-3xl font-bold bg-white">Premium</h1>
              <Image
                src={diamondIcon}
                alt="tool"
                width={60}
                className="bg-white mt-[-15px]"
              />
            </div>
            <div className="flex flex-col text-xl mb-[20px] font-bold w-fit m-auto">
              <p>Starts at:</p>
              <p className="mb-[7px]">$300 Down | $19.99/mo</p>
              <ul className="list-inside list-disc">
                <li>7 pages</li>
                <li>SEO</li>
                <li>Website Hosting</li>
                <li>Professional Photos</li>
                <li>Premium Features</li>
              </ul>
            </div>
            <Link
              href={"/googlebusiness"}
              className="flex w-fit mb-[-20px] hover:bg-cTwo hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg text-center text-xl m-auto p-[10px] bg-white shadow-lg border-2 border-cTwo rounded-full"
            >
              Book Free Consultation
            </Link>
          </div>
          <div className="w-full lg:w-1/3 rounded-md shadow-lg border-2 border-cFive">
            <div className="flex flex-row justify-center mt-[-20px]">
              <h1 className="text-3xl font-bold bg-white">Custom</h1>
              <Image
                src={toolsIcon}
                alt="tool"
                width={70}
                className="bg-white mt-[-20px]"
              />
            </div>
            <div className="flex flex-col text-xl mb-[20px] font-bold w-fit m-auto">
              <p>Starts at:</p>
              <p className="mb-[7px]">$1500 Down | $49.99/mo</p>
              <ul className="list-inside list-disc">
                <li>12 pages</li>
                <li>SEO</li>
                <li>Website Hosting</li>
                <li>Professional Photos</li>
                <li>Premium Features</li>
                <li>User Login</li>
                <li>Payment/Subscriptions</li>
                <li>Appointment Scheduling</li>
              </ul>
            </div>
            <Link
              href={"/contact"}
              className="flex w-fit mb-[-20px] hover:bg-cThree hover:border-transparent hover:scale-105 transition-all duration-300 font-Montserrat shadow-lg text-center text-xl m-auto p-[10px] bg-white shadow-lg border-2 border-cThree rounded-full"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex mb-[50px] lg:mb-[70px] border-2 border-cFive rounded-md shadow-xl">
        <div className="hidden text-2xl lg:flex flex-col w-full">
          <div className="flex flex-row h-[100px]">
            <div className="flex flex-col items-center justify-center gap-2 w-1/4 border-b-2 border-cFive bg-cFive">
              <h1 className="text-3xl font-bold p-[10px]">
                Features&#8595;
              </h1>
            </div>
            <div className="w-1/4 flex justify-center items-center flex-col border-b-2 border-l-2 border-cFive p-[10px] bg-cSeven">
              <h1 className="flex flex-row text-3xl font-bold mb-[5px]">
                Basic{" "}
                <span className="ml-[10px] mt-[3px]">
                  <Image src={pyramidIcon} height={30} alt="pyramid" />
                </span>
              </h1>
            </div>
            <div className="w-1/4 flex justify-center items-center flex-col border-b-2 border-l-2 border-cFive p-[10px] bg-cFour">
              <h1 className="flex flex-row text-3xl font-bold mb-[5px]">
                Premium{" "}
                <span className="ml-[10px] mt-[0px]">
                  <Image src={diamondIcon} height={40} alt="pyramid" />
                </span>
              </h1>
            </div>
            <div className="w-1/4 flex justify-center items-center flex-col border-b-2 border-l-2 border-cFive p-[10px] bg-cTwo">
              <h1 className="flex flex-row text-3xl font-bold mb-[5px]">
                Custom{" "}
                <span className="ml-[10px] mt-[0px]">
                  <Image src={toolsIcon} height={40} alt="pyramid" />
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-row  bg-gray-100">
            <div className="w-1/4 flex items-center p-[10px] h-full">
              <p>Monthly Payment</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>$19.99</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>Starts at: $19.99</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>Starts at: $49.99</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4 flex items-center p-[10px] h-full">
              <p>Down Payment</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>$0</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>Starts at: $300</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>Starts at: $1500</p>
            </div>
          </div>
          <div className="flex flex-row bg-gray-100">
            <div className="w-1/4 flex items-center p-[10px] h-full">
              <p>Number of Pages</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>3</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>up to 7</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>up to 12</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-1/4 p-[10px]">
              <p>SEO (Search Engine Optimization)</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
          </div>
          <div className="flex flex-row items-center bg-gray-100">
            <div className="w-1/4 p-[10px]">
              <p>Website Hosting</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4 p-[10px] flex items-center h-full">
              <p>Photos and Graphics</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>Stock/Provided</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>Professional/Provided</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>Professional/Provided</p>
            </div>
          </div>
          <div className="flex flex-row items-center bg-gray-100">
            <div className="w-1/4 p-[10px]">
              <p>Premium Website Design Features</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center">
              <p className="text-red-500 text-2xl font-bold m-auto">X</p>{" "}
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4 p-[10px] flex items-center h-full">
              <p>User Login</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive flex items-center p-[10px]">
              <p className="text-red-500 text-2xl font-bold m-auto">X</p>{" "}
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <p>Add on</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive p-[10px] flex items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
          </div>
          <div className="flex flex-row items-center bg-gray-100">
            <div className="w-1/4 p-[10px]">
              <p>Online Payments/ Subscriptions</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center">
              <p className="text-red-500 text-2xl font-bold m-auto">X</p>{" "}
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center flex items-center justify-center">
              <p>Add on</p>
            </div>
            <div className="w-1/4 border-l-2 border-cFive h-full flex items-center flex items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-1/4 p-[10px] flex items-center">
              <p>Appointment Scheduling</p>
            </div>
            <div className="flex w-1/4 border-l-2 border-cFive p-[10px] h-full items-center">
              <p className="text-red-500 text-2xl font-bold m-auto">X</p>{" "}
            </div>
            <div className="flex w-1/4 border-l-2 border-cFive p-[10px] h-full items-center justify-center">
              <p>Add on</p>
            </div>
            <div className="flex w-1/4 border-l-2 border-cFive p-[10px] h-full items-center justify-center">
              <Image src={checkIcon} alt="x" height={30} width={30} />
            </div>
          </div>
        </div>
      </div>
      <Link
        href={"/contact"}
        className="hidden lg:flex w-fit font-Montserrat shadow-xl text-center text-xl m-auto p-[10px] bg-white border-2 border-cOne rounded-full mb-[100px] hover:bg-cOne hover:border-transparent hover:shadow-none hover:scale-105 transition-all duration-300"
      >
        Book a Free Consultation Today
      </Link>

      <h1 className="text-5xl mb-[20px] font-bold px-2 lg:px-0">
        Demo Gallery
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 lg:h-[165px] mb-[20px] lg:mb-[20px] mb-[0px]">
        <div className="relative flex items-center overflow-hidden border-2 border-cThree w-full lg:w-1/3 bg-cOne rounded-md shadow-xl">
          <h1 className="absolute z-20 text-3xl ml-[20px]">Sophisticated</h1>
          <a
            href="https://photographernext.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={photoImg} alt="photo" />
          </a>
        </div>
        <div className="relative flex items-center overflow-hidden border-2 border-cThree w-full lg:w-1/3 bg-cThree rounded-md shadow-xl">
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
        <div className="relative flex items-center overflow-hidden border-2 border-cThree w-full lg:w-1/3 bg-cFive rounded-md shadow-xl">
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
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 lg:h-[165px] lg:mb-[100px] mb-[50px]">
        <div className="relative flex items-center overflow-hidden border-2 border-cThree w-full lg:w-1/3 bg-cFive rounded-md shadow-xl">
          <h1 className="absolute z-20 text-3xl ml-[20px]">Informative</h1>
          <a
            href="https://photographernext.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={landscapeImg} alt="photo" />
          </a>
        </div>
        <div className="relative flex items-center overflow-hidden border-2 border-cThree w-full lg:w-1/3 bg-cFour rounded-md shadow-xl">
          <h1 className="absolute z-20 font-bold text-3xl ml-[20px]">
            Professional
          </h1>
          <a
            href="https://nextpt.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={constructionImg} alt="photo" />
          </a>
        </div>
        <div className="relative flex items-center overflow-hidden border-2 border-cThree w-full lg:w-1/3 bg-cTwo rounded-md shadow-xl">
          <h1 className="absolute z-20 text-3xl ml-[20px]">Elegant</h1>
          <a
            href="https://nextlandscaping.vercel.app/"
            target="_blank"
            className="relative z-50 hover:opacity-0 transition-opacity duration-300"
          >
            <Image src={restaurantImg} alt="photo" />
          </a>
        </div>
      </div>
    </main>
  );
}
