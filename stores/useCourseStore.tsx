import create, { Stat } from "zustand";

const initialState = {};

interface CourseStore {
  test: string;
  setString: any;
}

export const useCourseStore = create<CourseStore>((set) => ({
  test: "",
  setString: () =>
    set((state) => {
      test: state;
    }),
}));
