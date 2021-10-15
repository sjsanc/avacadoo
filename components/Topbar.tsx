import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import FeatherIcon from "feather-icons-react";
import { useAppStore } from "../stores/useAppStore";

export default function Topbar() {
  const store = useAppStore();

  return (
    <div className="topbar shadow-md fixed w-full">
      <div className="c-container flex items-center justify-between">
        <Menu as="div" className="relative">
          <div className="flex items-center">
            <Menu.Button className="hover:bg-gray-300 rounded">
              <FeatherIcon className="m-2 h-5" icon="menu" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-50"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute left-0 flex flex-col items-start w-48 p-2 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button className="p-2 rounded w-full text-left hover:bg-gray-100">Home</button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className="p-2 rounded w-full text-left hover:bg-gray-100">
                    Courses
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="topbar__title">
          <h1>AAT - Advanced Diploma</h1>
        </div>
        <div className="topbar__icons flex">
          <Menu as="div" className="relative">
            <div className="flex items-center">
              <Menu.Button>
                <FeatherIcon className="m-2 h-5" icon="user" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-50"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute flex flex-col items-start right-0 w-48 mt-2 p-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {/* <Menu.Item>
                  {({ active }) => (
                    <button className="p-2 rounded w-full text-left hover:bg-gray-100">
                      View Account
                    </button>
                  )}
                </Menu.Item> */}
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={() => store.toggleModal("login")} className="p-2 rounded w-full text-left hover:bg-gray-100">
                      Login
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          <FeatherIcon className="m-2 h-5" icon="search" />
        </div>
      </div>
    </div>
  );
}
