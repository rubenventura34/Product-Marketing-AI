import { create } from "zustand";

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
  addTag: (tag: string) => set((state) => ({ tags: [...state.tags, tag] })),
  removeTag: (tag: string) =>
    set((state) => ({ tags: state.tags.filter((t) => t !== tag) })),
}));
