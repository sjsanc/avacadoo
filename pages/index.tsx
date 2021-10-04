import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import avoLogo from "../public/avacadoo.png";
import FeatherIcon from "feather-icons-react";
import { Select, Button, Icon, Form } from "semantic-ui-react";

import create from "zustand"
import { SyntheticEvent, useEffect } from 'react';


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
            <li>1. Accruals & Payments</li>
            <li className="list-block ml-4">
              <ol>
                <li>1.1 Accruals</li>
                <li>1.2 Payments</li>
              </ol>
            </li>
          </ol>

        </div>

        <div className="page pt-5 overflow-y-scroll">
          <h1 className="page-header my-4">1. Accruals & Payments</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
      {/* <div className="flex items-center justify-center flex-col">
        <div className="flex justify-between m-3 w-full">
          <FeatherIcon icon="search" />
          <div className="flex">
            <FeatherIcon className="mx-2" icon="home" />
            <FeatherIcon className="mx-2" icon="user" />
            <FeatherIcon className="mx-2" icon="image" />
          </div>
        </div>
        <div className="w-44 mt-16">
          <Image src={avoLogo} />        
        </div>
        <h1 className="text-4xl text-center">
          Avacadoo <br /> Study Guide
        </h1> */}
        {/* CHANGE IT TO BE JUST A LIST OF ALL COURSES */}
        {/* <Form className="mt-6">
          <Form.Select placeholder="Pick a course" className="rounded-md" options={COURSE_OPTIONS} onChange={selectCourse} />
        </Form> */}
        {/* {
          state.selectedCourse && (
            <>
              <div className="mt-6">
                <Button className="mt-6" content="View Course" icon="right arrow" labelPosition="right" />            
              </div>
              <div className="overview-box w-full max-w-4xl mt-6 p-6 bg-gray-200 rounded">
                <h1 className="text-xl w-full border-b-2 border-blue">Course Overview</h1>
                <div>

                </div>
              </div>
            </>
          )
        } */}
      {/* </div> */}
    </div>
  )
}

export default Home
