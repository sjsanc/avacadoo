declare module 'feather-icons-react'

interface AppState {
    currentCourseId: string;
    data: {
        definitions: Definition[]
    }
}

interface Definition {
    id: string;
    term: string;
    definition: string;
    hasFormula: boolean;
    moduleId: string;
}

interface Page {
    id: string;
    moduleId: string;
    title: string;
    markdown: string;
}