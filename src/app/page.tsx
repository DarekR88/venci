import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <main className="lg:max-w-[1200px] m-auto">
      <FadeInSection>
        <div className="flex flex-col lg:mb-[100px]">
          <h1 className="font-bold text-7xl lg:mb-[10px]">Get More Business Now</h1>
          <p className="lg:max-w-[850px] lg:pl-[10px] lg:text-2xl">
            Welcome to Venci, where we specialize in empowering small to medium
            businesses with comprehensive marketing solutions tailored to their
            needs. From custom websites to targeted advertising campaigns,
            social media management, and 360-degree branding services, we're
            here to help you elevate your online presence and reach your target
            audience effectively.
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
          <h1 className="text-7xl">Our Work</h1>
        <div className="flex">
        </div>
      </FadeInSection>
    </main>
  );
}
