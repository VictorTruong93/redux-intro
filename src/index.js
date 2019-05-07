/* eslint-disable import/first */
/* eslint-disable no-unreachable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// State - data that is held in javascript objects
    //state is in key:value pairs
    //state is never mutated directly
const initialState = {
    value:1
};


// Actions
    //actions always have a type and sometimes a payload

    //"increment" or "decrement"
const ACTION_INCREMENT = 'increment';

const ACTION_DECREMENT = 'decrement';

//  common practice to have action creator functions
function increment(){
    return{
        type: ACTION_INCREMENT
    }
};
function decrement(){
    return{
        type: ACTION_DECREMENT
    }
};
window.increment = increment;
window.decrement = decrement;

// Reducer - is always a function
// argument 1: the current state
// argument 2: an action
// optional:usually named for the data - easier to differentiate between different reducers
function counter(state=initialState, action={type:''}){
    //inspects the action and see what type it is
    switch(action.type){

        // if (action.type===ACTION_INCREMENT){
        case ACTION_INCREMENT:
        return{
            value: state.value+1
        }
        break;
        // }else if(action.type===ACTION_DECREMENT){
        case ACTION_DECREMENT:
            return{
                value: state.value-1
            }
        break;
        // }else{
        default:
            return state;
        break;
        // }
    }
}
window.counter = counter;

// The Store
const store = createStore(counter);
window.store = store;