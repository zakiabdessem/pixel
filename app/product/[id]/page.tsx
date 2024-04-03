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
  const [coupon, setCoupon] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<Color | null>();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [stockError, setStockError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleCloseModel = () => setShowModal(false);

  const handleSizeChange = (event: any) => {
    const newSize = event?.target?.value || event;
    const sizeAvailable = selectedColor?.sizes.some(
      (size) => size.size === newSize && size.quantity > 0
    );

    if (sizeAvailable) {
      setSelectedSize(newSize);
      setStockError("");
    } else
      setStockError(
        `Stock épuisé pour la taille ${newSize} Contactez-moi sur Instagram.`
      );
  };

  const handleColorChange = (color: Color) => {
    const firstAvailableSize = color.sizes.find((size) => size.quantity > 0);
    if (!firstAvailableSize)
      return setStockError(
        "Stock épuisé pour cette coleur Contactez-moi sur Instagram."
      );
    setSelectedColor(color);
    setSelectedSize(firstAvailableSize.size);
  };

  useEffect(() => {
    if (!id) return router.push("/");

    async function fetch() {
      try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        const data: Product = response.data.data;

        if (!data) return router.push("/");

        const colorWithAvailableSize = data.colors.find((color: Color) =>
          color.sizes.some((size: Size) => size.quantity > 0)
        );

        if (colorWithAvailableSize) {
          setSelectedColor(colorWithAvailableSize);
          const firstAvailableSize = colorWithAvailableSize.sizes.find(
            (size) => size.quantity > 0
          );
          setSelectedSize(firstAvailableSize ? firstAvailableSize.size : "");
        } else {
          setSelectedColor(null);
          setSelectedSize("");
          setStockError(
            "Stock épuisé pour ce produit , Contactez-moi sur Instagram."
          );
        }
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

  const handleSubmitCoupon = async () => {
    if (discounted) return;
    if (coupon)
      try {
        const response = await axios.post(`${API_URL}/coupon/verify`, {
          coupon,
        });

        const discount = response.data.discount || 0;
        const newPrice = data && data.price - (discount / 100) * data.price;

        setDiscounted(true);
        setData((prev: any) => ({ ...prev, price: newPrice }));
      } catch (e) {
        console.log(e);
      }
  };

  const canOrder = Boolean(selectedColor) && Boolean(selectedSize);
  return (
    <section className="py-16">
      {data && (
        <div className="flex flex-col lg:flex-row justify-evenly items-center mx-auto max-w-screen-xl px-5">
          <div className="lg:mt-0 lg:col-span-5 flex items-center m-5">
            {selectedColor?.picture && (
              <Image
                className="rounded-2xl object-contain max-lg:p-3 "
                src={selectedColor?.picture.secure_url || ""}
                alt="picture"
                width={495}
                height={420}
                style={{
                  maxWidth: 495,
                  maxHeight: 420,
                  width: "auto",
                  height: "auto",
                }}
              />
            )}
          </div>

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
            <div className="flex flex-col md:flex-row justify-between items-center py-5">
              <div className="relative flex flex-col mb-4 md:mb-0 w-2/3">
                <label
                  htmlFor="size"
                  className="mb-2 font-semibold text-gray-700">
                  Taille
                </label>
                <div className="relative">
                  <select
                    value={selectedSize}
                    onChange={handleSizeChange}
                    id="size"
                    className="form-select appearance-none min-w-24
                    block w-full px-3 py-2 text-base font-normal
                    text-gray-700 bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded transition
                    ease-in-out
                    focus:text-gray-700 focus:bg-white focus:border-[#ECB176] focus:outline-none pr-2"
                    aria-label="Default select example">
                    {selectedColor?.sizes?.map((size, index) => (
                      <option value={size.size} key={index}>
                        {size.size}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <Image
                      src="/down-arrow.png"
                      className="fill-current h-4 w-4"
                      alt="Arrow"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full ml-3 max-w-64">
                <label
                  htmlFor="coupon"
                  className="mb-2 font-semibold text-gray-700">
                  Code Promo
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="form-control block min-w-24
                 w-full px-3 py-2 text-base font-normal
                 text-gray-700 bg-white bg-clip-padding
                 border border-solid border-gray-300
                 rounded transition
                 ease-in-out
                 focus:text-gray-700 focus:bg-white focus:border-[#ECB176] focus:outline-none"
                    placeholder="ABC123"
                  />
                  <button
                    onClick={() => (!canOrder ? null : handleSubmitCoupon())}
                    className={`m-1 text-nowrap bg-[#ECB176] inline-flex items-center justify-center p-1 text-base font-medium text-center text-white border border-[#ECB176] rounded-lg ${
                      !canOrder
                        ? "cursor-not-allowed hover:bg-[#ECB176] hover:text-white"
                        : "hover:text-gray-800 hover:bg-gray-100"
                    } focus:ring-4 focus:ring-gray-100 text-sm`}
                    disabled={!canOrder}>
                    Valider
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="coupon"
                className="mb-2 font-semibold text-gray-700">
                Couleurs
              </label>
              <div className="flex justify-start items-start">
                {/* Out Of stock item */}
                {data &&
                  data.colors?.map((color, i) => {
                    const available = color.sizes?.some(
                      (size) => size.quantity > 0
                    );

                    return available ? (
                      <button key={i} onClick={() => handleColorChange(color)}>
                        <Image
                          className={`rounded-2xl object-containmax-lg:p-3 m-2 aspect-square ${
                            selectedColor?._id === color._id &&
                            "border-2 border-[#ECB176]"
                          }`}
                          src={color.picture.secure_url}
                          alt="mockup"
                          height={70}
                          width={70}
                        />
                      </button>
                    ) : (
                      <button key={i}>
                        <Image
                          className={`rounded-2xl object-containmax-lg:p-3 m-2 border-dashed border-2 border-gray-400 aspect-square ${
                            selectedColor?._id === color._id &&
                            "border-2 border-[#ECB176]"
                          }`}
                          src={color.picture.secure_url}
                          alt="mockup"
                          height={70}
                          width={70}
                        />
                      </button>
                    );
                  })}
              </div>
            </div>

            <button
              onClick={() => (!canOrder ? null : setShowModal(true))}
              className={`mt-3 text-nowrap bg-[#ECB176] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-[#ECB176] rounded-lg ${
                !canOrder
                  ? "cursor-not-allowed hover:bg-[#ECB176] hover:text-white"
                  : "hover:text-gray-800 hover:bg-gray-100"
              } focus:ring-4 focus:ring-gray-100`}
              disabled={!canOrder}>
              Achetez maintenant
            </button>
          </div>
        </div>
      )}
      <MostReleventCards exclude={id} />
      {showModal && (
        <PurchaseModal
          onClose={handleCloseModel}
          productId={id || ""}
          colorId={selectedColor?._id || ""}
          size={selectedSize}
          coupon={coupon || ""}
        />
      )}
    </section>
  );
}

export default ProductPage;
