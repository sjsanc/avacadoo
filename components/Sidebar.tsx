import React from "react";
import FeatherIcon from "feather-icons-react";
import { slugify } from "../utils/helpers";
import { useCourseStore } from "../stores/useCourseStore";
import { useAppStore } from "../stores/useAppStore";

interface SidebarListElement {
  type: "page" | "child";
  index: number;
  text: string;
}

const handleModuleChange = () => {
  console.log("HI");
};

export default function Sidebar(props: { pageContents: Page[] }) {
  const pages = props.pageContents;
  const store = useCourseStore();
  const state = useAppStore();

  return (
    <div className="pr-5 pt-5">
      <button
        onClick={state.openModuleSelector}
        className="module-notice p-3 bg-white rounded-lg border-2 border-gray-50 shadow-md w-full hover:bg-gray-100 transition duration-200 ease-in-out">
        {store.currentModule}
        <span className="flex items-center text-xs mt-1 text-gray-300 justify-center">
          Click to change module
          <FeatherIcon className="h-3" icon="corner-right-up" />
        </span>
      </button>

      <ol className="p-3">
        {pages.map((page, i) => {
          return (
            <React.Fragment key={i}>
              <li key={i} className="text-base">
                <a href={`#${slugify(page.pageHeader)}`}>
                  <span className="font-bold">{i + 1}.</span> {page.pageHeader}
                </a>
              </li>
              {page.childPages.length > 0 && (
                <ol>
                  {page.childPages.map((child, j) => (
                    <li className="ml-4 text-base" key={j}>
                      <a href={`#${slugify(child.pageHeader)}`}>
                        <span className="font-bold">
                          {i + 1}.{j + 1}.
                        </span>{" "}
                        {child.pageHeader}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
}
