import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import avoLogo from "../public/avacadoo.png";
import FeatherIcon from "feather-icons-react";

import create from "zustand";
import React, { Fragment, SyntheticEvent, useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import DUMMY_API from "../data/data.json";
import Sidebar from "../components/Sidebar";

import { slugify } from "../utils/helpers";

import { Menu, Transition } from "@headlessui/react";
import Topbar from "../components/Topbar";
import Page from "../components/Page";
import Quicklinks from "../components/Quicklinks";
import { useCourseStore } from "../stores/useCourseStore";
import axios from "axios";
import ModuleSelecModal from "../components/ModuleSelecModal";

const Home: NextPage<{ data: CourseData }> = ({ data }) => {
  const [pages, setPages] = useState<Page[]>([]);
  const store = useCourseStore();

  // Dummy data fetching
  useEffect(() => {
    setTimeout(() => {
      store.loadCourse(data);
      store.setCurrentModule(data.modules[0].moduleTitle);

      const pageData = store.getPages();

      if (pageData) {
        setPages(pageData);
      }
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <Topbar />
        <div className="central-page h-screen c-container">
          {pages.length > 0 ? (
            <>
              <Sidebar pageContents={pages} />
              <Page pageBody={pages} />
            </>
          ) : (
            <>
              <div></div>
              <div>LOADING</div>
            </>
          )}
          <Quicklinks />
        </div>
      </div>
      <ModuleSelecModal />
    </div>
  );
};

export async function getStaticProps<GetStaticProps>() {
  // JSON returns an array so get first index for dummy
  const data: CourseData = DUMMY_API[0];

  return {
    props: {
      data,
    },
  };
}

export default Home;
