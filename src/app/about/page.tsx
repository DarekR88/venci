import Image from "next/image";
import { Services } from "@/components/Services";
import chartsImg from "../../../public/images/charts.jpg";

export default function Social() {
  return (
    <main className="lg:max-w-[1200px] m-auto px-5 lg:pt-[162px] pt-[50px]">
      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[10px]">About</h1>
        <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl">
          At Venci, we are driven by a passion for empowering individuals and
          businesses to thrive in the digital world. Our journey began with a
          simple yet ambitious goal: to create a platform where small businesses
          can access high-end website design services crafted by professionals
          with SEO expertise. We believe that every business, regardless of
          size, deserves a strong online presence to succeed in today&#39;s
          competitive landscape. With this vision in mind, we set out to
          revolutionize the way websites are designed and optimized, making
          professional-grade digital solutions accessible and affordable for
          all.
        </p>
      </div>

      <h1 className="text-5xl mb-[10px] font-bold">Our Process</h1>
      <div className="flex flex-col lg:flex-row lg:mb-[100px] mb-[50px]">
        <p className="lg:max-w-[850px] lg:pl-[10px] lg:pr-[50px] mb-[20px] lg:text-2xl lg:w-2/3">
          At Venci, we go beyond traditional marketing methods to deliver
          tangible results for our clients. Leveraging the most advanced
          marketing algorithms and cutting-edge analytical tools, we employ a
          data-driven approach to drive targeted traffic and generate new
          customers for your business. Our team of experts utilizes
          sophisticated techniques to optimize marketing campaigns, analyze user
          behavior, and identify opportunities for growth. By harnessing the
          power of technology and innovation, we continuously refine our
          strategies to ensure maximum effectiveness and deliver unparalleled
          value to our clients.
        </p>
        <div className="flex flex-col lg:gap-5 lg:w-1/3">
          <div className="overflow-hidden w-full rounded-md border-2 border-cFour">
            <Image src={chartsImg} alt="photo" />
          </div>
        </div>
      </div>
      
    </main>
  );
}
