import React from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function CartIcon(Props) {
    return ( <
        div className = "CartIcon" >
        <
        Link to = "/Cart" >
        <
        div className = "cnt" >
        <
        FaShoppingCart style = {
            { fontSize: "large" } }
        /> <
        div className = "circle" >
        <
        span className = "badge badge-danger" > { Props.totalQuantity } < /span> <
        /div>{" "} <
        /div>{" "} <
        a > Cart < /a>{" "} <
        /Link>{" "} <
        /div>
    );
}
const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cart.reduce((total, item) => total + item.quantity, 0),
    };
};

export default connect(mapStateToProps)(CartIcon);