import React, { useMemo, useState } from 'react'

export default function Usememo() {

    const [countone, setCountone] = useState(0);
    const [counttwo, setCounttwo] = useState(0);

    const callone = () => {
        setCountone(countone + 1)
    }

    const calltwo = () => {

        setCounttwo(counttwo + 1)
    }

    const isEven = useMemo(()=>{
        return countone % 2 == 0  ;
    } , [countone])


    


    return (

        <>
        <div><button onClick={callone}>click :{countone} - </button>
            <span>{isEven ? 'even' : 'odd'}</span></div>
            <button onClick={calltwo}>click :{counttwo}</button>

        </>
    )
}
