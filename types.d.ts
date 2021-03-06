declare module "feather-icons-react";
declare module "next-auth/providers/auth0"
declare module 'next-auth/react'

interface Definition {
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
