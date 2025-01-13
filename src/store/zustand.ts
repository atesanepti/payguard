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

interface DocumentSetStoreState {
  document: string;
  setDocuement: (documentId: string) => void;
  removeDocument: () => void;
}
export const useDocumentSet = create<DocumentSetStoreState>((set) => ({
  document: "",
  setDocuement: (documentId) => set(() => ({ document: documentId })),
  removeDocument: () => set(() => ({ document: "" })),
}));
