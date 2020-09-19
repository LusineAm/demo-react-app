import React from 'react';
import Name from './Name.js';
import Surname from './Surname.js';


// function Person() {
//   return (
//     <div>
//       <h1>hello!</h1>
//       <p>my name is jack</p>
//     </div>
//   )
// }


function Person(props) {
    const name = props.name;
    const {surname} = props;

    return (
      <>
        <h1>hello!</h1>
        <Name name={name} />
        <Surname surname={surname} />
      </>
    )
  };

  export default Person;