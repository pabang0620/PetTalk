import { atom } from "recoil";

export interface product {
  id: number;
  imgSrc: string;
  company: string;
  product: string;
  price: number;
}

export const bookmarkListState = atom<product[]>({
  key: "bookmarkListState",
  default: [],
});
