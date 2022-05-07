import React, { useState } from "react";
import "./style.css";

function Counter() {
    const [count, setCount] = useState(0);
    // if (count < 0) {
    //     return count == 0;
    // }
    return ( <
        div className = "counter" >
        <
        p onClick = {
            () => setCount(count - 1) }
        className = "left" > { " " } -
        { " " } <
        /p>{" "} <
        p className = "center" > { count } < /p>{" "} <
        p onClick = {
            () => setCount(count + 1) }
        className = "right" > { " " } +
        { " " } <
        /p>{" "} <
        /div>
    );
}

export default Counter;