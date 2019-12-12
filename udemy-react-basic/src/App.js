import React from 'react';


const App = () => {
  const profiels = [
    {name:"Taro", age:"10"},
    {name:"Takuto", age:"21"},
    {name:"noname"}
  ]
  return (
    <div>
      {
        profiels.map((profiel,index) =>{
          return <User name={profiel.name} age={profiel.ages} key={index}/>
        })
      }
    </div>
  );
}

const User = (props) =>{
  return(
  <div>Hi I am { props.name }, and {props.age} years old!</div>
  )
}

User.defaultProps = {
  age: 1
}

export default App;
