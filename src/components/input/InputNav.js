import React, { useState } from "react";
import "./style.css";
import { FaSearch } from "react-icons/fa";

// import { FaSearch } from "react-icons/fa";

function InputNav(props) {
    const [value, setValue] = useState(props);
    const onChange = (event) => {
        setValue(event.target.value);
    };

    return ( <
        div className = "inputNav" >
        <
        input value = { "iphone" }
        placeholder = { props.place }
        onChange = { onChange }
        />{" "} <
        button className = "searchButton" > { " " } <
        FaSearch / >
        search { " " } <
        /button>{" "} <
        /div>
    );
}

export default InputNav;