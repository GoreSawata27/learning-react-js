import React , { useEffect ,useState  } from 'react'

export default function LifeCycleFunc() {
   const [count , setCount] = useState(0);

useEffect(()=>{

  //console.log("component updating")  
  console.log("component updating")

    return ()=>{
        console.log("component unmount ")
    }
}, [count])

  return (
    <div>
    <h1> {count} </h1>
    <button onClick={()=>setCount(count+1)} >Click</button>
    </div>
  )
}
