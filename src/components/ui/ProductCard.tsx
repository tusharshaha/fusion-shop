import { Products } from "@/types";
import React from "react";

const ProductCard: React.FC<{ product: Products }> = ({ product }) => {
  return (
    <div className="shadow-md rounded-md p-3 flex flex-col h-full border">
      <img
        src={product.imgUrl}
        className="w-full h-[250px]"
        alt="product image"
      />
      <h3 className="font-semibold text-xl mt-3">{product.title}</h3>
      <p className="text-slate-500 text-sm mt-3">{product.body}</p>
      <div className="flex items-center justify-between gap-4 py-4 mt-auto">
        <span className="text-xl font-bold text-orange-500">
          ${product.price}
        </span>
        <button className="border border-orange-600 hover:bg-orange-600 hover:text-white trans text-orange-600 font-bold py-2 px-6 rounded-md">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
