"use client";

import Link from "next/link";

export function Services() {
  return (
    <main>
      <h1 className="text-5xl mb-[20px] font-bold px-2 lg:px-0">
        Our Services
      </h1>
      <div className="flex flex-col lg:mb-[100px] lg:flex-row gap-5 lg:gap-8">
        <div className="w-full lg:w-1/4 hover:bg-lime-400 transition-colors duration-500">
          <Link href={"/websites"}>
            <h1 className="text-5xl lg:ml-1 lg:mb-2 px-2 lg:px-0">
              Website Services
            </h1>
            <p className="lg:px-2 lg:pb-2 px-2 lg:px-0">
              At Venci, we understand the importance of a strong online presence
              for businesses. That&#39;s why we offer custom website design as a
              subscription service, providing you with a professional website
              that evolves with your business needs without the burden of a
              hefty upfront investment.
            </p>
          </Link>
        </div>
        <div className="w-full lg:w-1/4 hover:bg-pink-400 transition-colors duration-500">
          <h1 className="text-5xl lg:ml-1 lg:mb-2 px-2 lg:px-0">Paper Media</h1>
          <p className="lg:px-2 lg:pb-2 px-2 lg:px-0">
            Elevate your marketing efforts with Venci&#39;s paper advertising
            service. Our campaigns include strategically placed QR codes that
            seamlessly integrate with your print materials, driving traffic
            directly to your website and maximizing your return on investment
          </p>
        </div>
        <div className="w-full lg:w-1/4 hover:bg-amber-300 transition-colors duration-500">
          <h1 className="text-5xl lg:ml-1 lg:mb-2 px-2 lg:px-0">
            Social Media
          </h1>
          <p className="lg:px-2 lg:pb-2 px-2 lg:px-0">
            Stay ahead of the curve with Venci&#39;s social media management
            subscription. Our expert team will handle all aspects of your social
            media presence, ensuring consistent engagement across platforms and
            targeted outreach to your desired audience.
          </p>
        </div>
        <div className="w-full lg:w-1/4 hover:bg-cyan-400 transition-colors duration-500">
          <h1 className="text-5xl lg:ml-1 lg:mb-2 px-2 lg:px-0">
            360&deg; Branding
          </h1>
          <p className="lg:px-2 lg:pb-2 px-2 lg:px-0">
            At Venci, we understand that branding is more than just a logo -
            it&#39;s a reflection of your business identity. Our 360&deg;
            branding services encompass logo development, color scheming, and
            comprehensive brand strategy to ensure your brand stands out in a
            crowded market.
          </p>
        </div>
      </div>
    </main>
  );
}
