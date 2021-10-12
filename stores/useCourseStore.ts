import create from "zustand";
import { combine } from "zustand/middleware";
import produce from "immer";

interface Store {
  courseData: CourseData;
  currentModule: string;
  isModuleSelectorOpen: boolean;
}

const initialState: Store = {
  courseData: {
    course: "",
    courseCode: "",
    modules: [],
  },
  currentModule: "",
  isModuleSelectorOpen: false,
};

export const useCourseStore = create(
  combine(initialState, (set, get) => ({
    setCourseData: (data: CourseData) => set((state) => ({ courseData: data })),
    setCurrentModule: (moduleName: string) => set((state) => ({ currentModule: moduleName })),
    getPages: () => {
      const data = get().courseData.modules.find((m) => m.moduleTitle == get().currentModule);
      if (data) return data.pages;
    },
    openModuleSelector: () => set({ isModuleSelectorOpen: true }),
    closeModuleSelector: () => set({ isModuleSelectorOpen: false }),
  }))
);
