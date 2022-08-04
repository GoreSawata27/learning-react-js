import React, { Component } from 'react'

// Conditional Rendering

export default class Conditionalrendering extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLogin : true 
        }
      }
  render() {
// 4. circuit

    return this.state.isLogin && <div><h1>hello sawata</h1></div>


// 3. using variable

// let massage;
// if (this.state.isLogin) {
//     return massage = <div><h1>hello gore</h1></div>
// }else{
//     return massage = <div><h1>hello stranger</h1></div>
// }

//  2.  Ternary operator

    // return this.state.isLogin ?(
    //     <div><h1>hello gore</h1></div>
    // ) :(
    //     <div> <h1> hello stanger</h1></div>
    // )

//   1.   if else

//    if(this.state.isLogin){
//     return <div>hello gore</div>
//    }
//    else{
//     return <div>hello stanger</div>
//    }

  }
}
