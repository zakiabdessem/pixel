"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { API_URL } from "@/lib/api";
import { Product } from "@/types/product";

function CardSection() {
  const [data, setData] = useState<Product[] | null>([]);

  async function fetch() {
    const response = await axios.get(`${API_URL}/products`);
    setData(response.data.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section className="bg-gray-50 mt-24">
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto justify-start items-center w-full">
        <h1 className="sm:border-b-2 border-[#ECB176] max-w-2xl mb-4 text-2xl font-medium font-spotify tracking-tight leading-none text-gray-800">
          Explorez nos vêtements
          <span className="text-[#ECB176]"> incroyables.</span>
        </h1>
      </div>
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto justify-start items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-32 p-16 pt-0">
          {data && data.length > 0 ? (
            data.map((_, i) => (
              <div className="rounded-b-2xl" key={i}>
                <Card
                  name={_.name}
                  price={_.price}
                  picture={_.picture}
                  _id={_._id}
                  details=""
                  colors={[]}
                />
              </div>
            ))
          ) : (
            <h1 className="flex justify-center items-center text-lg">
              Revenez plus tard{" "}
              <span className="ml-2">
                <i
                  className="em em-innocent"
                  aria-brailleroledescription="em em-innocent"
                  aria-label="SMILING FACE WITH HALO"></i>
              </span>
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default CardSection;
