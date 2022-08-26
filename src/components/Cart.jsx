import React, { Component } from "react";
import Cartcard from "./shared/Cartcard";
import { connect } from "react-redux";
import Header from "./shared/Header";

import {
  FirstText,
  FirstDiv,
  InnerFirstDiv,
  CheckoutDiv,
  Text,
  Span,
  Button,
} from "./styled/Cart.styled";
import CartModalCard from "./shared/CartModalCard";

const mapStateToProps = (state) => {
  const { items, itemsQuantity, totalPrice } = state.cart;
  const { selectedCurrency } = state.currencies;
  return { items, itemsQuantity, selectedCurrency, totalPrice };
};

export class Cart extends Component {
  render() {
    const { items, itemsQuantity, selectedCurrency, totalPrice } = this.props;

    const tax = selectedCurrency
      ? Math.round(
          (totalPrice[selectedCurrency.label] * 0.21 + Number.EPSILON) * 100
        ) / 100 || 0
      : 0;

    return (
      <div>
        <Header />

        <FirstText>CART</FirstText>

        {/* What's in the cart */}
        <FirstDiv>
          <InnerFirstDiv
            style={{
              borderBottom: "2px solid #d1d5db",
              borderTop: "2px solid #d1d5db",
            }}
          >
            {items?.map((item) => (
              <CartModalCard cart item={item} key={item.id} />
            ))}
          </InnerFirstDiv>
        </FirstDiv>

        {/* The checkout price */}
        <CheckoutDiv>
          <Text>
            Tax 21% :{" "}
            <Span>
              {selectedCurrency && selectedCurrency.symbol}
              {tax}
            </Span>
          </Text>
          <Text>
            Quantity :<Span>{itemsQuantity}</Span>
          </Text>
          <Text>
            Total :{" "}
            <Span>
              {" "}
              {selectedCurrency && selectedCurrency.symbol}{" "}
              {totalPrice[selectedCurrency.label]}
            </Span>
          </Text>

          {/* Order button */}
          <Button>Order</Button>
        </CheckoutDiv>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Cart);
