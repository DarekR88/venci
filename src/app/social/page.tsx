import Image from "next/image";
import { Services } from "@/components/Services";
import socialImg from "../../../public/images/social.jpg";

export default function Social() {
  return (
    <main className="lg:max-w-[1200px] m-auto px-2">
      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[10px]">
          Social Media Management
        </h1>
        <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl">
          Unlock the full potential of social media with Venci&#39;s
          comprehensive management solutions. We blanket all major social media
          platforms, ensuring your ads reach their intended audience and drive
          meaningful engagement for your business.
        </p>
      </div>

      <h1 className="text-5xl mb-[10px] font-bold">How it Works</h1>
      <div className="flex flex-col lg:flex-row lg:mb-[100px] mb-[50px]">
        <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl lg:w-2/3 lg:pr-3">
          At Venci, we understand the power of social media in today&#39;s
          digital landscape. Our social media management service goes beyond
          just posting content; we craft engaging posts and videos specifically
          tailored to your brand and target audience. By leveraging compelling
          visuals and strategic messaging, we boost your business&#39;s
          visibility on social media platforms, helping you connect with
          potential customers and foster meaningful engagement. With Venci, you
          can trust that your social media presence is in expert hands, driving
          growth and success for your business.
        </p>
        <div className="flex flex-col lg:gap-5 lg:w-1/3">
          <div className="overflow-hidden w-full">
            <Image src={socialImg} alt="photo" />
          </div>
        </div>
      </div>

      <Services />
    </main>
  );
}
