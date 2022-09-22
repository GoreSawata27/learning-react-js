import React , { useMemo ,useState  } from 'react'

export default function UseMemoF() {
    const [countOne , setCountOne] = useState(0)
    const [countTwo , setCountTwo] = useState(0)

    const handelIncreaseOne= ()=>{
        setCountOne(countOne+1);
    }
    const handelIncreaseTwo = ()=>{
       
        setCountTwo(countTwo+1)
    }
 const isEven = useMemo(()=>{
    console.log(" ruuning")
        let i=0 ;
        while(i<2000000000){
            i++;
        };
    return countOne%2===0
 } ,[countOne])
  return (
    <div>
        <h1> {countOne} </h1> <button  onClick={handelIncreaseOne} >+</button> <br />
        <h1>{ isEven ? 'even':'odd'}</h1>
        <h1> {countTwo} </h1> <button onClick={handelIncreaseTwo}>+</button>

      
    </div>
  )
}
