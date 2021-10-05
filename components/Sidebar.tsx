import React from "react";
import FeatherIcon from "feather-icons-react";
import { slugify } from "../utils/helpers";

interface SidebarListElement {
  type: "page" | "child";
  index: number;
  text: string;
}

export default function Sidebar(props: { pageContents: any }) {
  const pages = props.pageContents;

  return (
    <div className="pr-5 pt-5">
      <button className="module-notice p-3 bg-white rounded-lg border-2 border-gray-50 shadow-md w-full hover:bg-gray-100 transition duration-200 ease-in-out">
        Advanced Bookkeeping
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
                <a href={`#${slugify(page.title)}`}>
                  <span className="font-bold">{i + 1}.</span> {page.title}
                </a>
              </li>
              {page.childPages.length > 0 && (
                <ol>
                  {page.childPages.map((child, j) => (
                    <li className="ml-4 text-base" key={j}>
                      <a href={`#${slugify(child.title)}`}>
                        <span className="font-bold">
                          {i + 1}.{j + 1}.
                        </span>{" "}
                        {child.title}
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
