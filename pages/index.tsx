import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import avoLogo from "../public/avacadoo.png";
import FeatherIcon from "feather-icons-react"
import { Select, Button, Icon, Form } from "semantic-ui-react";

import create from "zustand"
import { SyntheticEvent, useEffect } from 'react';

interface AppState {
  selectedCourse: string;
  courseList: string[];
  allCourseData: Object;
}

interface Store {
  data: AppState 
  updateStore: any
}

const useStore = create<Store>(set => ({
  data: {
    selectedCourse: "",
    courseList: [],
    allCourseData: {}
  },
  updateStore: (newState: any) => set(state => ({ data: {...state.data, ...newState }}))
}))

const COURSE_OPTIONS = [
  { key: "aat-3", value: "aat-3", text: "AAT Level 3" }
]


const Home: NextPage = () => {
  const state: AppState = useStore(state => state.data);
  const updateStore = useStore(state => state.updateStore);

  // Initialise app with dummy data
  useEffect(() => {
    updateStore({ courseList: COURSE_OPTIONS })
  }, [])

  const selectCourse = (e: SyntheticEvent<HTMLElement, Event>, data: any) => {
    const course = data.value;

    if (state.courseList.find(c => c.value == course)) {
      updateStore({ selectedCourse: course })
    } else {
      console.error(`Unable to find '${course}' in courseList`)
    }
  }

  return (
    <div className="container">
      <div className="flex items-center justify-center flex-col">
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
        </h1>
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
      </div>
    </div>
  )
}

export default Home
