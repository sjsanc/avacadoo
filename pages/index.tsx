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
import { useAppStore } from "../stores/useAppStore";
import axios from "axios";
import Modal from "../components/Modal";

const Home: NextPage<{ data: CourseData }> = ({ data }) => {
  const [pages, setPages] = useState<Page[]>([]);
  const store = useAppStore();

  // Dummy data fetching
  useEffect(() => {
    setTimeout(() => {
      store.setCourseData(data);
      store.setCurrentModule(data.modules[0].moduleTitle);

      const pageData = store.getPages();

      if (pageData) {
        setPages(pageData);
      }
    }, 1000);
  }, []);

  // listen to module selection change
  useEffect(() => {
    const pageData = store.getPages();
    if (pageData) {
      setPages(pageData);
    }
  }, [store.currentModule]);

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
      <div className="modal-wrapper">
        
        <Modal show={store.isModal("moduleSelector")} onClose={() => store.toggleModal(null)} header="Select a module">
          <h4 className="text-gray-400 text-sm italic mb-2">
            Current Course: {store.courseData.course}
          </h4>
          <div className="flex flex-wrap">
            {store.courseData.modules.map((m, i) => (
              <button
                onClick={(event: React.BaseSyntheticEvent) => {
                  store.setCurrentModule(event.currentTarget.innerHTML);
                  store.toggleModal(null)
                }}
                className="px-4 py-2 text-sm rounded-md mr-2 mt-2 bg-blue-100 hover:bg-blue-200"
                key={i}>
                {m.moduleTitle}
              </button>
            ))}
          </div>
        </Modal>

        <Modal show={store.isModal("login")} onClose={() => store.toggleModal(null)} header="Sign in to Avacadoo">

        </Modal>
      </div>
    </div>
  );
};

export async function getStaticProps<GetStaticProps>() {
  // JSON returns an array so get first index for dummy
  const data: any = DUMMY_API[0];

  return {
    props: {
      data,
    },
  };
}

export default Home;
