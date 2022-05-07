import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import Input from "../input/InputNav";
import InputNav from "../input/InputNav";

import ItemNav from "../itemNav/ItemNav";
import { FaSearch } from "react-icons/fa";
import CartIcon from "../cartIcon/CartIcon";
// import { react - router }
// From "react-router-dom"

function Navbar() {
    return ( <
        div className = "navbar" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-4" >
        <
        Link to = "/" >
        <
        p className = "logo" > { " " }
        Pro < span > Shop < /span>{" "} <
        /p>{" "} <
        /Link>{" "} <
        /div>{" "} <
        div className = "col-4" >
        <
        div className = "input" >
        <
        InputNav / > { " " } <
        /div>{" "} <
        /div>{" "} <
        div className = "col-4 navItem" >
        <
        ItemNav / >
        <
        CartIcon / >
        <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Navbar;