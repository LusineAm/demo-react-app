import React, {Component} from 'react';

// class Person {
//     constructor (adress) {
//         this.adress = adress;
//     }
//     eat = () => 'eating...';
//     sleep = () => 'sleeping';
// }

// class User extends Person { //class
//     constructor (name, surname) {
//         super('yew york');
//         this.name = name;
//         this.surname = surname;
//     }

    // name = "Joseph";
    // surname = "Morgan";
    // static role = 'admin';
    // getName() { //method
        // console.log(this.name);
    // }
    // secondname = this.name //undifined
    // getSurname = function () { // method 
    // }
// }

// const newperson = new User();
// static methods
// Object.assign({}, {a : 5});
// Object.keys({a:5, b:6});


//react
class User extends Component { 
    constructor(props) {
        super(props);
        this.state = {adress: 'US'};
    }
    render() {
        return (
            <div>hi i'm {this.props.name}, i'm from {this.state.adress}</div>
        )
    }
};
export default User;


