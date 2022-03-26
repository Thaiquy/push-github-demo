import React, { Component } from 'react'

class ToggleRewrite extends Component {

  state = ({
    check: false
  })


  handleClick = () => {
    this.setState(
      {
        check: !this.state.check
      }
    )
  }

  render() {
    let arrPersons = [
      { id: 1, name: 'person1', job: 'developer', salary: 500 },
      { id: 2, name: 'person2', job: 'tester', salary: 400 },
      { id: 3, name: 'person3', job: 'leader', salary: 1000 },
    ]
    let { check } = this.state
    return (
      <>
        {!check &&
          <div>
            <button onClick={() => this.handleClick()}>Show</button>
          </div>
        }

        {check &&
          <>
            {arrPersons.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.name} - {item.job} - {item.salary}
                </div>
              )
            })
            }
            <div>
              <button onClick={() => this.handleClick()}>Hide</button>
            </div>
          </>

        }


      </>
    )
  }
}

export default ToggleRewrite