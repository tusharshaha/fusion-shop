import React, { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

const menu = (
  <ul className="flex items-center flex-col md:flex-row gap-2 md:gap-4 text-xl text-primary md:text-base-100 font-medium">
    <li className="w-full border-2 border-primary md:border-none rounded-full">
      <Link to="/products" className="font-bold">
        Products
      </Link>
    </li>
  </ul>
);

const Navbar: React.FC = () => {
  const [navMenu, setNavMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenu = () => {
    setNavMenu(!navMenu);
  };
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setNavMenu(false);
      }
    };
    document.body.addEventListener("mousedown", handler);
    return () => document.body.removeEventListener("mousedown", handler);
  });
  return (
    <nav className="bg-gray-100 border-b py-5 sticky top-0 z-10">
      <div className="cus-container flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center font-extrabold text-xl sm:text-2xl text-base-100"
        >
          Fusion Shop
        </Link>
        <div className="hidden md:block">{menu}</div>
        <CartButton className="hidden md:block" />

        <div ref={menuRef} className="relative flex items-center md:hidden">
          <button onClick={handleMenu} className="text-2xl">
            <HiMenu />
          </button>
          {/* mobile menu */}
          <div
            className={`${
              navMenu ? "" : "hidden"
            } absolute top-14 right-0 rounded-md bg-gray-600 border text-white w-[200px] p-4 text-center`}
          >
            {menu}
            <div className="w-full flex items-center justify-center mt-6">
              <CartButton className="block md:hidden " />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
