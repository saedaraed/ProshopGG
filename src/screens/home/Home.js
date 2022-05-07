import React from "react";

// import SectionProduct from "../../components/sectionProducts/SectionProduct";
// import SectionTopRate from "../../components/sectionTopRate/SectionTopRate";s
// import FeaturedSection from "../../components/featuredSection/FeaturedSection";

import Slider from "../../components/slider/Slider";
import ProductItem from "../../components/productItem/ProductItem";
import ProductsApi from "../../api/product";
import Categories from "../../components/catgories/Categories";
import Featured from "../../components/featured/Featured";
import "./style.css";
// import Slider from '../../components/slider/Slider'

export default class Home extends React.Component {
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
            div className = "App" >
            <
            Slider / >
            <
            h3 > Featured Categories < /h3> <Categories / >
            <
            div className = "featured" >
            <
            h3 > Featured Products < /h3>{" "} <
            div className = "container" > { " " } <
            Featured / >
            <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

// export default Home;