import create from "zustand";
import { combine } from "zustand/middleware";

interface Store {
  courseData: CourseData;
  currentModule: string;
}

const initialState: Store = {
  courseData: {
    course: "",
    courseCode: "",
    modules: [],
  },
  currentModule: "",
};

export const useCourseStore = create(
  combine(initialState, (set, get) => ({
    loadCourse: (data: CourseData) => set((state) => ({ courseData: data })),
    setCurrentModule: (moduleName: string) => set((state) => ({ currentModule: moduleName })),
    getPages: () => {
      const data = get().courseData.modules.find((m) => m.moduleTitle == get().currentModule);
      if (data) return data.pages;
    },
    // setCourseCode: (code: string) => set((state) => ({ courseCode: code })),
  }))
);
