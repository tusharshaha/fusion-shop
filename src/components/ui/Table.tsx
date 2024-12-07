import {
  clearCart,
  getTotal,
  handleQty,
  removeFromCart,
} from "@/redux/features/cartSlice";
import { RiDeleteBin5Line } from "react-icons/ri";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import toast from "react-hot-toast";

const Table: React.FC = () => {
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  // handle qunatity incrase
  const handleIncrease = (id: number, qty: number) => {
    const updatedQty = qty + 1;
    dispatch(handleQty({ id, qty: updatedQty }));
  };
  // handle quantity decrase
  const handleDecrease = (id: number, qty: number) => {
    const updatedQty = qty - 1;
    if (updatedQty < 1) {
      return;
    }
    dispatch(handleQty({ id, qty: updatedQty }));
  };

  const handleClear = () => {
    if (items.length === 0) {
      toast.error("you have no product in cart", { id: "cart error" });
      return;
    }
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotal());
    // eslint-disable-next-line
  }, [items]);
  return (
    <div className="overflow-x-auto">
      <table className="text-center w-full border-collapse border">
        <thead className="">
          <tr className="bg-slate-600 text-white [&>*]:border [&>*]:border-white">
            <th>Action</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 && (
            <tr className="[&>*]:border">
              <td colSpan={6} className="py-5 text-center">
                <p className="mb-0">
                  You have no product in cart. Go to{" "}
                  <Link to="/shop" className="hover-red">
                    Shop
                  </Link>
                </p>
              </td>
            </tr>
          )}
          {items.map((item) => (
            <tr className="[&>*]:border" key={item.id}>
              <td>
                <button
                  className="text-2xl"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <RiDeleteBin5Line />
                </button>
              </td>
              <td>
                <img src={item.imgUrl} className="size-[60px] mx-auto" alt="" />
              </td>
              <td>
                <p className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap w-[150px] mx-auto">
                  {item.name}
                </p>
              </td>
              <td>&#36;{item.curPrice}.00</td>
              <td className="px-2">
                <div className="rounded-full p-2 bg-orange-300 flex items-center justify-between gap-1 w-[170px] mx-auto">
                  <button
                    className="rounded-full size-[40px] bg-white text-2xl flex items-center justify-center"
                    onClick={() => handleIncrease(item.id, item.qty)}
                  >
                    +
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className="rounded-full size-[40px] bg-white text-2xl flex items-center justify-center"
                    onClick={() => handleDecrease(item.id, item.qty)}
                  >
                    -
                  </button>
                </div>
              </td>
              <td>&#36;{item.subTotal}.00</td>
            </tr>
          ))}
          <tr>
            <td className="border p-2" colSpan={6}>
              <div className="flex items-center justify-between">
                <div className="cupon">
                  <span className="font-bold text-xl">
                    Total: ${totalAmount}
                  </span>
                </div>
                <div className="text-end">
                  <button
                    className="py-2 px-6 rounded-md bg-red-600 uppercase text-white font-bold"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
