import Image from "next/image";
import contactImg from "../../../public/images/darkphone.jpg";
import phoneSVG from "../../../public/icons/phone-svgrepo-com.svg";
import emailSVG from "../../../public/icons/mail_icon.svg";

export default function Contact() {
  return (
    <main className="h-screen">
      <div className="flex flex-col lg:flex-row lg:gap-10 max-w-[1200px] m-auto lg:mb-[80px] mb-[50px]">
        <div className="lg:w-[750px] lg:h-[350px] overflow-hidden mb-[20px]">
          <Image src={contactImg} alt="weights" />
        </div>
        <div className="flex flex-col max-w-[400px] m-auto lg:max-w-[500px] px-[20px]">
          <h2 className="mb-4 text-5xl font-Anton text-center">
            <span className="">C</span>ONTACT
          </h2>
          <p className="text-center lg:text-left mb-[15px]">
            Book your free consultation today! At Venci, we believe in continued
            support. Call or message any time with questions or concerns.
          </p>
          <p className="text-center mb-[15px]">
            Hours of Operation: 9:00am - 9:00pm
          </p>

          <div className="flex flex-col gap-4 lg:flex-row m-auto lg:gap-10">
            <div>
              <a
                href="tel:408-761-4606"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-center"
              >
                <Image
                  src={phoneSVG}
                  alt="pfp"
                  width={23}
                  className="mr-[5px]"
                />
                <span>Call or Text</span>
              </a>
              <a
                href="tel:408-761-4606"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-center"
              >
                <span>&#40;408&#41;-761-4606</span>
              </a>
            </div>
            <div>
              <a
                href="tel:408-761-4606"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-center"
              >
                <Image
                  src={emailSVG}
                  alt="pfp"
                  width={23}
                  className="mr-[5px]"
                />
                <span>E-mail</span>
              </a>
              <a
                href="tel:408-761-4606"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-center"
              >
                <span>VenciDesign@Gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
