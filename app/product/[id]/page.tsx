"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import MostReleventCards from "../../../components/MostReleventCards";
import PurchaseModal from "../../../components/PurchaseModal";
import axios from "axios";
import { API_URL } from "@/lib/api";
import { Product, Color, Size } from "@/types/product";
import Image from "next/image";

function ProductPage() {
  const router = useRouter();
  const id = usePathname().split("/").pop();

  const [data, setData] = useState<Product>();
  const [stockError, setStockError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleCloseModel = () => setShowModal(false);

  useEffect(() => {
    if (!id) return router.push("/");

    async function fetch() {
      try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        const data: Product = response.data.data;

        setData(data);
      } catch (e) {
        console.log(e);
        router.push("/");
      }
    }

    fetch();
  }, [router, id]);

  //set discounted to true if the coupon is already applied
  const [discounted, setDiscounted] = useState(false);

  return (
    <section className="py-16">
      {data && (
        <div className="flex flex-col lg:flex-row justify-evenly items-center mx-auto max-w-screen-xl px-5">
          <div className="p-4 text-center md:text-left">
            <h1 className="max-w-2xl mb-4 text-2xl font-medium font-spotify tracking-tight leading-none md:text-3xl xl:text-4xl text-gray-800 text-left max-lg:text-center">
              {data.name}
            </h1>
            <p className="p-6">{data.details}</p>
          </div>

          <div className="px-5">
            <div className="flex justify-center lg:justify-start items-center p-5 mr-auto place-self-center">
              <h1 className="max-w-2xl mb-4 text-4xl font-medium font-spotify tracking-tight leading-none md:text-4xl xl:text-3xl text-[#ECB176] max-lg:text-center flex justify-center items-center">
                Prix:
              </h1>
              <h2 className="max-w-2xl ml-2 mb-4 text-2xl font-semibold font-spotify tracking-tight leading-none md:text-2xl xl:text-3xl text-gray-800 max-lg:text-center">
                {data.price} DA
              </h2>
            </div>

            {stockError && (
              <div className="flex items-center space-x-reverse space-x-2 flex-row-reverse justify-start">
                <div className="flex items-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>
                <div className="flex-shrink">
                  <span>{stockError}</span>
                </div>
              </div>
            )}
          

           
            </div>
            <button
              onClick={() => (setShowModal(true))}
              className={`mt-3 text-nowrap bg-[#ECB176] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-[#ECB176] rounded-lg cursor-not-allowed hover:bg-[#ECB176] hover:text-white focus:ring-4 focus:ring-gray-100`}
              >
              Achetez maintenant
            </button>
          </div>
      
      )}
      <MostReleventCards exclude={id} />
      {showModal && (
        <PurchaseModal
          onClose={handleCloseModel}
          productId={id || ""}
          size={selectedSize}
        />
      )}
    </section>
  );
}

export default ProductPage;
