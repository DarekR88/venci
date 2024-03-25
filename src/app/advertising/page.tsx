import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import trainerImg from "../../../public/images/ptss.png";
import photoImg from "../../../public/images/photosite.png";
import gardenImg from "../../../public/images/lsss.png";
import socialImg from "../../../public/images/social.jpg";
import pinkcoastImg from "../../../public/images/pinkcoaster.png";
import breadImg from "../../../public/images/breadflyer.png";
import flyerImg from "../../../public/images/blueflyer.png";

export default function Advertising() {
  return (
    <main className="lg:max-w-[1200px] m-auto">
      <FadeInSection>
        <div className="flex flex-col lg:mb-[100px]">
          <h1 className="font-bold text-5xl lg:mb-[10px]">
            Be Seen Where it Matters
          </h1>
          <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl">
            Elevate your offline marketing efforts with Venci's paper
            advertising solutions. Our campaigns utilize eye-catching print
            materials strategically distributed to target audiences, ensuring
            maximum exposure and engagement for your business.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <h1 className="text-5xl lg:mb-[10px] font-bold">How it Works</h1>
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:mb-[100px]">
          <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl lg:w-2/3">
            At Venci, we specialize in placing advertisements for your business
            in strategic locations where they'll be seen by your target
            audience. From coasters at local cafes to flyer kiosks in busy
            complimentary businesses, and targeted mailers delivered directly to
            potential customers' mailboxes, we ensure that your advertisements
            reach the right people at the right time. Our approach is tailored
            to each client's business, ensuring that every dollar of their
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
      </FadeInSection>

      <FadeInSection>
        <h1 className="text-5xl mb-[20px] font-bold">Our Services</h1>
        <div className="flex flex-col lg:mb-[100px] lg:flex-row gap-5 lg:gap-8">
          <div className="w-full lg:w-1/4 hover:bg-lime-400 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">Website Services</h1>
            <p className="lg:px-2 lg:pb-2">
              At Venci, we understand the importance of a strong online presence
              for businesses. That's why we offer custom website design as a
              subscription service, providing you with a professional website
              that evolves with your business needs without the burden of a
              hefty upfront investment.
            </p>
          </div>
          <div className="w-full lg:w-1/4 hover:bg-pink-400 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">Paper Media</h1>
            <p className="lg:px-2 lg:pb-2">
              Elevate your marketing efforts with Venci's paper advertising
              service. Our campaigns include strategically placed QR codes that
              seamlessly integrate with your print materials, driving traffic
              directly to your website and maximizing your return on investment
            </p>
          </div>
          <div className="w-full lg:w-1/4 hover:bg-amber-300 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">Social Media</h1>
            <p className="lg:px-2 lg:pb-2">
              Stay ahead of the curve with Venci's social media management
              subscription. Our expert team will handle all aspects of your
              social media presence, ensuring consistent engagement across
              platforms and targeted outreach to your desired audience.
            </p>
          </div>
          <div className="w-full lg:w-1/4 hover:bg-cyan-400 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">360&deg; Branding</h1>
            <p className="lg:px-2 lg:pb-2">
              At Venci, we understand that branding is more than just a logo -
              it's a reflection of your business identity. Our 360&deg; branding
              services encompass logo development, color scheming, and
              comprehensive brand strategy to ensure your brand stands out in a
              crowded market.
            </p>
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
