import BreadCumb from "@/components/ui/Breadcumb";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Skelton from "@/components/ui/Skelton";
import useProducts from "@/hooks/useProducts";
import React from "react";

const Products: React.FC = () => {
  const { data, loading } = useProducts();
  const skeltons = new Array(8).fill(0);
  return (
    <>
      <BreadCumb pathName="Products" />
      <div className="cus-container py-20">
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
            {data.slice(0, 30).map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
