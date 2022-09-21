import React, { Component } from 'react'

export default class Child extends Component {
    constructor(){
        super();
        console.log('I am from child constructor..!');
    }
    componentDidMount(){
      console.log(' I am from child component did mount !!!! ')
    }
  render() {
    return (
      <div>The above button used for change a state - check- component did update </div>
    )
  }
}
