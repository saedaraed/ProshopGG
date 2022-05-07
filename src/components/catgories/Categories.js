import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

import Button from "../button/Button";

const data = [{
        id: 11,
        title: "LAPTOP",
        image: "images/img2.PNG",
    },
    {
        id: 22,
        title: "COMPUTER COMPONENTS",
        image: "images/img3.PNG",
    },
    {
        id: 33,
        title: "DEVICES",
        image: "images/img5.PNG",
    },
    {
        id: 44,
        title: "ACCESSORIES",
        image: "images/img4.PNG",
    },
    {
        id: 55,
        title: "ACCESSORIES",
        image: "images/img4.PNG",
    },
];

function Categories() {
    //   const [active, setActive] = useState("");
    return ( <
        Swiper slidesPerView = { 4 }
        spaceBetween = { 30 }
        freeMode = { true }
        pagination = {
            {
                clickable: true,
            }
        }
        modules = {
            [FreeMode, Pagination] }
        className = "mySwip container" >
        { " " } {
            data.map((categorySlide) => ( <
                SwiperSlide key = { categorySlide.id }
                className = "category" >
                <
                div className = " container" >
                <
                div className = "pare" > { " " } <
                div className = "slider-image" > { " " } <
                img src = { categorySlide.image }
                alt = "img" / > { " " } <
                /div>{" "} <
                div className = "slider-content" >
                <
                h6 > { categorySlide.title } < /h6>{" "} <
                /div>{" "} <
                /div>{" "} <
                /div>{" "} <
                /SwiperSlide>
            ))
        } { " " } <
        /Swiper>
    );
}

export default Categories;