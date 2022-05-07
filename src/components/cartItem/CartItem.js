import React from "react";
import { Link } from "react-router-dom";
import Counter from "../counter/Counter";
import "./style.css";

export default function CroductItem(props) {
    const { item } = props;
    const { product } = item;

    return ( <
        div className = "cartItem" >
        <
        img src = { product.image }
        className = "card-img-top"
        alt = "..." / >
        <
        div className = "card-body" >
        <
        Link to = {
            {
                pathname: "/ProductDetails",
                search: `?id=${product.id}`,
            }
        }
        className = "card-title" >
        { " " } { product.title } { " " } <
        /Link>{" "} <
        Counter className = "counts" / > { " " } <
        h5 className = "card-text" > Price { item.quantity * product.price }
        $ < /h5>{" "} <
        /div>{" "} <
        a className = "delete" > x < /a>{" "} <
        /div>
    );
}