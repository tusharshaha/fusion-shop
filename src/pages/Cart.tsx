import BreadCumb from "@/components/ui/Breadcumb";
import Table from "@/components/ui/Table";
import React from "react";

const Cart: React.FC = () => {
  return (
    <>
      <BreadCumb pathName="Cart" />
      <div className="py-20 cus-container">
        <Table />
      </div>
    </>
  );
};

export default Cart;
