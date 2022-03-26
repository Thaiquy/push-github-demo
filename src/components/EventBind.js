import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props)
        this.state= {
            message: "Hello"
        }
        this.clickHandle = this.clickHandle.bind(this)
    }
    //  clickHandle(){
    //      this.setState({
    //          message: "Goodbye"
    //      })
    //     console.log(this)
    //  }

    clickHandle = () => {
        this.setState({
            message: "Goodbye"
        })
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandle.bind(this)}>Click</button> */}
          {/* <button onClick={() => this.clickHandle()}>Click</button> */}
          <button onClick={this.clickHandle}>Click</button>
      </div>
    )
  }
}

export default EventBind