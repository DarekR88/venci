import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import trainerImg from "../../../public/images/ptss.png";
import photoImg from "../../../public/images/photosite.png";
import gardenImg from "../../../public/images/lsss.png";

export default function Websites() {
  return (
    <main className="lg:max-w-[1200px] m-auto">
      <FadeInSection>
        <div className="flex flex-col lg:mb-[100px] mb-[50px]">
          <h1 className="font-bold text-5xl mb-[10px] px-2 lg:px-0">
            Website Management
          </h1>
          <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl px-2 lg:px-0">
            Say goodbye to large upfront investments with Venci&#39;s website design
            subscription. Our flexible pricing plans allow you to get started
            with professional website design and free SEO services without
            breaking the bank, ensuring your online presence remains up-to-date
            and competitive.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex flex-col lg:mb-[100px] mb-[50px]">
          <h1 className="font-bold text-5xl mb-[10px] px-2 lg:px-0">
            Professional Design and SEO for $19.99/month
          </h1>
          <p className="text-2xl px-2 lg:px-0">
            At Venci, we pride ourselves on offering high-end search engine
            optimized (SEO) websites at an unbeatable price. For just $19.99 a
            month, our clients can enjoy the benefits of a professionally
            designed website that ranks well on search engines, helping them
            attract more visitors and grow their online presence.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <h1 className="text-5xl mb-[10px] font-bold px-2 lg:px-0">How it Works</h1>
        <div className="flex flex-col lg:flex-row mb-[50px] lg:mb-0">
          <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl lg:w-2/3 px-2 lg:px-0">
            At Venci, we&#39;ve simplified the website design process for our
            clients. Upon signing up, you&#39;ll gain access to our team of
            experienced designers who will craft a beautifully designed website
            tailored to your brand. With security handled by our experts, your
            website is safe and protected. Our subscription model ensures
            affordability and includes one free content update each month,
            keeping your website fresh. Plus, we offer complimentary SEO
            services to optimize your website for search engines and boost your
            online visibility.
          </p>
          <div className="flex flex-col lg:gap-5 lg:w-1/3 lg:mb-[100px]">
            <div className="overflow-hidden w-full lg:h-[165px]">
              <Image src={trainerImg} alt="photo" />
            </div>
            <div className="overflow-hidden w-full lg:h-[165px]">
              <Image src={gardenImg} alt="photo" />
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <h1 className="text-5xl mb-[20px] font-bold">Our Services</h1>
        <div className="flex flex-col lg:mb-[100px] lg:flex-row gap-5 lg:gap-8">
          <div className="w-full lg:w-1/4 hover:bg-lime-400 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">Website Services</h1>
            <p className="px-2 lg:pb-2">
              At Venci, we understand the importance of a strong online presence
              for businesses. That&#39;s why we offer custom website design as a
              subscription service, providing you with a professional website
              that evolves with your business needs without the burden of a
              hefty upfront investment.
            </p>
          </div>
          <div className="w-full lg:w-1/4 hover:bg-pink-400 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">Paper Media</h1>
            <p className="px-2 lg:pb-2">
              Elevate your marketing efforts with Venci&#39;s paper advertising
              service. Our campaigns include strategically placed QR codes that
              seamlessly integrate with your print materials, driving traffic
              directly to your website and maximizing your return on investment
            </p>
          </div>
          <div className="w-full lg:w-1/4 hover:bg-amber-300 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">Social Media</h1>
            <p className="px-2 lg:pb-2">
              Stay ahead of the curve with Venci&#39;s social media management
              subscription. Our expert team will handle all aspects of your
              social media presence, ensuring consistent engagement across
              platforms and targeted outreach to your desired audience.
            </p>
          </div>
          <div className="w-full lg:w-1/4 hover:bg-cyan-400 transition-colors duration-500">
            <h1 className="text-5xl lg:ml-1 lg:mb-2">360&deg; Branding</h1>
            <p className="px-2 lg:pb-2">
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
