import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import avoLogo from "../public/avacadoo.png";
import FeatherIcon from "feather-icons-react";
import { Select, Button, Icon, Form } from "semantic-ui-react";

import create from "zustand";
import React, { SyntheticEvent, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import data from "../data/data.json";

const slugify = (str: string): string => {
  return str.toLowerCase().replace(/\s/g, "-").replace(/\&/g, "and");
};

const generatePage = (data: any) => {
  let fullText = "";
  const pages: any[] = data[0].pages;
  pages.forEach((page, i) => {
    fullText += `# [${i + 1}. ${page.title}](#${slugify(page.title)}) \n`;
    page.childPages.forEach((child: any, j) => {
      fullText += `## ${i + 1}.${j + 1}. ${child.title} \n`;
      fullText += `${child.body} \n`;
    });
  });
  return fullText;
};

const generateIndex = (data: any) => {
  let output: any[] = [];
  const pages: any[] = data[0].pages;
  pages.forEach((page, i) => {
    output.push({ type: "page", index: i + 1, text: page.title });
    page.childPages.forEach((child, j) => {
      output.push({ type: "child", index: `${i + 1}.${j + 1}.`, text: child.title });
    })
  })
  return output;
}

const Home: NextPage = () => {
  return (
    <div>
      <div className="topbar shadow-md fixed w-full">
        <div className="c-container flex items-center justify-between">
          <div>
            <FeatherIcon className="m-2 h-5" icon="menu" />
          </div>
          <div className="topbar__title">
            <h1>AAT - Advanced Diploma</h1>
          </div>
          <div className="topbar__icons flex">
            <FeatherIcon className="m-2 h-5" icon="user" />
            <FeatherIcon className="m-2 h-5" icon="search" />
          </div>
        </div>
      </div>
      <div className="central-page h-screen c-container">
        <div className="sidebar pr-5 pt-5">
          <button className="module-notice p-3 bg-white rounded-lg border-2 border-gray-50 shadow-md w-full hover:bg-gray-100 transition duration-200 ease-in-out">
            Advanced Bookkeeping
            <span className="flex items-center text-xs mt-1 text-gray-300 justify-center">
              Click to change module
              <FeatherIcon className="h-3" icon="corner-right-up" />
            </span>
          </button>

          <ol className="p-3">
            {
              // turn this into a real component!
              generateIndex(data).map(entry => {
                return entry.type == "page" ? <li>{entry.index} {entry.text}</li> 
                : <li className="ml-4">{entry.index} {entry.text}</li>
              })
            }
          </ol>
        </div>

        <div className="page pt-5 overflow-y-scroll">
          <ReactMarkdown
            children={generatePage(data)}
            remarkPlugins={[remarkGfm]}
            components={{
              em({ node, className, children, ...props }) {
                return (
                  <Tippy content="lol">
                    <label>{children}</label>
                  </Tippy>
                );
              },
              h1: ({ node, ...props }) => (
                <h1
                  // Extract ID from node to use for anchor links
                  id={JSON.stringify(node.children[0]["properties"].href).replace(/\#/g, "").replace(/\"/g, "")}
                  {...props}
                />
              ),
            }}
          />
        </div>

        <div className="quickbar pl-5 pt-5">
          <div className="p-3 bg-white rounded-lg border-2 border-gray-50 shadow-md w-full flex flex-col">
            <h2 className="text-center text-gray-300 pb-2">Course Links</h2>
            <ol>
              <li>
                <a>Definitions</a>
              </li>
              <li>
                <a>Tests</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
