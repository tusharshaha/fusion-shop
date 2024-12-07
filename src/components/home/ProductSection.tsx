import React from "react";
import SectionTitle from "../ui/SectionTitle";
import useProducts from "@/hooks/useProducts";
import Skelton from "../ui/Skelton";

const ProductSection: React.FC = () => {
  const { data, loading } = useProducts();
  const skeltons = new Array(8).fill(0);
  console.log(data)
  return (
    <div className="cus-container py-10">
      <SectionTitle
        title="Our Products"
        subTitle="Here is our top selling products"
      />
      {
        loading ?
        <div className="grid grid-cols-4 gap-6">
        {skeltons.map((_, i)=> <Skelton key={i} />)}
      </div>
      :
      <div>

      </div>
      }
    </div>
  );
};

export default ProductSection;
