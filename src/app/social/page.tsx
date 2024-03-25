import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import trainerImg from "../../../public/images/ptss.png";
import photoImg from "../../../public/images/photosite.png";
import gardenImg from "../../../public/images/lsss.png";
import socialImg from "../../../public/images/social.jpg";

export default function Social() {
  return (
    <main className="lg:max-w-[1200px] m-auto px-2">
      <FadeInSection>
        <div className="flex flex-col lg:mb-[100px] mb-[50px]">
          <h1 className="font-bold text-5xl mb-[10px]">
            Social Media Management
          </h1>
          <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl">
            Unlock the full potential of social media with Venci&#39;s comprehensive
            management solutions. We blanket all major social media platforms,
            ensuring your ads reach their intended audience and drive meaningful
            engagement for your business.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <h1 className="text-5xl mb-[10px] font-bold">How it Works</h1>
        <div className="flex flex-col lg:flex-row lg:mb-[100px] mb-[50px]">
          <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl lg:w-2/3">
            At Venci, we understand the power of social media in today&#39;s digital
            landscape. Our social media management service goes beyond just
            posting content; we craft engaging posts and videos specifically
            tailored to your brand and target audience. By leveraging compelling
            visuals and strategic messaging, we boost your business&#39;s visibility
            on social media platforms, helping you connect with potential
            customers and foster meaningful engagement. With Venci, you can
            trust that your social media presence is in expert hands, driving
            growth and success for your business.
          </p>
          <div className="flex flex-col lg:gap-5 lg:w-1/3">
            <div className="overflow-hidden w-full">
              <Image src={socialImg} alt="photo" />
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <h1 className="text-5xl mb-[20px] font-bold">Our Services</h1>
        <div className="flex flex-col lg:mb-[100px] mb-[50px] lg:flex-row gap-5 lg:gap-8">
          <div className="w-full lg:w-1/4 hover:bg-lime-400 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">Website Services</h1>
            <p className="lg:px-2 lg:pb-2">
              At Venci, we understand the importance of a strong online presence
              for businesses. That&#39;s why we offer custom website design as a
              subscription service, providing you with a professional website
              that evolves with your business needs without the burden of a
              hefty upfront investment.
            </p>
          </div>
          <div className="w-full lg:w-1/4 hover:bg-pink-400 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">Paper Media</h1>
            <p className="lg:px-2 lg:pb-2">
              Elevate your marketing efforts with Venci&#39;s paper advertising
              service. Our campaigns include strategically placed QR codes that
              seamlessly integrate with your print materials, driving traffic
              directly to your website and maximizing your return on investment
            </p>
          </div>
          <div className="w-full lg:w-1/4 hover:bg-amber-300 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">Social Media</h1>
            <p className="lg:px-2 lg:pb-2">
              Stay ahead of the curve with Venci&#39;s social media management
              subscription. Our expert team will handle all aspects of your
              social media presence, ensuring consistent engagement across
              platforms and targeted outreach to your desired audience.
            </p>
          </div>
          <div className="w-full lg:w-1/4 hover:bg-cyan-400 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">360&deg; Branding</h1>
            <p className="lg:px-2 lg:pb-2">
              At Venci, we understand that branding is more than just a logo -
              it&#39;s a reflection of your business identity. Our 360&deg; branding
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
