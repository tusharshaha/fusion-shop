import { addToCart, getTotal } from "@/redux/features/cartSlice";
import { AppDispatch } from "@/redux/store";
import { Products } from "@/types";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const ProductCard: React.FC<{ product: Products }> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [load, setLoad] = useState(true);
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        imgUrl: product.imgUrl,
        name: product.title,
        curPrice: product.price,
        subTotal: product.price,
        qty: 1,
      })
    );
    dispatch(getTotal());
    toast.success("Successfully Added to cart", { id: "cart" });
  };
  const handleLoad = () => {
    setLoad(false);
  };
  return (
    <div className="shadow-md rounded-md p-3 flex flex-col h-full border">
      {load && (
        <div className="animate-spin size-[70px] border-8 border-b-white rounded-full border-orange-500 bg-white mx-auto"></div>
      )}
      <img
        onLoad={handleLoad}
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
        <button
          onClick={handleAddToCart}
          className="border border-orange-600 hover:bg-orange-600 hover:text-white trans text-orange-600 font-bold py-2 px-6 rounded-md"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
