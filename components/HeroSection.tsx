import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="bg-gray-50">
      <div className="lg:flex max-w-screen-xl px-4 py-8 mx-auto justify-evenly items-center w-full">
        <div className="flex flex-col justify-start lg:justify-center max-lg:items-center mr-auto place-self-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-medium font-spotify tracking-tight leading-none md:text-4xl xl:text-5xl text-gray-800 max-lg:text-center">
            <span className="text-[#ECB176] font-spotify">Sultana </span>{" "}
            Élegance Intemporelle
            <span className="block">
              Mode
              <span className="text-[#ECB176]"> Chic.</span>
            </span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl max-lg:text-center">
            Découvrez l&apos;élégance intemporelle chez Sultana. Sublimez votre
            style avec des choix de mode chics qui définissent la sophistication
            <span>&#x1F497;</span>
          </p>
          <a
            href="#"
            className="w-1/4 bg-[#ECB176] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-800 border border-[#ECB176] rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
            Acheter
          </a>
        </div>
        <div className="flex-col lg:mt-0 lg:col-span-5 lg:flex p-2 m-4">
          <div className="flex justify-center">
            <Image
              className="mt-24 rounded-2xl object-contain m-2"
              src="/heroImage2.png"
              alt="mockup"
              width={200}
              height={291}
              style={{ maxWidth: 200, maxHeight: 291, width: "auto" }}
            />

            <Image
              className="mb-24 rounded-2xl  object-contain"
              src="/heroImage1.png"
              alt="mockup"
              width={200}
              height={291}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
