import React from "react";
import { getById } from "../../api/product";
import "./style.css";
import Review from "../../components/review/Review";
import Counter from "../../components/counter/Counter";
import Featured from "../../components/featured/Featured";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/actions";
import Button from "../../components/button/Button";
const queryString = require("query-string");

class ProductDetails extends React.Component {
    state = {
        loading: true,
        quantity: 1,
        product: {},
    };

    componentDidMount() {
        const parsed = queryString.parse(window.location.search);
        getById(Number(parsed.id)).then((product) => {
            this.setState({
                product,
                loading: false,
            });
        });
    }
    handleQuantity = (event) => {
        const value = event.target.value;

        if (value < 0) return;

        this.setState({
            quantity: value,
        });
    };
    addToCart = (product) => {
        this.props.addToCart(product, this.state.quantity);
    };
    render() {
        // if (this.state.loading) return "Loading ..";

        const product = this.state.product;
        const quantity = this.state.quantity;

        // const [count, setCount] = useState(0);

        return ( <
            div className = "productDetails" >
            <
            div className = "container" >
            <
            div className = { "row" } >
            <
            div className = "col-lg-4" >
            <
            img src = { product.image }
            width = { "100%" }
            alt = "img" / > { " " } <
            /div>{" "} <
            div className = "col-lg-8" >
            <
            div className = "tit d-flex" >
            <
            h3 > { product.title } < /h3>{" "} <
            p className = "price" > $ { quantity * product.price } < /p>{" "} <
            /div>{" "} <
            Counter / >
            <
            div className = "color " >
            <
            p > Color: < /p> <p className="colorName"> silver</p > { " " } <
            /div>{" "} <
            p > { product.description } < /p> <br / >
            <
            br / >
            <
            input type = "number"
            value = { quantity }
            onChange = { this.handleQuantity }
            />{" "} <
            br / >
            <
            br / >
            <
            Button className = "btn btn-primary"
            onClick = {
                () => this.addToCart(product) }
            children = "Add to Cart" /
            > { " " } <
            /div>{" "} <
            /div>{" "} <
            Review / >
            <
            Featured / >
            <
            /div>{" "} <
            /div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productsInfo, quantity) =>
            dispatch(addToCart(productsInfo, quantity)),
    };
};

export default connect(null, mapDispatchToProps)(ProductDetails);