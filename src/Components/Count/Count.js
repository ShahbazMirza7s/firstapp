// import React,  from 'react';
import { useState } from 'react';

var num = 0;

function Counter() {


    // const [count, setCount ]=useState(0);
    const [username, setName]= useState("Muneeb");

// const incrementHandler=()=>{
//     num =num + 1
//     setCount(count + 1)
//     console.log("Incremented Value :", num);
// }

// const decrementHandler=()=>{
//     num = num -1
//     setCount(count - 1)
//     console.log("Decremented Value",num);
// }
// const resetHandler=()=>{
//     setCount(0)
// }
const user =()=>{
setName("Ahmad")
}

    return ( 
        <div>
            <button onClick={user}> LogiN</button>
           `Login as` {username}

            {/* {num}
            <button onClick={decrementHandler}>Decrement</button>

            <button onClick={resetHandler}>Reset</button> */}
        </div>
     );
}

export default Counter;