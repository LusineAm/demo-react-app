import React, {useState} from 'react';
import styles from './local.module.css';

function ChildComponent () {

const arr = ['StringA', 'StringB'];

const a = arr[0];
const b = arr[1];
// = է
const [a, b] = ['stringA', 'stringB'];



    return (
        <h2 className={styles.customHeader} >Child Component</h2>
    )
};

export default ChildComponent;