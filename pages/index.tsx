import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import avoLogo from "../public/avacadoo.png";

import create from "zustand"

interface StoreState {
  data: any, 
  updateStore: any
}

const useStore = create<StoreState>(set => ({
  data: {},
  updateStore: (newState: any) => set(state => ({ data: {...state.data, ...newState }}))
}))

const Home: NextPage = () => {
  const data = useStore(state => state.data);
  const updateStore = useStore(state => state.updateStore);

  return (
    <div className="container">
      <button onClick={() => {
        updateStore({ [Math.random() * 10]: Math.random() * 10 })
      }}>CLICK</button>
      <div>{ JSON.stringify(data)}</div>
      <div className="flex items-center justify-center flex-col">
        <div>
          <div>Avocado Icon/Home</div>
          <div>User Account Icon</div>
          <div>Theme Picker</div>
        </div>
        <div className="w-44">
          <Image src={avoLogo} />        
        </div>
        <h1 className="text-4xl">Avacadoo Study Guide</h1>
        <label>Select Topic</label>
        <select>
          <option>AAT - Level 3</option>
        </select>
        <input type="submit" value="View topic summary" />
        <label>Search Topic</label>
        <input type="text" placeholder="E.g. Economic Order Quantity..." />
      </div>
    </div>
  )
}

export default Home
