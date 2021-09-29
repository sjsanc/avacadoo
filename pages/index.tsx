import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import avoLogo from "../public/avacadoo.png";


import create from "zustand"

// const useStore = create(set => ({
//   counter: 0,
//   increase: () => set(state => ({ counter: state.counter + 1})),
//   clear: () => set({ counter: 0 }),
// }))

// const Counter = () => {
//   const count = useStore(state => state.counter);
//   return <h1>{count}</h1>
// }

// const Increaser = () => {
//   const increase = useStore(state => state.increase);
//   return <button onClick={increase}>UP!</button>
// }

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center flex-col">
        <div className="w-44">
          <Image src={avoLogo} />        
        </div>
        <h1 className="text-4xl">Avacadoo Study Guide</h1>
      </div>
    </div>
  )
}

export default Home
