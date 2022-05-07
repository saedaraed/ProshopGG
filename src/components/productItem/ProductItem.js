import React from "react";
import { Link } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";
import "./style.css";
export default function ProductItem(props) {
    const { product } = props;
    return ( <
        div className = "card" >
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
        h5 className = "card-text" > Price { product.price }
        $ < /h5>{" "} <
        div className = "add" > { " " } <
        button className = "btn btn-primary white" > Add To Cart < /button>{" "} <
        BsBookmarkFill style = {
            {
                background: "#F2F2F2",
                height: "100%",
                borderRadius: "10px",
                padding: "0px 10px",
                fontSize: "large",
            }
        }
        />{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}