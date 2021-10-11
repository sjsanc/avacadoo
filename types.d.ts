declare module "feather-icons-react";

interface Deifinition {
  id: string;
  term: string;
  definitionText: string;
}

interface Page {
  pageHeader: string;
  body: string;
  childPages: Omit<Page, "childPages">[];
}

interface Module {
  moduleTitle: string;
  termDefinitions: Array<Definition>;
  pages: Array<Page>;
}

interface CourseData {
  course: string;
  courseCode: string;
  modules: Array<Module>;
}
