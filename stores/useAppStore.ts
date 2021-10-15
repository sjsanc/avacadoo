import create from "zustand";
import { redux, devtools, combine } from "zustand/middleware";
import produce from "immer";

interface Store {
  courseData: CourseData;
  currentModule: string;
  isModuleSelectorOpen: boolean;
  isLoginOpen: boolean;
}

const initialState: any = {
  courseData: {
    course: "",
    courseCode: "",
    modules: [],
  },
  currentModule: "",

  openModalName: "",
};

export const useAppStore = create(
  combine(initialState, (set, get) => ({
    setCourseData: (data: CourseData) => set((state) => ({ courseData: data })),
    setCurrentModule: (moduleName: string) => set((state) => ({ currentModule: moduleName })),
    
    getPages: () => {
      const data = get().courseData.modules.find((m) => m.moduleTitle == get().currentModule);
      if (data) return data.pages;
    },

    toggleModal: (modal: string | null) => set({ openModalName: modal }),
    isModal: (modal: string) => {return  modal == get().openModalName ? true : false } 
  }))
);
// toggleShow: () => set((state) => ({ show: !state.show})),