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
        if (action === 'increment') {
            increment();
        } else if (action === 'decrement') {
            decrement();
        } else if (action === 'reset') {
            reset();
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Counter: {count}</h2>
            <p>Current Count: {count} </p>
            <button onClick={() => onClick('decrement')} style={{ marginRight: '10px', padding: '10px', fontSize: '16px' }}>-</button>
            <button onClick={() => onClick('increment')} style={{ padding: '10px', fontSize: '16px' }}>+</button>
            <button onClick={() => onClick('reset')} style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}>Reset</button>
        </div>
    );
}

export default Counter;