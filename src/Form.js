import React, { useState } from 'react'

function Form() {

    const [name,setName] = useState("");
    const [headingText,setHeading] = useState("");

    function handleChange(event){
        console.log("Data Was Changed");
        console.log(event.target.value);
        setName(event.target.value);        
    
    }

function clickEvent(event){

    console.log("Submit");
    alert('YOUR DATA WAS STORE IN DB')
    setHeading(name)
    event.preventDefault();
}


// alert('name was enter')
  return (
    <div style={{textAlign:'center',color:'red'}}>
      
      <h1>Hello {name} !</h1>
<form onSubmit={clickEvent}>
      <input style={{textAlign:'center'}}
      onChange={handleChange}
      type="text"
       placeholder='Your Name Is!' />
       <br />
       <br />
      
      {/* <button style={{color:'black '}} type="submit">Submit</button> */}
      <button type="submit" class="btn btn-outline-primary" >Submit</button>
      {/* <button type="button" class="btn btn-outline-primary">Primary</button> */}


</form>
      <p style={{color:'blue'}}>Welcome {headingText} </p>

    </div>
  )
}

export default Form;
