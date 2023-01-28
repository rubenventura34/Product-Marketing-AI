import { create } from "zustand";

export interface IProductInfo {
  name: string;
  description: string;
  tags: string[];
  setProductName: (name: string) => void;
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
  setProductName: (name: string) =>
    set((state) => ({
      name,
    })),
  setProductDescription: (description: string) =>
    set((state) => ({ description })),
  setProductTags: (tags: string[]) => set((state) => ({ tags })),
  addTag: (tag: string) => set((state) => ({ tags: [...state.tags, tag] })),
  removeTag: (tag: string) =>
    set((state) => ({ tags: state.tags.filter((t) => t !== tag) })),
}));
