import React from 'react'
import { UserConsumer } from './ContextUser'

export default function ContextThree() {
  return (
    <div>
      <UserConsumer>
        {
          
        (userName) => {
          return <h1>hello {userName} </h1>;
        }
        
        }
      </UserConsumer>
    </div>
  )
}
