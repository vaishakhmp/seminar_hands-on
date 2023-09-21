import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'seminar'
      }
      console.log('LifecycleB constructor');
    }

    componentDidMount() {
      console.log('LifecycleB componentDidMount');
     }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate');
      } 

  render() {
    console.log('LifecycleB render');
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB