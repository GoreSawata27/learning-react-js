import React from 'react'
import { memo } from 'react'

 function Child({fn}) {

  console.log("child Called")

  return (
    <div>
        
    </div>
  )
}

export default  memo(Child)