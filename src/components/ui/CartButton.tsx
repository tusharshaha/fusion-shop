import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

type ButtonProps = {
  className?: string
}

const CartButton: React.FC<ButtonProps> = ({className}) => {
  return (
    <Link to="/cart" className={`${className} relative`}>
      <FaCartShopping className='text-3xl'/>
      <span className='absolute top-[-14px] right-[-12px] text-center w-[22px] h-[26px] py-1 rounded-full bg-orange-500 text-white text-sm font-semibold'>10</span>
    </Link>
  );
};

export default CartButton;