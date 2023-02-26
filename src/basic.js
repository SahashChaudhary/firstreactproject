import React from "react";
import { useState } from "react";

const Basic = () => {
    const [count, setcout] = useState(0)
    const [color, setColor] = useState('orange')
    const [width, setWidth] = useState('200px')
    function inc() {
        setcout(count + 10)
    }
    function dec() {
        if (count > 0) {
            setcout(count - 10)
        }

    }
    return (
        <>
            <button onClick={inc}>increase</button>
            <button onClick={dec}>decrement</button>
            <button onClick={() => setColor('blue')}>blue</button>
            <input onKeyUp={(e) => setWidth(e.target.value)}></input>
            <p>{count}</p>
            <div style={{ backgroundColor: color, width: width + 'px', height: width + 'px' }}></div>
        </>
    )
}
export default Basic