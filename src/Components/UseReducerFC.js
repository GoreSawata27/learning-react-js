import React, { useReducer } from 'react'   // 1

const initialstate = 0;                 //3
const reducer = (state, action) => {      // 4
    switch (action) {                      //5
        case 'Increment':
            return state + 1;

        case 'Decrement':
            return state - 1;

        case 'Reset':
            return initialstate;

        default:
            return state;
    }

}

export default function UseReducerFC() {

    const [count, dispatch] = useReducer(reducer, initialstate);  //2      6

    // step 7 and 8 below

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={() => { dispatch('Increment') }} >Increment</button>
            <button onClick={() => { dispatch('Decrement') }} >Decrement</button>
            <button onClick={() => { dispatch('Reset') }}>Reset</button>
        </div>
    )
}
