import React from 'react'
export default class Handelstatebind extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          massage : 'hello gore'
        };
        
        this.clickHandeler = this.clickHandeler.bind(this);
     }
        
     clickHandeler(){

        this.setState(
          {
            massage : 'hello sawata'
          }
        );
     }
      
        render(){
         return(
           <div>
            <div>{this.state.massage}</div>
             <button onClick={this.clickHandeler}>click</button>
           </div>
         )
       }
     } 