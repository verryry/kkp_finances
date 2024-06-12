import { create } from "zustand";

export const useAppStore = create((set) => ({
  columns: [],
  setColumns: (columns) => set({ columns }),
}));
