import React, { Component } from 'react'

class Digital extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ct: new Date().toLocaleTimeString()
        }
    }

    /*  bhayyaClick = () => {
         this.setState({
             ct: new Date().toLocaleTimeString()
         })
     } */
    componentDidMount() {
        setInterval(() => {
            this.setState({
                ct: new Date().toLocaleTimeString()
            })
        }, 1000)

    }
    render() {
        return (
            <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <h3>Time:{this.state.ct}</h3>
                {/*  <button onClick={this.bhayyaClick}>click</button> */}
            </div>
        )
    }
}

export default Digital