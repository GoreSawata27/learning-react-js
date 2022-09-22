import React from 'react'
import { useState } from 'react'

export default function Hooksinfc() {
    const [count , setCount] =useState(0);
    const handelIncrease = ()=>{
        setCount(count+1)
    }
    const handelDecrease = ()=>{
        setCount(count-1)
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handelIncrease}>+</button> <button  onClick={handelDecrease}>-</button>
    </div>
  )
}
