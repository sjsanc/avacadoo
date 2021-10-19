import type { NextPage } from "next";
import React, { Fragment, SyntheticEvent, useEffect, useState } from "react";

import DUMMY_API from "../data/data.json";
import Sidebar from "../components/Sidebar";

import { Dialog } from "@headlessui/react";
import Topbar from "../components/Topbar";
import Page from "../components/Page";
import Quicklinks from "../components/Quicklinks";
import { useAppStore } from "../stores/useAppStore";
import Modal from "../components/Modal";

import { SubmitHandler, useForm } from "react-hook-form";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage<{ data: CourseData }> = ({ data }) => {
  const [pages, setPages] = useState<Page[]>([]);
  const store = useAppStore();

  const { data: session } = useSession();

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

  const { register, handleSubmit, watch, formState: { errors } } = useForm<
    any
  >();
  const onLogin: SubmitHandler<any> = (data) => console.log(data);

  return (
    <div>
      <div>
        <Topbar />
        <div className="central-page h-screen c-container">
          {pages.length > 0
            ? (
              <>
                <Sidebar pageContents={pages} />
                <Page pageBody={pages} />
              </>
            )
            : (
              <>
                <div></div>
                <div>LOADING</div>
              </>
            )}
          <Quicklinks />
        </div>
      </div>
      <div className="modal-wrapper">
        <Modal
          show={store.isModal("moduleSelector")}
          onClose={() => store.toggleModal(null)}
          size="lg"
        >
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Select a module
          </Dialog.Title>
          <h4 className="text-gray-400 text-sm italic mb-2">
            Current Course: {store.courseData.course}
          </h4>
          <div className="flex flex-wrap">
            {store.courseData.modules.map((m, i) => (
              <button
                onClick={(event: React.BaseSyntheticEvent) => {
                  store.setCurrentModule(event.currentTarget.innerHTML);
                  store.toggleModal(null);
                }}
                className="px-4 py-2 text-sm rounded-md mr-2 mt-2 bg-blue-100 hover:bg-blue-200"
                key={i}
              >
                {m.moduleTitle}
              </button>
            ))}
          </div>
        </Modal>

        <Modal
          show={store.isModal("login")}
          onClose={() => store.toggleModal(null)}
          size="xs"
        >
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900 text-center mb-4"
          >
            Sign in
          </Dialog.Title>
          {session
            ? <div>Hi!</div>
            : (<form onSubmit={handleSubmit(onLogin)} className="flex flex-col">
              <input
                placeholder="username"
                className="px-4 py-2 text-sm font-medium bg-gray-100 rounded mb-2"
                {...register("username", { required: true, maxLength: 20 })}
              />
              <input
                placeholder="password"
                className="px-4 py-2 text-sm font-medium bg-gray-100 rounded mb-2"
                type="password"
                {...register("password", { required: true, maxLength: 20 })}
              />
              <input
                onClick={() => signIn("auth0", { redirect: false })}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                type="submit"
              />
            </form>)}
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
