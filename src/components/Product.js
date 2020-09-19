import React, {Component} from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';


class Product extends Component {
    state ={
        showText: true,
        fruits: [
            {
                name: 'orange',
                weight: 5,
            },
            {
                name: 'apple',
                weight: '6',
            },
        ],
    }
    toggleText = () => {
        this.setState({showText: !this.state.showText});
    }
    render () {
        const {name, price, description} = this.props; 
        let {showText} = this.state;
        let fruits = this.state.fruits.map((item, index) => 
        <p key={index}> Name: {item.name}, weight: {item.weight}</p>);
        
        // let fruits = [
        //     <p key="or">Orange</p>,
        //     <p key="Ba">Banana</p>,
        //     <p key="Ap">Apple</p>
        // ];
        return (
            <div>
                <button onClick={this.toggleText}>
                    {
                        showText ?
                        'Hide' :
                        'Show'
                    }
                </button>
                {
                    showText && <p> Hello, i'm simple text</p>
                }
                <Name name={name} /> &nbsp;
                <Price price={price} /> &nbsp;
                <Description description={description} /> &nbsp;
                {fruits}
            </div>
        )
    }
}

export default Product;