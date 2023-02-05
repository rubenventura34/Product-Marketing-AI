import { create } from "zustand";
import productExample from "../data/product.example.json";
export interface IProductInfo {
  name: string;
  description: string;
  tags: string[];
  urlImage?: string;
  setProductName: (name: string) => void;
  setProductImage: (image: string) => void;
  setProductDescription: (name: string) => void;
  addTag: (name: string) => void;
  removeTag: (name: string) => void;
  setProductTags: (tags: string[]) => void;
  setExample: () => void;
}

export interface IUserStore {
  productInfo: IProductInfo;
}
export const useProductStore = create<IProductInfo>((set) => ({
  name: "",
  description: "",
  tags: [],
  urlImage: "",
  setProductName: (name: string) =>
    set((state) => ({
      name,
    })),
  setProductDescription: (description: string) =>
    set((state) => ({ description })),
  setProductImage: (urlImage: string) => set((state) => ({ urlImage })),
  setProductTags: (tags: string[]) => set((state) => ({ tags })),
  addTag: (tag: string) =>
    set((state) => {
      if (state.tags.includes(tag)) return {};
      return { tags: [...state.tags, tag] };
    }),
  removeTag: (tag: string) =>
    set((state) => {
      return { tags: state.tags.filter((t) => t !== tag) };
    }),
  setExample: () =>
    set((state) => ({
      ...productExample,
      tags: productExample.tags.split(","),
    })),
}));
