import React, { Component } from 'react'
import Child from './ChildClass/Child';
class ClassFile extends Component {

    constructor(props){
        super(props);
        console.log(`Its me Constructor.....!!!`+this.props);
        this.handleEvent();
        console.log(`complete`); 
        // initialize the state
        this.state={companyName:"Altrocks"};

    }
    handleEvent(){  
      console.log(`handle event`+this.props);  
    }  
    componentDidMount() {
          // This is used to update the DOM which is already placed in the DOM.
         // That’s the perfect time to do an asynchronous request to fetch data from an API.
         // check console to workflow 
         console.log('I am Component Did Mount');
        setTimeout(() => {
          this.setState({companyName: "Altrocks Tech"})
        }, 1000);
    
    }
    componentDidUpdate(){
      console.log('component did updated');
    }
    shouldComponentUpdate(){
      // its return the boolean value
      console.log("its me should component update......!")
      if(this.state.companyName!=null){
        console.log('true');
        return true;
      }else{
        return false;
      }
    }
    // getSnapshotBeforeUpdate(){
    //   console.log('before update snap....!!');
    //   console.log(this.state.companyName);
    //   return this.state.companyName;
    // }



    // componentWillMount(){
    //   console.log('will mount');
    // }

    // insert elements
    name ="welcome";
    Submit=()=> {
      this.setState({companyName :'welcome all!'});
    console.log('print');
    }

  render() {
    
    console.log('Its me render.....!!!');
    return (
      <div><h5>class component life cycle <br />
      </h5>
      <h3>There are Three phase... In life Cycle</h3>
      <ul>
        <li>Mount phase</li>
        <li>Updating phase </li>
        <li>unmount phase</li>
      </ul>
      <img src="https://miro.medium.com/max/4784/1*Gl8VbwsXmNxUAjmHNZuXxg.png" height={600} width={1000} alt="" />


      <p>Note: In here suppose we have a child class inside our render part!!! <br />react first done the child mount phase after that its done a main component {`(parent component)`}</p>
      <hr />
      <h4>{this.props.check}</h4>
      <h4>{this.name}</h4>
      <h6>{this.state.companyName}</h6>
      <button onClick={this.Submit}>submit</button>
      
      <Child />
      </div>
    )
  }
}

export default ClassFile

