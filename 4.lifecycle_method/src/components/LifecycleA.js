import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vaishakh'
      }
      console.log('LifecycleA constructor');
    }

    componentDidMount() {
      console.log('LifecycleA componentDidMount');
     }

    componentDidUpdate() {
      console.log('LifecycleA componentDidUpdate');
     }

    changeState = () => {
      this.setState({
        name: 'Seminar'
      })
    }

  render() {
    console.log('LifecycleA render');
    return (<div>
      <div>Lifecycle A</div>
      <button onClick={this.changeState}>Change State</button>
      <LifecycleB />
      </div>)
      
    
  }
}

export default LifecycleA