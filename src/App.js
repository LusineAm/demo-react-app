import React, {Component} from 'react';
import './css/main.css';
import styles from './css/app.module.css';

import styled, {css} from 'styled-components';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`;

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      colorClass: styles.greenClass,
    }
  }

handleColorChange = () => {
if(this.state.colorClass === styles.greenClass){
  this.setState({
    colorClass : styles.yellowClass,
  })
 } else {
  this.setState({
    colorClass: styles.greenClass,
  })
  }
}

  render () {
    return (
        <>
          <h1 className={this.state.colorClass}> 
            hello my friend
          </h1>
          {/* <button onClick={this.handleColorChange}> 
            change color 
          </button>   */}
          <Button primary={true } onClick={this.handleColorChange}> 
            change color 
          </Button>  
          <Button> I'm button</Button>
        </>
    );
  }
}

export default App;
