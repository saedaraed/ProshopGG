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

export default class ProductList extends React.Component {
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
            div className = "ProductList" >
            >
            {
                this.state.products.map((product) => ( <
                    list key = { product.id } > { " " } <
                    ProductItem product = { product }
                    />{" "} <
                    /list>
                ))
            } { " " } <
            /div>
        );
    }
}