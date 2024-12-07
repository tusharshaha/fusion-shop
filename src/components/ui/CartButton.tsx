import { RootState } from "@/redux/store";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type ButtonProps = {
  className?: string;
};

const CartButton: React.FC<ButtonProps> = ({ className }) => {
  const { totalCount } = useSelector((state: RootState) => state.cart);
  return (
    <Link to="/cart" className={`${className} relative`}>
      <FaCartShopping className="text-3xl" />
      <span className="absolute top-[-14px] right-[-12px] text-center w-[22px] h-[26px] py-1 rounded-full bg-orange-600 text-white text-sm font-semibold">
        {totalCount}
      </span>
    </Link>
  );
};

export default CartButton;
