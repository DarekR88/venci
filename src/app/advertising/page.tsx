import Image from "next/image";
import { Services } from "@/components/Services";
import pinkcoastImg from "../../../public/images/pinkcoaster.png";
import breadImg from "../../../public/images/breadflyer.png";
import flyerImg from "../../../public/images/blueflyer.png";

export default function Advertising() {
  return (
    <main className="lg:max-w-[1200px] m-auto px-2">
      
        <div className="flex flex-col lg:mb-[100px] mb-[50px]">
          <h1 className="font-bold text-5xl mb-[10px]">
            Be Seen Where it Matters
          </h1>
          <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl">
            Elevate your offline marketing efforts with Venci&#39;s paper
            advertising solutions. Our campaigns utilize eye-catching print
            materials strategically distributed to target audiences, ensuring
            maximum exposure and engagement for your business.
          </p>
        </div>
      

      
        <h1 className="text-5xl mb-[10px] font-bold">How it Works</h1>
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:mb-[100px] mb-[50px]">
          <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl lg:w-2/3 lg:pr-3">
            At Venci, we specialize in placing advertisements for your business
            in strategic locations where they&#39;ll be seen by your target
            audience. From coasters at local cafes to flyer kiosks in busy
            complimentary businesses, and targeted mailers delivered directly to
            potential customers&#39; mailboxes, we ensure that your advertisements
            reach the right people at the right time. Our approach is tailored
            to each client&#39;s business, ensuring that every dollar of their
            valuable advertising budget is maximized and never wasted. With
            Venci, you can trust that your advertisements will make a
            significant impact and drive results for your business.
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
