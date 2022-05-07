import React from "react";

import Form from "../../components/form/Form";
// import pic from '../../../public/images/Group 240.png';
import "./style.css";

// import Slider from '../../components/slider/Slider'

function LoginForm() {
    return ( <
        div className = "Login flex " >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-lg-6" >
        <
        Form child = "Login."
        paragraph = "Login with your data that you entered during registration" /
        >
        <
        /div>{" "} <
        div className = "col-lg-6" >
        <
        img src = "images/Group 240.png"
        alt = "img" / > { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default LoginForm;