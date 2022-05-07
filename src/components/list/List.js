import React from "react";
// import { Link } from "react-router-dom";
// import { BsBookmarkFill } from "react-icons/bs";
// import "./style.css";
export default function List(props) {
    const { product } = props;
    return ( <
        div className = "list" >
        <
        h2 > hello < /h2> <
        table >
        <
        tr >
        <
        td > { product.title } < /td> <td> </td > < td > < /td> <td> </td > < td > < /td>{" "} <
        /tr>{" "} <
        /table>{" "} <
        /div>
    );
}