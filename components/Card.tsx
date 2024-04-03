import Image from "next/image";
import { Product } from "@/types/product";

function Card({ name, price, picture, _id }: Product) {
  return (
    <div className="flex flex-col justify-center items-center">
      <a href={`/product/${_id}`}>
        <Image
          className="rounded-2xl rounded-b-none object-contain"
          src={picture}
          alt="mockup"
          width={264}
          height={264}
        />
      </a>
      <div className="p-4">
        <h1 className=" max-w-2xl mb-4 text-xl font-medium font-spotify tracking-tight leading-none md:text-xl xl:text-xl text-[#ECB176] max-lg:text-center flex justify-center items-center">
          Prix: <span className="text-gray-800 ml-1">{price} DA</span>
        </h1>
        <h2 className=" max-w-2xl mb-4 text-xl font-medium font-spotify tracking-tight leading-none md:text-xl xl:text-xl max-lg:text-center flex justify-center items-center">
          {name}
        </h2>

        <h3 className="flex items-center text-sm w-full">
          Livraison disponible
        </h3>
      </div>
    </div>
  );
}

export default Card;
