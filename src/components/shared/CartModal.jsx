import React, { Component } from "react";
import CartModalCard from "./CartModalCard";
import {
  MainDiv,
  PriceDiv,
  Button,
  FooterButton,
  Footer,
  ButtonC,
  CheckDiv,
  Opacity,
  ContentDiv,
  HeaderText,
  HeaderDiv,
  SecondDiv,
  InnerMainDiv,
} from "./styled/CartModal.styled";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  const { itemsQuantity, items, totalPrice } = state.cart;
  const { selectedCurrency } = state.currencies;
  return { itemsQuantity, items, totalPrice, selectedCurrency };
};

export class CartModal extends Component {
  render() {
    const { itemsQuantity, items, totalPrice, selectedCurrency } = this.props;

    return (
      <div>
        <MainDiv
          onClick={() => {
            this.props.toggling();
          }}
        >
          <InnerMainDiv>
            <SecondDiv>
              {/*content*/}
              <ContentDiv
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {/*header*/}
                <HeaderDiv style={{ overflowY: "scroll" }}>
                  <HeaderText>
                    My Bag,{" "}
                    <span style={{ color: "gray" }}>
                      {" "}
                      {itemsQuantity} items
                    </span>
                  </HeaderText>

                  {/*body*/}
                  <div
                    style={{
                      overflowX: "hidden",
                    }}
                  >
                    {items.map((item, count) => (
                      <CartModalCard item={item} key={count + item.id} />
                    ))}
                  </div>
                </HeaderDiv>

                {/* <CartModalCard /> */}

                {/* The price and checkout div*/}
                <div
                  style={{
                    bottom: 0,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  <PriceDiv>
                    <div style={{ fontWeight: 700 }}>Total</div>
                    <div style={{ fontWeight: 700 }}>
                      {" "}
                      {selectedCurrency.symbol}
                      {parseFloat(totalPrice[selectedCurrency.label]).toFixed(
                        2
                      )}
                    </div>
                  </PriceDiv>
                  {/* Checkout and view bag */}
                  <CheckDiv>
                    <Link to="/cart">
                      <Button>VIEW BAG</Button>
                    </Link>
                    <Link to="/cart">
                      <ButtonC>CHECK OUT</ButtonC>
                    </Link>
                  </CheckDiv>
                </div>
              </ContentDiv>
            </SecondDiv>
          </InnerMainDiv>
        </MainDiv>
        <Opacity
          onClick={() => {
            this.props.toggling();
          }}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartModal);
