import React, { Component } from 'react'
import logo from  '../src/Hamza.jpg'
import './App.css';


export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Hamza Kefi",
           bio: " I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript",
           profession: "web developer " 
        };
      }
      componentDidMount(){
        console.log("did mount")
      }
componentDidUpdate () {
  console.log("did update")
}
componentWillUnmount(){
  console.log("will")
}
  

      render() {
        return (
          <div className='card'>
          
       
   
             <img className='pic' src={logo} alt="Logo"  />
             <h1> {this.state.fullName}</h1>
             <h1>
             {this.state.profession}
          </h1>
             <p>
             {this.state.bio}
            </p>
            
          
        </div>
      );
    }
  }

         