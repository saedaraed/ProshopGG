import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import ProductItem from "../productItem/ProductItem";
import ProductsApi from "../../api/product";

export default class Featured extends React.Component {
    state = {
        products: [],
    };

    componentDidMount() {
        ProductsApi.getAll().then((data) => {
            this.setState({
                products: data,
            });
        });
    }
    render() {
        return ( <
            >
            <
            Swiper slidesPerView = { 3 }
            spaceBetween = { 30 }
            freeMode = { true }
            pagination = {
                {
                    clickable: true,
                }
            }
            modules = {
                [FreeMode, Pagination] }
            className = "mySwiper mt-5" >
            {
                this.state.products.map((product) => ( <
                    SwiperSlide key = { product.id } > { " " } <
                    ProductItem product = { product }
                    />{" "} <
                    /SwiperSlide>
                ))
            } { " " } <
            /Swiper>{" "} <
            />
        );
    }
}