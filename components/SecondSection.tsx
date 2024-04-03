import Image from "next/image";
import React from "react";

function SecondSection() {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="font-primary text-4xl py-12 font-light text-center">
        How we can help you
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12">
        <div className="w-64 min-h-64 m-2 my-4">
          <Image
            className="rounded-xl"
            src="/Rectangle 27.png"
            width={284.18}
            height={168.5}
            alt="S"
          />

          <div className="p-2">
            <h2 className="text-[#DC4011] text-xl font-medium pb-4 pt-2 border-b border-gray-300">
              Design
            </h2>
            <p className="text-gray-500 font-medium mt-3">
              Bring your ideas to life with our captivating graphic design
              solutions. From logos to marketing materials, we'll help you make
              a lasting impression
            </p>
          </div>
        </div>

        <div className="w-64 min-h-64 m-2 my-4">
          <Image
            className="rounded-xl"
            src="/Rectangle 28.png"
            width={284.18}
            height={168.5}
            alt="S"
          />

          <div className="p-2">
            <h2 className="text-[#DC4011] text-xl font-medium pb-4 pt-2 border-b border-gray-300">
              Photography
            </h2>
            <p className="text-gray-500 font-medium mt-3">
              Capture the essence of your vision with our professional
              photography services. Perfect for product shots, corporate events,
              and more
            </p>
          </div>
        </div>

        <div className="w-64 min-h-64 m-2 my-4">
          <Image
            className="rounded-xl"
            src="/Rectangle 30.png"
            width={284.18}
            height={168.5}
            alt="S"
          />

          <div className="p-2">
            <h2 className="text-[#DC4011] text-xl font-medium pb-4 pt-2 border-b border-gray-300">
              Development
            </h2>
            <p className="text-gray-500 font-medium mt-3">
              Stand out online with our dynamic web development services. We'll
              create a stunning website that reflects your brand and engages
              your audience
            </p>
          </div>
        </div>

        <div className="w-64 min-h-64 m-2 my-4">
          <Image
            className="rounded-xl"
            src="/Rectangle 29.png"
            width={284.18}
            height={168.5}
            alt="S"
          />

          <div className="p-2">
            <h2 className="text-[#DC4011] text-xl font-medium pb-4 pt-2 border-b border-gray-300">
              Printing
            </h2>
            <p className="text-gray-500 font-medium mt-3">
              Transform your designs into reality with our high-quality printing
              services. From business cards to banners, we'll make sure your
              brand looks its best in prin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
