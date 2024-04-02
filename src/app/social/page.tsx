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

      <h1 className="text-5xl font-bold pb-[20px]">Plans&Pricing</h1>
      <h1 className="text-3xl">Social Media page creation and optimization</h1>
      <ul className="list-disc list-inside pl-[20px]">
        <li>$100 per page</li>
        <li>Social Media SEO (be searchable on social media)</li>
        <li>Local SEO (be seen by customers in your area)</li>
      </ul>
      <div className="flex flex-col lg:flex-row max-w-[1200px]">
        <div className="w-full lg:w-1/2">
          <h1>Basic</h1>
          <p>$199/month</p>
          <ul>
            <li>
              3 Social Media posts per week
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
