import React, { Component } from 'react'

export default class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            users:["vamshi" , "vysh" , "divya"],
            num:100
        }
    }
    changeNumber=()=>{
        this.setState({num:200})
    }
  render() {
    console.log(this);
    return (
        
        
      <div>
        {
            this.state.users.map((user ,i)=>{
                return <li key={i}></li>
            })
        }
        <h1>{this.state.num}</h1>
        <button onClick={this.changeNumber}>change Number</button>
        
        </div>
    )
  }
}
