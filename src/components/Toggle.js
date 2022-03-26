import React, { Component } from 'react'

class Toggle extends Component {

    state = {
        IsShow: false
    }

    handleShowHide = () => {
        this.setState({
            IsShow: !this.state.IsShow
        })
    }

    render() {
        let {IsShow} = this.state;
        const arrPersons = [
            { id: 1, name: 'Person1', job: 'Developer', salary: 500 },
            { id: 2, name: 'Person2', job: 'Tester', salary: 400 },
            { id: 3, name: 'Person3', job: 'Leader', salary: 1000 }
        ]
        return (
            <>
                {!IsShow &&
                    <div>
                        <button onClick={() => this.handleShowHide()} >Show</button>
                    </div>
                }
                {IsShow &&
                    <>
                    <div>
                        {
                            arrPersons.map((item, index) => {
                                if (item.salary >= 500) {
                                    return (
                                        <div key={item.id}>
                                            {item.name} - {item.job} - {item.salary}
                                        </div>
                                    )
                                }
                                return null
                            })
                        }
                        <button onClick={() => this.handleShowHide()} >Hide</button>
                    </div>
                    </>
                }
            </>
        )
    }
}

export default Toggle