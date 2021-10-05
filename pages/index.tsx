import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import avoLogo from "../public/avacadoo.png";
import FeatherIcon from "feather-icons-react";

import create from "zustand";
import React, { Fragment, SyntheticEvent, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import data from "../data/data.json";
import Sidebar from "../components/Sidebar";

import { slugify } from "../utils/helpers";

import { Menu, Transition } from "@headlessui/react";
import Topbar from "../components/Topbar";
import Page from "../components/Page";
import Quicklinks from "../components/Quicklinks";

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
    });
  });
  return output;
};

const Home: NextPage = () => {
  return (
    <div>
      <Topbar />
      <div className="central-page h-screen c-container">
        <Sidebar pageContents={data[0]["pages"]} />

        <Page pageBody={data[0]["pages"]} />

        <Quicklinks />
      </div>
    </div>
  );
};

export default Home;
