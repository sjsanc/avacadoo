import create from "zustand";
import { combine } from "zustand/middleware";

export const useAppStore = create(
  combine({ isModuleSelectorOpen: false }, (set, get) => ({
    openModuleSelector: () => set({ isModuleSelectorOpen: true }),
    closeModuleSelector: () => set({ isModuleSelectorOpen: false }),
    selectModule: () => set({}),
  }))
);
