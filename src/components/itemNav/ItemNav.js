import React from "react";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
// import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function ItemNav() {
    return ( <
        div className = "ItemNav" >
        <
        div className = "formIcon" >
        <
        FaUserAlt style = {
            { color: "fff" } }
        />{" "} <
        a >
        <
        Link to = "/loginForm" > Login < /Link>{" "} <
        /a>{" "} <
        a > { " " } <
        Link to = "/SignUp" > Sign up < /Link>{" "} <
        /a>{" "} <
        a > { " " } <
        Link to = "/Profile" > Profile < /Link>{" "} <
        /a> <
        /div>{" "} <
        div >
        <
        BsFillBookmarkFill / >
        <
        a > Wishlist < /a>{" "} <
        /div>{" "} <
        /div>
    );
}

export default ItemNav;