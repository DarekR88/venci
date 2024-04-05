import Image from "next/image";
import gbusinessImg from "../../../public/images/googScreenshot.png";
import businesspImg from "../../../public/images/businessScreenshot.png";

export default function GoogleBusiness() {
  return (
    <main className="lg:max-w-[1200px] m-auto px-2 lg:pt-[162px]">
      <div className="flex flex-col lg:mb-[100px] mb-[50px]">
        <h1 className="font-bold text-5xl mb-[10px] px-2 lg:px-0">
          Google Business Management
        </h1>
        <p className="lg:max-w-[850px] lg:pl-[10px] mb-[20px] lg:text-2xl px-2 lg:px-0">
          Increase your visibility on Google with our Business Management
          service. We ensure your business appears prominently in Google
          searches and can even manage reviews for you. Our goal is to make your
          business stand out positively in the Google Business section.
        </p>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="overflow-hidden w-full lg:w-1/3 h-[210px] rounded-md">
            <Image src={gbusinessImg} alt="Google business" />
          </div>
          <div className="overflow-hidden w-full lg:w-1/3 h-[210px] rounded-md">
            <Image src={businesspImg} alt="Google business" />
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold mb-[20px]">Plans&Pricing</h1>
      <div className="mb-[50px]">
        <h1 className="text-3xl font-bold mb-[20px]">Setup</h1>
        <p className="text-xl mb-[20px] w-full lg:w-2/3">
          Optimize your online presence with Venci&#39;s Google Business Setup
          service. We ensure your Google Business account is set up
          professionally for maximum exposure and positive representation.
        </p>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:w-1/2">
            <h1 className="text-2xl mb-[10px] font-bold">Basic</h1>
            <p className="text-2xl mb-[20px]">$75</p>
            <ul className="list-disc list-inside text-xl">
              <li>Optimized Setup</li>
              <li>Stock Photos</li>
              <li>SEO Copy</li>
            </ul>
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <h1 className="text-2xl mb-[10px] font-bold">Premium</h1>
            <p className="text-2xl mb-[20px]">Starts at: $400</p>
            <ul className="list-disc list-inside text-xl">
              <li>Optimized Setup</li>
              <li>Professional Photos</li>
              <li>Professional Graphics</li>
              <li>SEO Copy</li>
            </ul>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-[20px]">Management</h1>
      <p className="text-xl w-full mb-[20px] lg:w-2/3">
        Ensure your business always looks it&#39;s best with Venci&#39;s Google Business
        Management service. Google is the &#35;1 place your business will be seen,
        allow our talented Google Business experts to curate and manage your
        business&#39;s best possible image.
      </p>
      <div className="flex flex-col lg:flex-row mb-[50px] lg:mb-[100px]">
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl mb-[10px] font-bold">Basic</h1>
          <p className="text-2xl mb-[10px]">$19.99/month</p>
          <ul className="list-disc list-inside text-xl">
            <li>Review Management</li>
            <li>Analytics Reporting</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl mb-[10px] font-bold">Premium</h1>
          <p className="text-2xl mb-[10px]">$199/month</p>
          <ul className="list-disc list-inside text-xl">
            <li>Premium Review Management</li>
            <li>Analytics Reporting</li>
            <li>1 Professional Content Update/month</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
