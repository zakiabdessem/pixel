import Image from "next/image";

export function AdditionalInfo() {
  return (
    <>
    <div className="flex justify-center overflow-hidden">
        <div className="font-primary text-4xl md:text-7xl text-white bg-primary opacity-35 py-5 md:py-10 text-nowrap font-normal ">
            Creative Agency Creative Agency Creative Agency Creative Agency Creative Agency Creative Agency Creative Agency 
        </div>
    </div>
    <section className="m-auto max-w-[1280px]">
      <h1 className=" m-auto text-center text-4xl mt-32 mb-44 font-primary">Empower your business</h1>

      <section className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center lg:mx-16 gap-10">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Image src="/section1-logo.svg" width={278} height={280} alt="" />
          <div className="flex flex-col sm:-ms-20 lg:me-80 gap-4">
            <div className="flex gap-4 sm:gap-8 px-5 sm:px-10 py-5 w-64 sm:w-80 bg-white rounded-xl font-primary text-gray-500 items-center text-lg sm:text-xl">
              <Image src="/camera-icon.svg" width={53} height={53} alt="" />
              <div>Photography</div>
            </div>
            <div className="flex gap-4 sm:gap-8 px-5 sm:px-10 py-5 w-64 sm:w-80 bg-white rounded-xl font-primary text-gray-500 items-center text-lg sm:text-xl">
              <Image src="/paintbrush-icon.svg" width={53} height={53} alt="" />
              <div>Graphic Design</div>
            </div>
            <div className="flex gap-4 sm:gap-8 px-5 sm:px-10 py-5 w-64 sm:w-80 bg-white rounded-xl font-primary text-gray-500 items-center text-lg sm:text-xl">
              <Image src="/dev-icon.svg" width={53} height={53} alt="" />
              <div>Web Development</div>
            </div>
          </div>
        </div>
        <div className="lg:h-[280px] flex flex-col gap-6 lg:justify-between items-center lg:items-end w-3/4 lg:w-1/2">
          <h2 className=" text-primary font-primary text-4xl text-center lg:text-end">We Make Digital Solutions</h2>
          <p className=" text-xl text-center lg:text-end">PIXELlab Agency provides top-notch services in photography, graphic design, web development, and printing. Elevate your brand with our creative expertise and attention to detail</p>
          <button className=" bg-gradient font-primary text-xl rounded-full text-white py-2 w-56">Contact Us</button>
        </div>
      </section>

      
      <section className="flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly items-center lg:mx-16 gap-10 mt-36">
        <div className="lg:h-[280px] flex flex-col gap-6 lg:justify-between items-center lg:items-start w-3/4 lg:w-1/2">
          <h2 className=" text-primary font-primary text-4xl text-center lg:text-start">PixeLab's Frame Store</h2>
          <p className=" text-xl text-center lg:text-start">Transform your space with PixeLab's Frame Store. Explore our curated collection of artisanal frames to showcase your memories and elevate your decor.</p>
          <button className=" bg-gradient font-primary text-xl rounded-full text-white py-2 w-56">Check Our Store</button>
        </div>
        <Image className="rounded-xl" src="/section2-image.png" width={623} height={596} alt="" />
      </section>
    </section>
    </>
  );
}
