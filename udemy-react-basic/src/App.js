import React from 'react';
import PropTypes from 'prop-types';


const App = () => {
  const profiels = [
    {name:"Taro", age: 10},
    {name:"Takuto", age: 21},
    {name:"Matsumoto", age: 31}
  ]
  return (
    <div>
      {
        profiels.map((profiel,index) =>{
          return <User name={profiel.name} age={profiel.age} key={index}/>
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
