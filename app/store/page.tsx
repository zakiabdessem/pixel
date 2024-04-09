"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function Page() {
  return (
    <div>
      <h1 className="text-3xl font-medium  p-12">Shop</h1>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}>
        <CarouselContent>
          <CarouselItem className="lg:basis-1/4  md:basis-1/2">
            <div className="flex flex-col justify-center items-center">
              <Image
                width={278}
                height={316}
                className="rounded-t-3xl"
                src="/Painting (1).png"
                alt="image"
              />
              <div className="p-2">
                <h1 className="font-medium">Wallowing Breeze</h1>
                <div className="flex justify-between items-end p-1">
                  <div className="mr-16">
                    <h2>Hettie Richards</h2>
                    <h3>Oil on canvas, 2008</h3>
                  </div>

                  <Image width={38} height={38} src="/Plus.svg" alt="image" />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/4  md:basis-1/2">
            <div className="flex flex-col justify-center items-center">
              <Image
                width={278}
                height={316}
                className="rounded-t-3xl"
                src="/Painting.png"
                alt="image"
              />
              <div className="p-2">
                <h1 className="font-medium">Wallowing Breeze</h1>
                <div className="flex justify-between items-end p-1">
                  <div className="mr-16">
                    <h2>Hettie Richards</h2>
                    <h3>Oil on canvas, 2008</h3>
                  </div>

                  <Image width={38} height={38} src="/Plus.svg" alt="image" />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/4 md:basis-1/2">
            <div className="flex flex-col justify-center items-center">
              <Image
                width={278}
                height={316}
                className="rounded-t-3xl"
                src="/Painting (1).png"
                alt="image"
              />
              <div className="p-2">
                <h1 className="font-medium">Wallowing Breeze</h1>
                <div className="flex justify-between items-end p-1">
                  <div className="mr-16">
                    <h2>Hettie Richards</h2>
                    <h3>Oil on canvas, 2008</h3>
                  </div>

                  <Image width={38} height={38} src="/Plus.svg" alt="image" />
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <h1 className="text-3xl font-medium px-12 p-12">Most relevant</h1>

      <div className="my-12 mb-0">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}>
          <CarouselContent>
            <CarouselItem className="lg:basis-1/4  md:basis-1/2">
              <div className="flex flex-col justify-center items-center">
                <Image
                  width={278}
                  height={316}
                  className="rounded-t-3xl"
                  src="/Painting (1).png"
                  alt="image"
                />
                <div className="p-2">
                  <h1 className="font-medium">Wallowing Breeze</h1>
                  <div className="flex justify-between items-end p-1">
                    <div className="mr-16">
                      <h2>Hettie Richards</h2>
                      <h3>Oil on canvas, 2008</h3>
                    </div>

                    <Image width={38} height={38} src="/Plus.svg" alt="image" />
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4  md:basis-1/2">
              <div className="flex flex-col justify-center items-center">
                <Image
                  width={278}
                  height={316}
                  className="rounded-t-3xl"
                  src="/Painting.png"
                  alt="image"
                />
                <div className="p-2">
                  <h1 className="font-medium">Wallowing Breeze</h1>
                  <div className="flex justify-between items-end p-1">
                    <div className="mr-16">
                      <h2>Hettie Richards</h2>
                      <h3>Oil on canvas, 2008</h3>
                    </div>

                    <Image width={38} height={38} src="/Plus.svg" alt="image" />
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4 md:basis-1/2">
              <div className="flex flex-col justify-center items-center">
                <Image
                  width={278}
                  height={316}
                  className="rounded-t-3xl"
                  src="/Painting (1).png"
                  alt="image"
                />
                <div className="p-2">
                  <h1 className="font-medium">Wallowing Breeze</h1>
                  <div className="flex justify-between items-end p-1">
                    <div className="mr-16">
                      <h2>Hettie Richards</h2>
                      <h3>Oil on canvas, 2008</h3>
                    </div>

                    <Image width={38} height={38} src="/Plus.svg" alt="image" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Page;
