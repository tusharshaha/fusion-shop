import {
  cartSlice,
  addToCart,
  removeFromCart,
  clearCart,
  handleQty,
  getTotal,
} from "../redux/features/cartSlice";
import { CartType } from "@/types";

describe("cartSlice reducer", () => {
  let initialState: {
    items: CartType[];
    totalCount: number;
    totalAmount: number;
  };

  beforeEach(() => {
    initialState = {
      items: [],
      totalCount: 0,
      totalAmount: 0,
    };
  });

  it("should handle add to cart when the product is not cart", () => {
    const newProduct: CartType = {
      id: 1,
      qty: 1,
      curPrice: 100,
      name: "Product 1",
      imgUrl: "test",
      subTotal: 100,
    };
    const updatedState = cartSlice.reducer(initialState, addToCart(newProduct));

    expect(updatedState.items).toHaveLength(1);
    expect(updatedState.items[0].id).toBe(newProduct.id);
    expect(updatedState.items[0].subTotal).toBe(100);
  });

  it("should handle addToCart when the product already exists", () => {
    const existingProduct: CartType = {
      id: 1,
      qty: 3,
      curPrice: 100,
      name: "Product 1",
      imgUrl: "test",
      subTotal: 300,
    };
    initialState.items.push({ ...existingProduct, subTotal: 300 });

    const newProduct: CartType = {
      id: 1,
      qty: 1,
      curPrice: 100,
      name: "Product 1",
      imgUrl: "test",
      subTotal: 100,
    };
    const updatedState = cartSlice.reducer(initialState, addToCart(newProduct));

    expect(updatedState.items[0].qty).toBe(4);
    expect(updatedState.items[0].subTotal).toBe(4 * 100);
  });

  it("should handle removeFromCart", () => {
    const product: CartType = {
      id: 1,
      qty: 3,
      curPrice: 100,
      name: "Product 1",
      imgUrl: "test",
      subTotal: 300,
    };
    initialState.items.push({
      ...product,
      subTotal: product.qty * product.curPrice,
    });

    const updatedState = cartSlice.reducer(initialState, removeFromCart(1));

    expect(updatedState.items).toHaveLength(0);
  });

  it("should handle clearCart", () => {
    const product: CartType = {
      id: 1,
      qty: 3,
      curPrice: 100,
      name: "Product 1",
      imgUrl: "test",
      subTotal: 300,
    };
    initialState.items.push({
      ...product,
      subTotal: product.qty * product.curPrice,
    });

    const updatedState = cartSlice.reducer(initialState, clearCart());

    expect(updatedState.items).toHaveLength(0);
    expect(updatedState.totalCount).toBe(0);
    expect(updatedState.totalAmount).toBe(0);
  });

  it("should handle handleQty", () => {
    const product: CartType = {
      id: 1,
      qty: 3,
      curPrice: 100,
      name: "Product 1",
      imgUrl: "test",
      subTotal: 300,
    };
    initialState.items.push({
      ...product,
      subTotal: product.qty * product.curPrice,
    });

    const updatedState = cartSlice.reducer(
      initialState,
      handleQty({ id: 1, qty: 3 }),
    );

    expect(updatedState.items[0].qty).toBe(3);
    expect(updatedState.items[0].subTotal).toBe(3 * 100);
  });

  it("should handle getTotal", () => {
    const product1: CartType = {
      id: 1,
      qty: 3,
      curPrice: 100,
      name: "Product 1",
      imgUrl: "test",
      subTotal: 300,
    };
    const product2: CartType = {
      id: 2,
      qty: 2,
      curPrice: 100,
      name: "Product 2",
      imgUrl: "test",
      subTotal: 200,
    };

    initialState.items.push({
      ...product1,
      subTotal: product1.qty * product1.curPrice,
    });
    initialState.items.push({
      ...product2,
      subTotal: product2.qty * product2.curPrice,
    });

    const updatedState = cartSlice.reducer(initialState, getTotal());

    expect(updatedState.totalCount).toBe(5);
    expect(updatedState.totalAmount).toBe(500);
  });
});
