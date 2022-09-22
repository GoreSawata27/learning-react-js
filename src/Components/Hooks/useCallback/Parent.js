import React from 'react'
import Child from './Child'
import { useState } from 'react'

export default function Parent() {
    const [countOne , setCountOne] = useState(0)
    const [countTwo , setCountTWO] = useState([])

    const handelIncreaseOne= ()=>{
        setCountOne(countOne+1);
    }
    const fun = ()=>{
        console.log('hello')
    }
  return (
    <div>
        <Child countTwo={countTwo} fun={fun} />
        <h1> {countOne} </h1> <button  onClick={handelIncreaseOne} >+</button>
      
    </div>
  )
}
