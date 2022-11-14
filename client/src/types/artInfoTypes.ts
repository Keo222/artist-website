export type TCartItem = {
  id: string;
  qty: number;
};

export type TCart = TCartItem[] | [];

export type TSaleArt = {
  name: string;
  desc: string;
  id: string;
  price: number;
  img: string;
};
