import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around md:flex-row text-red-500">
      {/* IMAGE Container */}

      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image src={singleProduct.img} fill alt="" className="object-contain"/>
        </div>
      )}
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-4 h-1/2 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
            <h1 className="text-3xl uppercase font-bold xl:text-5xl">{singleProduct.title}</h1>
            <p>{singleProduct.desc}</p>
            <Price id={singleProduct.id}  price={singleProduct.price} options={singleProduct.options} />

        </div>
    </div>
  );
};

export default SingleProductPage;
