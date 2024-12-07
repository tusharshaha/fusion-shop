import React from "react";
import { Link } from "react-router-dom";

const BreadCumb: React.FC<{
  pathName?: string;
}> = ({ pathName }) => {
  return (
    <div className=" bg-gray-600 bg-cover w-full h-full text-white">
      <div className="h-[250px] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold tracking-widest">{pathName}</h2>
        <div className="mt-3 text-lg font-semibold">
          <Link
            to="/"
            className="transition duration-500 hover:text-orange-600 mr-2"
          >
            Home
          </Link>
          <span className="capitalize text-orange-600">
            &#47;&#47; {pathName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BreadCumb;
