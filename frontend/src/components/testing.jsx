import './testing.css';
import { useState } from 'react';

export default function Testing() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Student");

    function decrement() {
        setCount(count - 1);
    }

    function increment() {
        setCount(count + 1);
    }

    function changeName(value) {
        setName(value);
    }

    return(
        <div>
            <h1>{name}</h1>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <div>
                <button onClick={() => changeName("Student")}>Student</button>
                <button onClick={() => changeName("Teacher")}>Teacher</button>
                <button onClick={() => changeName("Admin")}>Admin</button>
            </div>
        </div>
    )
}