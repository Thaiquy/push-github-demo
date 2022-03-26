import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log("Click the button")
    }

  render() {
    return (
      <div>
          <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick