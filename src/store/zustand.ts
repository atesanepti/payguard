import { create } from "zustand";

interface StoreState {
  isSidebarShow: boolean;
  toggleSideBar: () => void;
}

export const useStore = create<StoreState>((set) => ({
  isSidebarShow: false,
  toggleSideBar: () =>
    set((state) => ({ isSidebarShow: !state.isSidebarShow })),
}));
