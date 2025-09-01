import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const onClick = (action) => {
        if (action === 'Increment') {
            increment();
        } else if (action === 'Decrement') {
            decrement();
        } else if (action === 'reset') {
            reset();
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Counter: {count}</h2>
            <p>Current Count: {count} </p>
            <button onClick={() => onClick('Decrement')} style={{ marginRight: '10px', padding: '10px', fontSize: '16px' }}>-</button>
            <button onClick={() => onClick('Increment')} style={{ padding: '10px', fontSize: '16px' }}>+</button>
            <button onClick={() => onClick('reset')} style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}>Reset</button>
        </div>
    );
}

export default Counter;