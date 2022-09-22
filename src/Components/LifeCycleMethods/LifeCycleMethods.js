import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count : 0 
      }
    }
    componentDidMount(){
        console.log(this.state.count)
    }
    componentDidUpdate(){
        console.log("Updating..." +this.state.count)
    }
    componentWillUnmount(){
        console.log("unmounted...")
    }
    
  render() {
    return (
      <div>
      <h1>{this.state.count}</h1>  
      {/* <button onClick={()=>this.setState({count : this.state.count+1})}> Increase</button> */}
      </div>
    )
  }
}
