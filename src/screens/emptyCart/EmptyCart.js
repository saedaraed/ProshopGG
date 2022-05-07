import React from "react";
import "./style.css";
// import { img } from "/public/images/img10.PNG";

function EmptyCart() {
    return ( <
        div className = "empty" >
        <
        p > Your shopping cart is empty < /p>{" "} <
        img src = "images/Group 491.png"
        alt = "img" / >
        <
        /div>
    );
}
export default EmptyCart;