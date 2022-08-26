import React, { Component } from "react";
import { connect } from "react-redux";
import Checkout from "./shared/Checkout";
import { getProduct, resetProduct } from "../redux/productSlice";
import Header from "./shared/Header";
import { addToCart } from "../redux/cart";
import { withRouter } from "react-router-dom";
import {
  MainDiv,
  ImgDiv,
  MiddleImg,
  ImageRes,
  InnerRes,
} from "./styled/Product.Styled";

const mapStateToProps = (state) => {
  const { product, loading } = state.product;
  const { selectedCurrency } = state.currencies;
  return { product, selectedCurrency, loading };
};

export class Product extends Component {
  state = {
    imageIndex: 0,
    attributes: {},
    messageForAttribute: "",
  };

  // get product usiig dispath
  componentDidMount() {
    this.props.dispatch(getProduct(this.props?.match?.params.id));
  }

  // reset product
  componentWillUnmount() {
    this.props.dispatch(resetProduct());
  }

  // get attributes
  handleAttribute = (name, value) => {
    this.setState((state) => {
      return {
        ...state,
        attributes: { ...state.attributes, [name]: value },
      };
    });
  };

  // add  to cart
  addToCart = () => {

    // set up product to be added to the cart
    const product = {
      ...this.props.product,
      selectedAttributes: this.state.attributes,
      quantity: 1,
    };

    if (
      this.props.product.attributes.length ===
      Object.keys(this.state.attributes).length
    ) {
      // dispath action for the product
      this.props.dispatch(addToCart(product));
      this.setState((state) => {
        return { ...state, attributes: {}, messageForAttribute: "" };
      });
    } else {
      this.setState((state) => {
        return { ...state, messageForAttribute: "Select attributes please" };
      });
    }
  };

  render() {
    const { product, loading, selectedCurrency } = this.props;
    const { imageIndex, attributes, messageForAttribute } = this.state;
    const currencyNumber = product?.prices
      ? product?.prices?.findIndex(
          (p) => p?.currency?.label === selectedCurrency.label
        )
      : 0;


    return (
      <div>
        <Header />

        <MainDiv>
          {/* left side container */}
          <ImageRes>
            {/* The left div */}
            <InnerRes>
              {product?.gallery?.map((image, index) => (
                <ImgDiv
                  key={image}
                  src={image}
                  onClick={() =>
                    this.setState((state) => {
                      return { ...state, imageIndex: index };
                    })
                  }
                />
              ))}
            </InnerRes>

            {/*The middle div  */}
            <div style={{ marginLeft: "1.75rem" }}>
              {product?.gallery && (
                <MiddleImg src={product?.gallery[imageIndex]} />
              )}
            </div>
          </ImageRes>

          {/* The right part */}
          <Checkout
            addToCart={this.addToCart}
            index={currencyNumber}
            message={messageForAttribute}
            attributes={attributes}
            handleAttribute={this.handleAttribute}
            product={product}
            style={{ marginLeft: "1.75rem" }}
          />
        </MainDiv>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Product));
