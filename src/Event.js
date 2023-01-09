import React from "react";
// import { ReactDOM } from "react";

class Event extends React.Component {
    constructor() {
      super();
      this.state = {
        brand: "Welcome",
        invite:"To",
        company:"My Customer"          
      };
    }


    componentDidUpdate(){
        alert('Finish Your Work');
    }
    shouldComponentUpdate(){
        return true;
    }


    clickEvent = ()=> {
    
    this.setState({

        brand:"Thankyou",
        invite:"by",
        company:"Mazeworks"                
          
    })
}

render(){
    return(
        <div style={{textAlign:"center"}}>
        <h1 style={{color:'red'}}> {this.state.brand}</h1>
        <p style={{color:'black'}}>{this.state.invite}</p>
        <p style={{color:'blue'}}> {this.state.company}</p>
        <button  style={{textAlign:'left' ,marginRight:'20px'}} onClick={this.clickEvent}>Exit</button>
      
        </div>
    )
}
}

export default Event;