import React from 'react'
import Child from './Child';
import Parent from './Parent'
import { createContext } from 'react'

export const data = createContext();

export default function GrandParent() {
  const value = 'gore'

  return (
    <div>

        <data.Provider value={value}>
           <Parent />
           <Child/>
         </data.Provider>
    </div>
  )
}