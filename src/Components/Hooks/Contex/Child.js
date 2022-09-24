import React from 'react'
import { useContext } from 'react'
import {data} from './GrandParent'  // f...... brackets for data


export default function Child() {
    const value = useContext(data)
  return (
    <div>
      <h1>Child</h1>
      {value}
    </div>
  )
}
