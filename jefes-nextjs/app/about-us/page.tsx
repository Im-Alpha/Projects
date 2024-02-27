/* eslint no-use-before-define: 0 */
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col relative justify-center items-center ">
      <div className="flex relative pt-40 w-full h-[400px] overflow-hidden">
        <Image
          src="/IMG_2431.jpg"
          alt="nav image"
          priority
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          className="brightness-[20%]"
        />
        <div className="flex flex-col w-full text-center xl:text-5xl xl:block text-white lg:text-2xl absolute">
          <div className="p-6 ">
            <p className="py-4">
              <span className="">About Us</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-xl font-serif antialiased ">
        <div className="flex flex-row space-y-6 text-black pt-10 pl-28 pr-32 w-full relative">
          <div className="flex flex-col container mr-20  w-full items-center relative">
            <div className=" w-[80%] h-1/2 relative rounded flex justify-center ">
              <div className="w-full h-full absolute rounded-2xl overflow-hidden mt-12">
                <Image
                  src="/kevin.webp"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  quality={100}
                  alt="Photo of Kevin mobile."
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="flex flex-row">
              <div className="flex ">
                <Image
                  src="/mexican-flag.svg"
                  alt="nav image"
                  width={40}
                  height={10}
                  quality={100}
                  className="brightness-[100%] mr-4"
                />
              </div>
              <div className="flex text-4xl font-bold">
                Jefes Mexican Cantina & Cocina
              </div>
            </div>
            <div className="text-xl max-w-[75ch] space-y-4">
              <p>
                My name is Kevin Aguilar, and I am the owner and manager of the
                Jefes Mexican Cantina and Cocina based in Broken Arrow,
                Oklahoma. Our combination of authentic Mexican dishes, excellent
                customer service, and family-friendly environment makes us one
                of the best Mexican restaurants around.
              </p>

              <p>
                Whether you are wanting to book our upstairs venue for an event,
                wanting to try out our creative alcoholic drinks or just wanting
                to enjoy a meal with a loved one, you quickly see why so many
                people choose Jefes. We take pride in our business as one of the
                highest rated Mexican restaurants in Broken Arrow.
              </p>

              <p>
                We just wanted to take a moment to express our heartfelt
                gratitude to all of our loyal customers. Your continued support
                and loyalty means the world to us, and it is because of you that
                we are able to continue doing what we love. Thank you for
                choosing our restaurant and for allowing us to serve you. We
                promise to always strive for excellence and to bring you the
                best dining experience possible. Thank you again!
              </p>
            </div>
            <div className="mx-auto flex items-center justify-center w-full pb-6">
              <Image
                src="/award.jpg"
                width={0}
                height={0}
                sizes="20vw"
                style={{ width: "20%", height: "auto" }}
                alt="Photo of award."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
