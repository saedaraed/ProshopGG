import React from "react";
import "./App.css";
import Home from "./screens/home/Home";
import LoginForm from "./screens/loginForm/LoginForm";
import SignUp from "./screens/signUp/SignUp";

import Navbar from "./components/navbar/Navbar";
import Cart from "./screens/carts/Cart";
import ProductDetails from "./screens/productDetails/ProductDetails";
import EmptyCart from "./screens/emptyCart/EmptyCart";
import Profile from "./screens/profile/Profile";
import ProductList from "./screens/productList/ProductList";

import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Navbar / >
        <
        div className = "cont" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />{" "} <
        Route path = "/loginForm"
        element = { < LoginForm / > }
        />{" "} <
        Route path = "/signUp"
        element = { < SignUp / > }
        />{" "} <
        Route path = "/profile"
        element = { < Profile / > }
        />{" "} <
        Route path = "/cart"
        element = { < Cart / > }
        />{" "} <
        Route path = "/emptyCart"
        element = { < EmptyCart / > }
        />{" "} <
        Route path = "/productDetails"
        element = { < ProductDetails / > }
        />{" "} <
        Route path = "/productList"
        element = { < ProductList / > }
        /> <
        /Routes>{" "} <
        /div>{" "} <
        /div>{" "} <
        /Router>
    );
}

function AppWithStore() {
    return ( <
        Provider store = { store } >
        <
        App / >
        <
        /Provider>
    );
}
export default AppWithStore;