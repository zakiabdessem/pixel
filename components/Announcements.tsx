"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { API_URL } from "@/lib/api";
import { Announce } from "@/types/announce";

function Announcements() {
  const [data, setData] = useState<Announce>();
  const fetch = async () => {
    const response = await axios.get(`${API_URL}/announce/`);
    setData(response.data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section className="bg-gray-50 m-2">
      {data && data.show && (
        <div className="lg:flex max-w-screen-xl mx-auto justify-evenly items-center w-2/3 border-2 border-[#ECB176] rounded-3xl">
          <div className="flex flex-col justify-start lg:justify-center max-lg:items-center p-5 mr-auto place-self-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-medium font-spotify tracking-tight leading-none md:text-4xl xl:text-5xl text-gray-800 max-lg:text-center flex justify-center items-center">
              {data.product.name}
              <span className="bg-[#ECB176] rounded-2xl text-base text-white px-2 font-normal ml-1">
                {" "}
                {data.percentage}%
              </span>
            </h1>
            <h2 className="max-w-2xl mb-4 text-2xl font-semibold font-spotify tracking-tight leading-none md:text-2xl xl:text-3xl text-gray-800 max-lg:text-center">
              {data.product.price} DA
            </h2>
            <a
              href={`/product/${data.product._id}`}
              className="text-nowrap bg-[#ECB176] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-800 border border-[#ECB176] rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
              Explorer l’offre
            </a>
          </div>
          <div className="flex-col lg:mt-0 lg:col-span-5 flex items-center">
            <Image
              className="rounded-3xl object-contain lg:rounded-l-none max-lg:p-3"
              src={data.product.picture.secure_url}
              alt="mockup"
              width={280}
              height={227}
              style={{ maxWidth: 280, maxHeight: 227, width: "auto" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Announcements;
