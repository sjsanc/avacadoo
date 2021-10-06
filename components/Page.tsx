import Tippy from "@tippyjs/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "../utils/helpers";

// These functions format the page section titles for use as anchor links
const formatHeaders = (header: string) => {
  return slugify(JSON.stringify(header).replace(/\#/g, "").replace(/\"/g, ""));
};

// Build the markdown data
const concatMarkdown = (data: any[]): string => {
  let markdown = "";
  data.forEach((page, i) => {
    markdown += `# [${i + 1}. ${page.title}](#${slugify(page.title)}) \n`;
    page.childPages.forEach((child: any, j) => {
      markdown += `## [${i + 1}.${j + 1}. ${child.title}](#${slugify(child.title)}) \n`;
      markdown += `${child.body} \n`;
    });
  });
  return markdown;
};

export default function Page(props: { pageBody: any }) {
  const markdown = concatMarkdown(props.pageBody);

  console.log(formatHeaders("1. Accrual & Payments"));

  return (
    <div className="page pt-5 overflow-y-scroll">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          em({ node, className, children, ...props }) {
            return (
              <Tippy content="lol">
                <label>{children}</label>
              </Tippy>
            );
          },
          // Extract ID from node to use for anchor links
          h1: ({ node, ...props }) => (
            <h1 id={formatHeaders(node.children[0]["properties"].href)} {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 id={formatHeaders(node.children[0]["properties"].href)} {...props} />
          ),
        }}
      />
    </div>
  );
}

// "modules": [
//   "Advanced Bookkeeping",
//   "Final Accounts Preparation",
//   "Management Account Costing",
//   "Advanced Level Synoptic",
//   "Indirect Tax",
//   "Spreadsheets"
// ],
