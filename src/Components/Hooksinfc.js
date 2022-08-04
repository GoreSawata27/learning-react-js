import React, { useState } from 'react'

export default function Hooksinfc() {
  const [count , update] = useState(0);

    const updatee = ()=> {
        let news = count + 1;
        update(news)
       }

   
  return (
    <div>
      <h1> You have clicked {count} times.</h1>
      <div><button onClick={updatee}>Click</button></div>
    </div>
  )
}
