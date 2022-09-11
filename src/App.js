import React, { Component } from 'react'
import Person from './Person'
import './App.css';
export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={show:false}
  }
  toggle =() => {
    this.setState({show :   !this.state.show})
  }
  render() { 
    return (
      
      <div className='App'>

<button onClick={this.toggle}> show </button>
{this.state.show ?   <Person /> : <h1> you cannot show this</h1> }






      </div>
    )
  }
}
