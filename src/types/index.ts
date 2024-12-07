export type Products = {
  id: number;
  title: string;
  body?: string;
  imgUrl: string;
  price: number;
};

export type CartType = {
  id: number;
  imgUrl: string;
  name: string;
  curPrice: number;
  subTotal: number;
  qty: number;
};
