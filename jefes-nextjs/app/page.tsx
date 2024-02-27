import Link from "next/link";
import Image from "next/image";
import { EmblaCarousel } from "./carousel";
import Reserve from "./components/NavBar/reserveButton";
import MenuButton from "./menuButton";
import "./home.css";
import GoogleMap from "@/components/Maps/MapComponent";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col relative">
        <div className="flex relative w-full h-[95svh]">
          <Image
            src="/img01.webp"
            alt="nav image"
            priority
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={100}
            className="brightness-[20%] -z-90"
          />
          <div className="flex flex-col items-center justify-center text-white absolute w-full h-[95svh] gap-6">
            {/* <center classNae="bg-gray-700 w-full">0</center> */}
            <div className="flex w-full h-[24svh] relative">
              <Image
                src="/award01.png"
                alt="award image"
                priority
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                quality={100}
                className=""
              />
            </div>
            <p className="flex flex-col w-full justify-center px-[24svw] text-xl 2xl:px-[25svw] text-center py-[10px] leading-relaxed">
              Jefe&apos;s Mexican Cocina Y Cantina serves the best Mexican food in
              town. Be our guests and have an enjoyable experience with an
              authentic Mexican meal right here in Broken Arrow, OK.
            </p>
            {/* <center>0</center> */}
            <div className="flex flex-row w-full space-x-6 items-center justify-center">
              <MenuButton />
              <Reserve />
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <div className="flex md:flex-row flex-col md:h-[60svh] px-[24svw] w-full space-x-10">
          {/* Text-side */}
          <div className="flex flex-col w-full gap-6 pt-14">
            <h2 className="text-red-700 text-4xl font-bold ">
              The heart of Mexico here in Broken Arrow!
            </h2>
            <div className="text-xl">
              <p>
                Jefe&apos;s Mexican cocina y cantina is a family owned authentic
                mexican restaurant that provides a variety of different dishes
                and cocktails. We are one of the best restaurants around because
                nowhere else can you find the most extraordinary homemade
                Mexican food along with fresh and naturally flavored waters. At
                our restaurant, we guarantee that our dishes are authentic to
                the soul of Mexico.
              </p>
            </div>
          </div>
          {/* Images side  */}
          <div className="flex flex-col section__images w-full relative space-y-4 min-w-min pb-4">
            <div className="Images w-full h-1/2 relative overflow-hidden">
              <div className="relative w-full h-[130%] xl:h-[135%]">
                <Image
                  src="/IMG_2431.jpg"
                  alt="food1 image"
                  priority
                  fill
                  style={{
                    objectPosition: "center",
                    objectFit: "contain",
                  }}
                  quality={100}
                  className="inset-0"
                />
              </div>
            </div>
            <div className=" w-full relative h-1/2 flex space-x-4 pb-4">
              <div className="w-full h-full relative  ">
                <Image
                  src="/IMG_2429.JPG"
                  alt="food2 image"
                  priority
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  quality={100}
                  className=""
                />
              </div>
              <div className="flex w-full h-full relative ">
                <Image
                  src="/food02.webp"
                  alt="food3 image"
                  priority
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  quality={100}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex w-full h-[40svh] relative">
          <div className="relative w-full">
            <Image
              src="/navheader.png"
              alt="food3 image"
              priority
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              quality={100}
              className="brightness-[25%] -z-90"
            />
            <div className="absolute text-white w-full h-[40svh] text-center top-20 text-2xl font-semibold font-mono overflow-hidden">
              <h2 className="">Authentic Mexican Cousine</h2>
            </div>
            <div className="absolute text-white  w-full h-[40svh] text-center top-28 text-2xl italic font-mono overflow-hidden">
              <h2 className=" font-sans">Freshly Cooked</h2>
            </div>
            <div className="absolute text-white  w-full h-[40svh] text-center top-40 text-2xl overflow-hidden">
              <div className="flex items-center justify-center">
                <div className="left-[30%] top-4 w-[150px] h-0.5 bg-white"></div>
                <div className="relative w-[100px] h-10">
                  <Image
                    src="/logo.svg"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    quality={100}
                    alt="Logo"
                    className=""
                  />
                </div>
                <div className="w-[150px] right-[30%] top-4 text-center h-0.5 bg-white my-[10px]"></div>
              </div>
            </div>
            <div className="absolute text-white left-[39svw] w-[24svw] h-[40svh] text-left top-52 text-xs md:text-base lg:text-lg xl:text-xl font-bold font-mono overflow-hidden">
              <p>
                We pride ourselves with bringing the best experience to our
                customers, always delivering a freshly made meal any time of the
                day!
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex md:flex-row flex-col md:h-[40svh] h-[80svh] md:gap-y-0 gap-y-4 px-[24svw] space-x-6 py-10">
          {/* Text-side */}
          <div className=" flex flex-col leading-relaxed gap-y-6 relative w-full text-center items-center justify-center md:text-start md:items-start xl:items-end md:justify-start pr-6">
            <h2 className="text-red-700 text-4xl font-bold xl:pr-10 pr-0">
              The Best Drinks in Oklahoma!
            </h2>
            <div className="w-[70%] md:w-[28svw]">
              <p className="lg:text-xl text-base lg:font-normal font-semibold">
                Jefe&apos;s is known for our amazing bar counter and attentive
                customer service. We want each and every one of our customers to
                have a great time no matter the occasion. Because of our great
                selection of alcoholic drinks, we know you’ll be more than happy
                with our beverages.
              </p>
            </div>
          </div>
          {/* Images side  */}
          <div className="flex  w-full relative">
            <div className="Images w-full relative md:h-[90%] h-[40svh]">
              <Image
                src="/1577mobile.webp"
                alt="food1 image"
                priority
                fill
                style={{
                  objectPosition: "center",
                  objectFit: "contain",
                }}
                quality={100}
                className=""
              />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex md:flex-row flex-col md:h-[40svh] h-[80svh] md:gap-y-0 gap-y-4 px-[24svw] space-x-6 py-4">
          {/* Images side desktop */}
          <div className="w-full hidden md:flex relative ">
            <div className="Images w-[80%] relative md:h-[80%] h-[40svh]">
              <Image
                src="/img05.webp"
                alt="food1 image"
                priority
                fill
                style={{
                  objectPosition: "center",
                  objectFit: "contain",
                }}
                quality={100}
                className=""
              />
            </div>
          </div>
          {/* Text-side d*/}
          <div className="flex flex-col  leading-relaxed gap-y-6 relative md:w-1/2 w-full text-center items-center justify-center md:text-start md:items-start md:justify-start">
            <div>
              <h2 className="text-red-700 text-4xl font-bold ">
                Authentic Cuisine from Mexico
              </h2>
            </div>
            <div className="w-[70%] md:w-[29svw]">
              <p className="lg:text-xl text-base lg:font-normal font-semibold">
                Jefe&apos;s is known for our amazing bar counter and attentive
                customer service. We want each and every one of our customers to
                have a great time no matter the occasion. Because of our great
                selection of alcoholic drinks, we know you&apos;ll be more than happy
                with our beverages.
              </p>
            </div>
          </div>
          {/* Images side mobile */}
          <div className="flex w-full md:hidden">
            <div className="Images w-full relative h-[40svh] ">
              <Image
                src="/img05.webp"
                alt="food1 image"
                priority
                fill
                style={{
                  objectPosition: "center",
                  objectFit: "contain",
                }}
                quality={100}
                className=""
              />
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="flex md:flex-row flex-col md:h-[40svh] h-[80svh] md:gap-y-0 gap-y-4 px-[22svw] py-4">
          {/* Text-side */}
          <div className="flex flex-col leading-relaxed gap-y-6 relative w-full text-center items-center justify-center md:text-start md:items-start xl:items-end md:justify-start">
            <h2 className="text-red-700 text-4xl font-bold xl:pr-10 pr-0">
              Unbeatable Customer Service
            </h2>
            <div className="w-[70%] md:w-[28svw]">
              <p className="lg:text-xl text-base lg:font-normal font-semibold">
                We have a fantastic selection of Mexican food. We want customers
                to have the time of their life and that is why we pair our
                amazing menu with excellent service for a combination that is
                sure to satisfy. Whether you’re here for a special occasion or
                you’re just hungry, we aim to deliver the best service every
                time.
              </p>
            </div>
          </div>
          {/* Images side  */}
          <div className="flex  w-full relative ">
            <div className="Images w-full relative md:h-[90%] h-[40svh]">
              <Image
                src="/party01.jpg"
                alt="food1 image"
                priority
                fill
                style={{
                  objectPosition: "center",
                  objectFit: "contain",
                }}
                quality={100}
                className="pl-10"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[80svh] bg-blue-300">
          {/* <GoogleReviews /> */}
          <GoogleMap />
          <div className="flex flex-col">Come Visit Us! We're located right off the 51!</div>
        </div>
        {/* <div className="flex flex-col w-full h-[180vh]">
          <EmblaCarousel />
        </div> */}
      </div>
    </main>
  );
}
