import React from 'react'

function Employee() {

const Array = [
    { id : 1 , name : 'SURYA PRAKASH' },
    { id : 2 , name : 'CHINNA THAMPI' },
    { id : 3 , name : 'KATHIR' },
    { id : 4 , name : 'JEYANTH' },
    { id : 5 , name :  'MUTHU' },
    { id : 6 , name : 'LACHUMANAN' },
    { id :  7, name : 'RAM' },
    { id : 8 , name : 'JOTHI' },
    { id : 9 , name : 'ARAVINTH' },
    { id : 10 , name : 'SHAPNA' },
    { id : 11 , name : 'DINESH' },
    { id : 12 , name : 'VISHNU' }
    
];

const Company=[
    {
        name:'SURYA PRAKASH',
        skills:[{technology:'React and Laravel Developer' ,Role:'Front-end'}]
    },
    {

        name:'CHINNA THAMPI',
        skills:[{technology:'Flutter and Laravel Developer' ,Role:'Full Stock Developer'
        }]

    },
    {

        name:'KATHIR',
        skills:[{
           technology:'React and Frappe Developer' ,Role:'Full stock Developer'}]

    },
    {
        name:'JEYANTH',
        skills:[{technology:'Tally Developer' ,Role:'Accounting'}]
    },
    {
        name:'MUTHU',
        skills:[{technology:'React Developer' ,Role:'Front-end'}]
    },
    {
        name:'LACHUMANAN',
        skills:[{technology:'Laravel Developer' ,Role:'Full Stock Developer'}]
    },
    {
        name:'RAM',
        skills:[{technology:'Laravel Developer' ,Role:'Full Stock Developer'}]
    },
    {
        name:'JOTHI',
        skills:[{technology:'Python and Laravel Developer' ,Role:'Full Stock Developer'}]
    },
    {
        name:'ARAVINTH',
        skills:[{technology:'Laravel Developer' ,Role:'Full Stock Developer'}]
    },
    {
        name:'SHAPNA',
        skills:[{technology:'Laravel Developer' ,Role:'Full Stock Developer'}]
    },
    {
        name:'DINESH',
        skills:[{technology:'React and Frappe Developer' ,Role:'Full Stock Developer'}]
    },
    {
        name:'VISHNU',
        skills:[{technology:'Tally Developer' ,Role:'Accounts'}]
    }
];

const person={
    email:'mazeworkssolution.com',
    place:'chennai'
}


// const Details={
    
//     place:'Nanganallur'
// }



  return (

    <div style={{textAlign:'center'}}>
            <h1 style={{textAlign:'center',color:'red'}}>MAZEWORKS SOLUTIONS</h1>
            <h2 style={{textAlign:'center'}}> OUR COMPANY EMPLOYEES</h2>

           
{Array.map(data => 
    (<ul key={data.id}>{data.name}</ul>) )
}
         
      <div>
       
        <h2>SENIOR & JUNIORS</h2>

       <ul> 
{Company.map((dev,index) => (
    <div key={index}>
        <h3 style={{color:'Blue'}}>{dev.name}</h3>
        <div style={{color:'black'}}>


            
            {dev.skills.map((skill,index) =>(
<p key={index}>{skill.Role}-{skill.technology}</p>
            ))}
            
        </div>
        </div>
))}
</ul>
      </div>

      <div>
{/* 
      {

Object.keys(Details).map(key =>(

    <p>{Details[key]}</p>
)
)
} */}
 </div>
<div>

{

    Object.keys(person).map(key =>(

        <p>{person[key]}</p>
    )
    )
}
</div>
    </div>
  )
}

export default Employee;
