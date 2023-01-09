import { ImageList } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "BMW",
      model: "A5",
      color: "Blue",
      year: 2022,
      content:" ."   
    };

    // this.state={value:"welcome",name:guys}
  }

  componentWillMount() {
    alert('Welcome')
  }

  render() {
    return (
      <div>
        <h1 
        style={{
          color: this.state.color,
          backgroundColor: 'rgba(0,0,0,0)',
          textAlign: 'center',
          paddingTop: 20,
          width: 400,
          height: 80,
          margin: 'auto'
        }}>My {this.state.brand}</h1>
        <p style={{textAlign:'center'}}> Color {this.state.color}-  Model {this.state.model}-  From {this.state.year} {this.state.content}
        </p>
        
      </div>
    );
  }

  componentDidMount() { 
    
    setTimeout(() => {
      this.setState({ brand: 'Audi',color: 'red',model:'E5',year:'2021', content:'Thankyou' });
    }, 2000);
  }

  componentWillUpdate()
   {
    alert("update an new values");
  }
  


// componentDidUpdate() 
// {
//   document.getElementsById("mydiv").innerHTML="NEW VALUES"+this.state.content;
// }

}
export default Navbar;

