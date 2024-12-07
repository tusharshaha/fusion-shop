import React from "react";
import SectionTitle from "../ui/SectionTitle";
import useProducts from "@/hooks/useProducts";
import Skelton from "../ui/Skelton";
import ProductCard from "../ui/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductSection: React.FC = () => {
  const { data, loading } = useProducts();
  const navigate = useNavigate();

  const handleViewProducts = () => navigate("/products");

  const skeltons = new Array(8).fill(0);

  return (
    <div className="cus-container py-10">
      <SectionTitle
        title="Our Products"
        subTitle="Here is our top selling products"
      />
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skeltons.map((_, i) => (
            <Skelton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.slice(0, 8).map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      )}
      <div className="text-center mt-10">
        <button
          onClick={handleViewProducts}
          className=" py-2 px-6 rounded-md bg-orange-600 text-white font-bold"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
