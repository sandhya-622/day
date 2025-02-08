import React, { Component } from 'react'
import './Styles.css'

export default class classComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: 'I am attending react class!!!!! '

        }
    }
    changemessage = () => {
        this.setState({


        })

    }



  render() {
    let applystyle = this.state.clicked ? 'heading2': 'heading1'
    return (
      <div>
        <h1 className={applystyle}>{this.state.message}</h1>
        <button onClick={this.changemessage}></button>

      </div>
    )
  }
}

 