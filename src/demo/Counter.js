import React, {Component} from 'react';


class Counter extends Component {

// AROW func
    // state = {count: 0};
    // handleDecrementClick = () => {
    //     // console.log('click ed');
    //     let {count} = this.state;
    //     count--;
    //     this.setState({count});
    // };
    // handleIncrementClick = () => {
    //     let {count} = this.state;
    //     count++;
    //     this.setState({count});    
    //};

//BIND
    constructor() {
        super();
        this.state = {count: 0};
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
    }
    handleDecrementClick  () {
        // console.log('click ed');
        let {count} = this.state;
        count--;
        this.setState({count});
    };
    handleIncrementClick  () {
        let {count} = this.state;
        count++;
        this.setState({count});    }
    render () {
        // console. log('rendered');
        return (
            <div>
                <button onClick={this.handleDecrementClick}>Decrement -</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleIncrementClick}>Increment +</button>
            </div>
        )
    }
}

export default Counter;