import React from 'react';
function Name(props) {
    const {name} = props;
    return (
         <React.Fragment>
             <p>My name is {name}! </p>
         </React.Fragment>
    );
}
export default Name;