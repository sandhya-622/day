import React, { Component } from 'react'

export default class CBCPropsEx extends Component {
  render() {
    console.log(this);
    return (
      <div>CBCPropsEx
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        {
            this.props.hobbies.map(hobby=>{
                return <li>{hobby}</li>
            })
        }
        <h1>{this.props.address.city}</h1>
        <button> onClick={this.props.sendFun}</button>
      </div>
    )
  }
}
