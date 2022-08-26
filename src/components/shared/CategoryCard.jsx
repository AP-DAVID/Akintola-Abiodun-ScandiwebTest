import React, { Component } from "react";
import {
  ImgDiv,
  Maindiv,
  CartImg,
  OutOfStock,
} from "../styled/Category.styled";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cart";
import clickCart from "../../assets/clickCart.svg";

const mapStateToProps = (state) => {
  const { selectedCurrency } = state.currencies;
  return { selectedCurrency };
};


export class CategoryCard extends Component {
  state = {
    visible: false,
  };

  handleClick = () => {
    const selectedAttributes = {};
    this.props.product.attributes.forEach(
      (attribute) => (selectedAttributes[attribute.id] = attribute.items[0].id)
    );
    this.props.dispatch(
      addToCart({ ...this.props.product, selectedAttributes, quantity: 1 })
    );
  };


  render() {
    const { id, brand, name, inStock, prices } = this.props.product;
     const selectedCurrency = this.props.selectedCurrency;
     const currencyIndex = prices.findIndex(
       (price) => price.currency.label === selectedCurrency.label
     );

    return (
      <Maindiv
        onMouseEnter={() => this.setState({ visible: true })}
        onMouseLeave={() => this.setState({ visible: false })}
        style={{ opacity: !inStock && 0.6 }}
      >
        {this.state.visible && inStock && (
          <CartImg onClick={this.handleClick} src={clickCart} />
        )}
        <Link
          style={{ textDecoration: "none", color: "#1d1f22" }}
          to={`/product/${id}`}
        >
          <ImgDiv src={this.props?.product?.gallery[0]} />
          <div
            style={{
              margin: "10px 0",
              fontWeight: 100,
              color: "#1d1f22",
              marginBottom: 0,
            }}
          >
            {brand}
            {name}
          </div>
          {!inStock && <OutOfStock> OUT OF STOCK</OutOfStock>}
          <div
            style={{
              fontWeight: 600,
              color: "#3d3a3a",
              margin: "9px 0",
            }}
          >
            {prices[currencyIndex].currency.symbol}
            {parseFloat(prices[2].amount).toFixed(2)}
          </div>
        </Link>
      </Maindiv>
    );
  }
}

export default connect(mapStateToProps)(CategoryCard);