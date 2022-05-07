import React from "react";

import Form from "../../components/form/Form";
// import pic from '../../../public/images/Group 240.png';
import "./style.css";

// import Slider from '../../components/slider/Slider'

function SignUp() {
    return ( <
        div className = "sign flex " >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-lg-6" >
        <
        Form child = "Signup."
        paragraph = "Sign up and get exclusive offers from us"
        children = "Sign up" /
        >
        <
        /div>{" "} <
        div className = "col-lg-6" >
        <
        img src = "images/Group 421.png"
        alt = "img" / > { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default SignUp;