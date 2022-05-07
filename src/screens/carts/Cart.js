import React from "react";
import ProductsApi from "../../api/product";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { createSlice } from "@reduxjs/toolkit";

class Cart extends React.Component {
    //     state = {
    //         products: [],
    //     };

    //     componentDidMount() {
    //         ProductsApi.getAll().then((data) => {
    //             this.setState({
    //                 products: data,
    //             });
    //         });
    //     }
    render() {
        return ( <
            div className = "Cart" >
            <
            div className = "container" >
            <
            h2 > carts < /h2>{" "} <
            div className = "row" >
            <
            div className = "ss" > { " " } {
                this.props.cartItems.map((item) => ( <
                    div className = { "col-lg-8" }
                    key = { item.product.id } >
                    <
                    CartItem item = { item }
                    />{" "} <
                    /div>
                ))
            } { " " } <
            div className = "tot" >
            <
            p > Subtotal(3) items < /p>{" "} <
            div > { " " } <
            h3 > Total: { this.props.total } < /h3>{" "} <
            /div>{" "} <
            hr / >
            <
            Link to = "/EmptyCart" >
            <
            Button children = "proceed to check" / >
            <
            /Link>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce(
            (total, item) => total + item.quantity * item.product.price,
            0
        ),
    };
};

export default connect(mapStateToProps)(Cart);