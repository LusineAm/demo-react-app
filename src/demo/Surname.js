import React from 'react';

function Surname(props) {
    const {surname} = props;
    return (
         <React.Fragment>
             <p>My surname is {surname}! </p>
         </React.Fragment>
    );
}

export default Surname;