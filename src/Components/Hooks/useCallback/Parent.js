import React from 'react'
import Child from './Child'
import { useState } from 'react'
import { useCallback } from 'react'

export default function Parent() {
    const [countOne , setCountOne] = useState(0)

    const handelIncreaseOne= ()=>{
        setCountOne(countOne+1);
    }

    const fn = useCallback(() => {
      //
    },[])
    
  return (
    <div>
       <Child fn={fn}  />
        <h1> {countOne} </h1> <button  onClick={handelIncreaseOne} >+</button>
    </div>
  )
}
