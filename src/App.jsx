import React, { useState } from 'react'

export default function App() {
    let [count, setCount] = useState(0);


    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount((count == 0) ? (count = 0) : (count - 1));

    }

    return (
        <div>
            <button onClick={() => { increment() }}>Increments</button>
            <h3>{count}</h3>
            <button onClick={() => { decrement() }}>Decrements</button>

        </div>
    )
}
